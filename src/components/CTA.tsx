import { useEffect, useState } from "react";
import { Check, X, Loader } from "lucide-react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe, StripePaymentElementChangeEvent } from "@stripe/stripe-js";
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

      console.log("Payment Intent Result:", result.clientSecret);
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

  const prices = {
    monthly: 99,
    yearly: 79,
  };

  const features = [
    "AI-powered MT5 trading bot",
    "24/7 automated trading",
    "Real-time market analysis",
    "Risk management tools",
    "Priority customer support",
  ];

  const StripePaymentForm = ({ clientSecret }: { clientSecret: string }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isPaymentElementComplete, setIsPaymentElementComplete] =
      useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      if (!stripe || !elements) {
        console.error("Stripe.js has not loaded yet.");
        return;
      }

      setIsProcessing(true);
      setMessage(null);

      try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
          console.error("Submit error:", submitError);
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
          console.error("Payment error:", error);
          throw error;
        }

        if (paymentIntent) {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              setPaymentSuccess(true);
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Payment failed. Please try again.");
              break;
            default:
              setMessage("Something went wrong.");
              break;
          }
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast({
          variant: "destructive",
          title: "Payment Error",
          description: error.message,
        });
      } finally {
        setIsProcessing(false);
      }
    };

    const handleChange = (event: StripePaymentElementChangeEvent) => {
      setIsPaymentElementComplete(event.complete);
    };

    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement onChange={handleChange} />
        <button
          type="submit"
          className="w-full bg-trading-blue py-2 rounded-sm hover:bg-trading-blue-dark mt-4"
          disabled={!stripe || isProcessing || !isPaymentElementComplete}
        >
          {isProcessing
            ? "Processing..."
            : `Pay ${billingCycle === "monthly" ? "$99" : "$948"}`}
        </button>
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
    <section id="pricing" className="section-padding relative overflow-hidden">
      {(stripeLoading || isProcessing) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Loader className="h-8 w-8 animate-spin text-trading-blue" />
        </div>
      )}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-trading-blue/10 to-trading-blue/5 dark:from-trading-blue/5 dark:to-black/20 z-0"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Trading?
                </h2>
                <p className="text-trading-gray-medium dark:text-gray-300 max-w-2xl mx-auto">
                  Join thousands of traders who are already benefiting from our
                  AI-powered MT5 trading bot.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 p-1 rounded-full bg-trading-gray dark:bg-trading-gray-dark/50 border border-trading-gray-light dark:border-trading-gray-dark">
                  <span
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      billingCycle === "monthly"
                        ? "bg-white dark:bg-trading-gray-dark text-trading-blue-dark dark:text-white font-medium rounded-full shadow-sm"
                        : ""
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
                        ? "bg-white dark:bg-trading-gray-dark text-trading-blue-dark dark:text-white font-medium rounded-full shadow-sm"
                        : ""
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
                <div className="bg-white/90 dark:bg-trading-gray-dark/90 backdrop-blur-sm rounded-xl p-8 border-2 border-trading-blue shadow-feature transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-lg w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Professional Plan
                      </h3>
                      <p className="text-trading-gray-medium dark:text-gray-400 text-sm">
                        Complete trading solution
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">
                        ${prices[billingCycle]}
                        <span className="text-sm font-normal text-trading-gray-medium dark:text-gray-400">
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
                        <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-trading-blue/10 dark:bg-trading-blue/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-trading-blue" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 shadow-button hover:shadow-lg btn-effect"
                    onClick={() => setShowModal(true)}
                  >
                    Get Started Now
                  </Button>

                  <p className="text-xs text-center text-trading-gray-medium dark:text-gray-400 mt-4">
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
          <div className="bg-white dark:bg-trading-gray-dark rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Confirm Your User ID</h3>
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
                  className="block text-sm font-medium mb-1"
                >
                  MT5 User ID
                </label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md dark:bg-trading-gray-dark/80"
                  placeholder="Enter your MT5 user ID"
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
                <label htmlFor="confirmCheckbox" className="ml-2 text-sm">
                  I confirm this is my correct MT5 user ID
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
      {clientSecret && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-trading-gray-dark rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add Payment Method</h3>
              <button
                onClick={() => setClientSecret("")}
                className="text-gray-500 hover:text-gray-700"
                disabled={isProcessing}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripePaymentForm clientSecret={clientSecret} />
            </Elements>
          </div>
        </div>
      )}
      {paymentSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-trading-gray-dark rounded-xl p-6 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your subscription is now active. Your MT5 account ({userId}) will
              be upgraded shortly.
            </p>
            <Button
              className="w-full bg-trading-blue hover:bg-trading-blue-dark mt-4"
              onClick={() => {
                setShowModal(false);
                setPaymentSuccess(false);
                setClientSecret("");
                setIsConfirmed(false);
                setUserId("");
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
