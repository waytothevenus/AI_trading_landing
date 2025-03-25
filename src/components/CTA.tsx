
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

const CTA = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  const prices = {
    monthly: 99,
    yearly: 79 // 20% discount
  };
  
  const handleToggleChange = () => {
    setBillingCycle(prev => prev === "monthly" ? "yearly" : "monthly");
  };

  const features = [
    "3 Live Trading Accounts",
    "15 AI Trading Strategies",
    "Advanced Risk Management",
    "Priority Support",
    "Mobile App Access",
    "Real-time Analytics Dashboard",
    "Strategy Backtesting",
    "API Access",
    "Unlimited Trading Indicators"
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-trading-blue/10 to-trading-blue/5 dark:from-trading-blue/5 dark:to-black/20 z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
                <p className="text-trading-gray-medium dark:text-gray-300 max-w-2xl mx-auto">
                  Join thousands of traders who are already benefiting from our AI-powered MT5 trading bot.
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 p-1 rounded-full bg-trading-gray dark:bg-trading-gray-dark/50 border border-trading-gray-light dark:border-trading-gray-dark">
                  <span className={`px-4 py-2 text-sm transition-all duration-300 ${billingCycle === "monthly" ? "bg-white dark:bg-trading-gray-dark text-trading-blue-dark dark:text-white font-medium rounded-full shadow-sm" : ""}`}>
                    Monthly
                  </span>
                  <Switch 
                    checked={billingCycle === "yearly"} 
                    onCheckedChange={handleToggleChange}
                    className="data-[state=checked]:bg-trading-blue"
                  />
                  <span className={`px-4 py-2 text-sm transition-all duration-300 ${billingCycle === "yearly" ? "bg-white dark:bg-trading-gray-dark text-trading-blue-dark dark:text-white font-medium rounded-full shadow-sm" : ""}`}>
                    Yearly <span className="text-trading-green text-xs font-semibold">Save 20%</span>
                  </span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white/90 dark:bg-trading-gray-dark/90 backdrop-blur-sm rounded-xl p-8 border-2 border-trading-blue shadow-feature transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-lg w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold">Professional Plan</h3>
                      <p className="text-trading-gray-medium dark:text-gray-400 text-sm">Complete trading solution</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">${prices[billingCycle]}<span className="text-sm font-normal text-trading-gray-medium dark:text-gray-400">/{billingCycle === "monthly" ? "mo" : "mo"}</span></div>
                      {billingCycle === "yearly" && <p className="text-trading-green text-xs font-semibold">Billed annually (${prices.yearly * 12})</p>}
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
                  
                  <Button className="w-full bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 shadow-button hover:shadow-lg btn-effect">
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
    </section>
  );
};

export default CTA;
