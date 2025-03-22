
import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { 
  BarChart, 
  Bot, 
  TrendingUp, 
  Clock, 
  Shield, 
  BarChart3, 
  Settings, 
  Zap
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Features = () => {
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

    const featureSection = document.getElementById("features");
    if (featureSection) {
      observer.observe(featureSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Trading Features
          </h2>
          <p className="text-trading-gray-medium max-w-2xl mx-auto">
            Our cutting-edge MT5 trading EA combines artificial intelligence
            with advanced trading algorithms to deliver exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 rounded-xl bg-trading-blue/5 border-2 border-trading-blue/30">
            <div className="text-3xl md:text-4xl font-bold text-trading-blue mb-2">
              <AnimatedCounter end={95} suffix="%" />
            </div>
            <p className="text-sm text-trading-gray-medium">Trading Accuracy</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-trading-blue/5 border-2 border-trading-blue/30">
            <div className="text-3xl md:text-4xl font-bold text-trading-blue mb-2">
              <AnimatedCounter end={24} suffix="/7" />
            </div>
            <p className="text-sm text-trading-gray-medium">
              Automated Trading
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-trading-blue/5 border-2 border-trading-blue/30">
            <div className="text-3xl md:text-4xl font-bold text-trading-blue mb-2">
              <AnimatedCounter prefix="+" end={300} />
            </div>
            <p className="text-sm text-trading-gray-medium">
              Trading Signals Daily
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            className={`transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Market Analysis"
              description="Advanced algorithms analyze market conditions and identify profitable trading opportunities in real-time."
              color="text-trading-blue"
            />
          </div>

          <div
            className={`transition-all duration-500 delay-100 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<TrendingUp className="h-5 w-5" />}
              title="Smart Trend Detection"
              description="Automatically identifies market trends and generates optimal entry and exit points."
              color="text-green-500"
            />
          </div>
          <div
            className={`transition-all duration-500 delay-200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<Clock className="h-5 w-5" />}
              title="24/7 Automated Trading"
              description="Trade around the clock without manual intervention, never missing profitable opportunities."
              color="text-purple-500"
            />
          </div>
          <div
            className={`transition-all duration-500 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Advanced Risk Management"
              description="Sophisticated stop-loss and take-profit mechanisms to protect your capital and maximize returns."
              color="text-orange-500"
            />
          </div>

          <div
            className={`transition-all duration-500 delay-400 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="Performance Analytics"
              description="Comprehensive reports and analytics to track your trading performance and profitability."
              color="text-sky-500"
            />
          </div>

          <div
            className={`transition-all duration-500 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FeatureCard
              icon={<Settings className="h-5 w-5" />}
              title="Customizable Strategies"
              description="Tailor the bot's trading strategies to match your risk tolerance and investment goals."
              color="text-trading-blue"
            />
          </div>
        </div>

        {/* Additional Feature Highlight */}
        <div
          className={`mt-16 p-8 rounded-xl bg-gradient-to-r from-trading-blue/10 to-trading-blue/5 border border-trading-blue/20 transition-all duration-700 delay-600 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-trading-blue/20">
              <Zap className="h-8 w-8 text-trading-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                ML-Enhanced Pattern Recognition
              </h3>
              <p className="text-trading-gray-medium">
                Our advanced machine learning algorithms continuously learn from
                market data to identify complex patterns that are invisible to
                human traders, giving you an unparalleled advantage in the
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
