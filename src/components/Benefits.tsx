
import React, { useEffect, useState } from "react";
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Bot, 
  BookOpen, 
  RefreshCw
} from "lucide-react";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const benefitsSection = document.getElementById("benefits");
    if (benefitsSection) {
      observer.observe(benefitsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Save Valuable Time",
      description: "Eliminate manual market monitoring and trade execution. The AI bot works 24/7 so you don't have to.",
      delay: "0"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Increase Profitability",
      description: "AI-driven analysis identifies more profitable opportunities than humanly possible, enhancing your returns.",
      delay: "100"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Reduce Emotional Trading",
      description: "Remove human emotions from trading decisions, avoiding common pitfalls that lead to losses.",
      delay: "200"
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "Leverage Advanced Technology",
      description: "Benefit from cutting-edge AI and machine learning algorithms typically only available to institutional traders.",
      delay: "300"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Learn From AI Insights",
      description: "Gain valuable market insights from the AI's analysis that can improve your overall trading knowledge.",
      delay: "400"
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Continuous Improvement",
      description: "The self-learning AI continuously improves its strategies based on market performance and results.",
      delay: "500"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-trading-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Trading Bot</h2>
          <p className="text-trading-gray-medium">
            Experience the numerous advantages of automated AI trading that can transform your trading results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-soft transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-trading-blue/10 mb-4">
                <div className="text-trading-blue">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-trading-gray-medium text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-white rounded-xl p-8 shadow-feature transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience the Future of Trading Today</h3>
              <p className="text-trading-gray-medium mb-6">
                Our AI trading bot represents the cutting edge of financial technology, bringing institutional-grade algorithms to individual traders.
              </p>
              <ul className="space-y-3">
                {[
                  "No coding knowledge required",
                  "Simple setup process that takes minutes",
                  "Compatible with all MT5 brokers",
                  "Customizable to match your trading preferences"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 text-trading-blue mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-trading-blue/5 p-6 rounded-xl border border-trading-blue/10">
              <h4 className="font-semibold mb-4 text-center">Average Performance Metrics</h4>
              <div className="space-y-4">
                {[
                  { label: "Monthly Return", value: "8-15%" },
                  { label: "Win Rate", value: "76%" },
                  { label: "Drawdown", value: "< 10%" },
                  { label: "Risk-Reward Ratio", value: "1:2.5" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-trading-gray-medium">{stat.label}</span>
                    <span className="font-mono font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-trading-blue/10 text-center">
                <p className="text-xs text-trading-gray-medium italic">
                  *Past performance is not indicative of future results. Trading involves risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
