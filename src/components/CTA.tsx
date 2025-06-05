
import { useEffect, useState } from "react";
import { Check, X, Loader } from "lucide-react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(true);
  const [licenseKey, setLicenseKey] = useState("");

  useEffect(() => {
    const loadStripeInstance = async () => {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      if (clientSecret) {
        setClientSecret(clientSecret);
      } else {
        console.warn("No client secret found in URL");
      }

      setStripePromise(stripe);
      setStripeLoading(false);
    };

    loadStripeInstance();
  }, []);

  const handleToggleChange = (checked: boolean) => {
    setBillingCycle(checked ? "yearly" : "monthly");
  };

  const handleSubmit = async () => {
    if (!isConfirmed || !userId) return;

    setStripeLoading(true);
    setIsProcessing(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/stripe/create-payment-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount:
              billingCycle === "monthly"
                ? prices.monthly * 100
                : prices.yearly * 100 * 12,
            mt5UserId: userId,
            billingCycle,
          }),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to create payment intent");
      }

      setClientSecret(result.clientSecret);
      setShowModal(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsProcessing(false);
      setStripeLoading(false);
    }
  };

  const handlePaymentSuccess = async () => {
    setPaymentSuccess(true);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/licenses/personal`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mt5UserId: userId,
        }),
      }
    );
    if (response.status === 200) {
      const result = await response.json();
      setLicenseKey(result.license_key);
    }
  };

  const prices = {
    monthly: 99,
    yearly: 79,
  };

  const features = [
    "AI-powered MT4 trading bot",
    "24/7 automated trading",
    "Real-time market analysis",
    "Risk management tools",
    "Priority customer support",
  ];

  const StripePaymentForm = ({
    clientSecret,
    onPaymentSuccess,
    onClose,
  }: {
    clientSecret: string;
    onPaymentSuccess: () => void;
    onClose: () => void;
  }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [isPaymentElementComplete, setIsPaymentElementComplete] =
      useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false);
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      if (!isMounted) return;
      if (!stripe || !elements) {
        console.error("Stripe.js not loaded");
        return;
      }

      setIsProcessing(true);
      setMessage(null);

      try {
        const paymentElement = elements.getElement(PaymentElement);
        if (!paymentElement) {
          throw new Error("Payment element not found");
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
          throw submitError;
        }

        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/success`,
          },
          redirect: "if_required",
        });

        if (error) {
          throw error;
        }

        if (paymentIntent) {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              onPaymentSuccess();
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            default:
              setMessage("Payment failed. Please try again.");
              break;
          }
        }
      } catch (error) {
        console.error("Payment error:", error);
        setMessage(error.message || "An unexpected error occurred");
      } finally {
        if (isMounted) {
          setIsProcessing(false);
        }
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement
          onChange={(e) => setIsPaymentElementComplete(e.complete)}
        />

        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 py-2 rounded-sm hover:bg-gray-300 text-trading-blue"
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-trading-blue py-2 rounded-sm hover:bg-trading-blue-dark text-white"
            disabled={isProcessing || !isPaymentElementComplete}
          >
            {isProcessing
              ? "Processing..."
              : `Pay $${
                  billingCycle === "monthly"
                    ? prices.monthly
                    : prices.yearly * 12
                }`}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 p-2 text-center ${
              message.includes("succeeded") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    );
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-gradient-to-br from-trading-blue-light/30 to-trading-yellow/10">
      {(stripeLoading || isProcessing) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Loader className="h-8 w-8 animate-spin text-trading-blue" />
        </div>
      )}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden border border-trading-blue/20 shadow-feature">
            <div className="absolute inset-0 bg-gradient-to-br from-trading-blue/5 to-trading-yellow/5 z-0"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trading-blue">
                  Ready to Transform Your Trading?
                </h2>
                <p className="text-trading-gray-medium max-w-2xl mx-auto">
                  Join thousands of traders who are already benefiting from our
                  AI-powered MT4 trading bot.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 p-1 rounded-full bg-trading-gray/50 border border-trading-blue/20">
                  <span
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      billingCycle === "monthly"
                        ? "bg-white text-trading-blue font-medium rounded-full shadow-sm"
                        : "text-trading-gray-medium"
                    }`}
                  >
                    Monthly
                  </span>
                  <Switch
                    checked={billingCycle === "yearly"}
                    onCheckedChange={handleToggleChange}
                    className="data-[state=checked]:bg-trading-blue"
                  />
                  <span
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      billingCycle === "yearly"
                        ? "bg-white text-trading-blue font-medium rounded-full shadow-sm"
                        : "text-trading-gray-medium"
                    }`}
                  >
                    Yearly{" "}
                    <span className="text-trading-green text-xs font-semibold">
                      Save 20%
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border-2 border-trading-blue shadow-feature transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-lg w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-trading-blue">
                        Professional Plan
                      </h3>
                      <p className="text-trading-gray-medium text-sm">
                        Complete trading solution
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-trading-blue">
                        ${prices[billingCycle]}
                        <span className="text-sm font-normal text-trading-gray-medium">
                          /{billingCycle === "monthly" ? "mo" : "mo"}
                        </span>
                      </div>
                      {billingCycle === "yearly" && (
                        <p className="text-trading-green text-xs font-semibold">
                          Billed annually (${prices.yearly * 12})
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-trading-yellow/20 border border-trading-yellow/30 flex items-center justify-center">
                          <Check className="h-3 w-3 text-trading-blue" />
                        </div>
                        <span className="text-sm text-trading-blue">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 shadow-button hover:shadow-lg"
                    onClick={() => setShowModal(true)}
                  >
                    Get Started Now
                  </Button>

                  <p className="text-xs text-center text-trading-gray-medium mt-4">
                    14-day money-back guarantee. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full border border-trading-blue/20 shadow-feature">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-trading-blue">Confirm Your User ID</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium mb-1 text-trading-blue"
                >
                  MT4 User ID
                </label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-3 py-2 border border-trading-blue/20 rounded-md focus:border-trading-blue"
                  placeholder="Enter your MT4 user ID"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="confirmCheckbox"
                  type="checkbox"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-trading-blue focus:ring-trading-blue"
                />
                <label htmlFor="confirmCheckbox" className="ml-2 text-sm text-trading-gray-medium">
                  I confirm this is my correct MT4 user ID
                </label>
              </div>

              <Button
                className="w-full bg-trading-blue hover:bg-trading-blue-dark mt-4"
                disabled={!isConfirmed || !userId}
                onClick={handleSubmit}
              >
                Confirm and Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      )}
      {clientSecret && stripePromise && !paymentSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full border border-trading-blue/20 shadow-feature">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-trading-blue">Complete Your Payment</h3>
              <button
                onClick={() => {
                  setClientSecret("");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "stripe",
                  variables: {
                    colorText: "#1E3A8A",
                  },
                },
              }}
            >
              <StripePaymentForm
                clientSecret={clientSecret}
                onPaymentSuccess={handlePaymentSuccess}
                onClose={() => setClientSecret("")}
              />
            </Elements>
          </div>
        </div>
      )}
      {paymentSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center border border-trading-blue/20 shadow-feature">
            <div className="w-16 h-16 bg-trading-yellow/20 border border-trading-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-trading-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-trading-blue">Payment Successful!</h3>
            <p className="text-trading-gray-medium mb-4">
              Your subscription is now active. Your MT4 account ({userId}) will
              be upgraded shortly.
            </p>
            {licenseKey && (
              <p className="text-trading-gray-medium mb-4">
                Your license key:{" "}
                <span className="font-semibold text-trading-blue">{licenseKey}</span>
              </p>
            )}
            <Button
              className="w-full bg-trading-blue hover:bg-trading-blue-dark mt-4"
              onClick={() => {
                setShowModal(false);
                setPaymentSuccess(false);
                setClientSecret("");
                setIsConfirmed(false);
                setUserId("");
                setLicenseKey(""); // Reset the license key
              }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
