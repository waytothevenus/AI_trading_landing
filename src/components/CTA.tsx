
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-trading-blue/10 to-trading-blue/5 z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
                <p className="text-trading-gray-medium max-w-2xl mx-auto">
                  Join thousands of traders who are already benefiting from our AI-powered MT5 trading bot.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter Plan */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-trading-gray-light shadow-soft transition-all duration-300 hover:shadow-feature hover:-translate-y-1">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-1">Starter</h3>
                    <p className="text-trading-gray-medium text-sm">Perfect for beginners</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">$49<span className="text-sm font-normal text-trading-gray-medium">/month</span></div>
                    <p className="text-trading-gray-medium text-xs mt-1">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "1 Live Trading Account",
                      "5 AI Trading Strategies",
                      "Basic Risk Management",
                      "Email Support",
                      "Mobile App Access"
                    ].map((feature, i) => (
                      <li key={i} className="flex text-sm">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-trading-gray-dark hover:bg-black transition-all duration-300 btn-effect">
                    Get Started
                  </Button>
                </div>
                
                {/* Pro Plan */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-trading-blue shadow-feature relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 z-10 scale-105">
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-trading-blue text-white text-xs font-semibold py-1 px-3 rounded-full">Most Popular</span>
                  </div>
                  
                  <div className="mb-6 mt-2">
                    <h3 className="text-lg font-semibold mb-1">Professional</h3>
                    <p className="text-trading-gray-medium text-sm">For serious traders</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">$99<span className="text-sm font-normal text-trading-gray-medium">/month</span></div>
                    <p className="text-trading-gray-medium text-xs mt-1">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "3 Live Trading Accounts",
                      "15 AI Trading Strategies",
                      "Advanced Risk Management",
                      "Priority Support",
                      "Mobile App Access",
                      "Real-time Analytics Dashboard",
                      "Strategy Backtesting"
                    ].map((feature, i) => (
                      <li key={i} className="flex text-sm">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 shadow-button hover:shadow-lg btn-effect">
                    Get Started
                  </Button>
                </div>
                
                {/* Enterprise Plan */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-trading-gray-light shadow-soft transition-all duration-300 hover:shadow-feature hover:-translate-y-1">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-1">Enterprise</h3>
                    <p className="text-trading-gray-medium text-sm">For professional traders</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">$199<span className="text-sm font-normal text-trading-gray-medium">/month</span></div>
                    <p className="text-trading-gray-medium text-xs mt-1">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Unlimited Trading Accounts",
                      "All AI Trading Strategies",
                      "Custom Strategy Development",
                      "24/7 Dedicated Support",
                      "Mobile App Access",
                      "Advanced Analytics Suite",
                      "Strategy Backtesting",
                      "API Access"
                    ].map((feature, i) => (
                      <li key={i} className="flex text-sm">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-trading-gray-dark hover:bg-black transition-all duration-300 btn-effect">
                    Get Started
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-sm text-trading-gray-medium mb-6">
                  All plans include a 14-day money-back guarantee. No questions asked.
                </p>
                <div className="inline-flex items-center p-1 rounded-full bg-trading-gray border border-trading-gray-light">
                  <span className="px-4 py-2 text-sm">Monthly</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm shadow-sm">Yearly (Save 20%)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Still Have Questions?</h3>
            <p className="text-trading-gray-medium max-w-2xl mx-auto mb-8">
              Our team is here to help you make the most of our AI trading bot. Contact us with any questions.
            </p>
            <Button 
              variant="outline" 
              className="border-trading-blue text-trading-blue hover:bg-trading-blue/5 transition-all duration-300"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
