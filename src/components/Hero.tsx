
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Bot, Shield } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-trading-blue via-trading-blue-vibrant to-trading-blue-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-trading-yellow/20 text-trading-yellow border border-trading-yellow/30 text-sm font-medium backdrop-blur-sm">
              <Bot className="mr-2 h-4 w-4" />
              Intelligent Automated Trading
            </div>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6 text-white transition-all duration-1000 delay-100 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Automated Trading with{" "}
            <span className="text-trading-yellow">Artificial Intelligence</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-trading-blue-light mb-10 max-w-2xl mx-auto text-balance transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            An advanced MT4 trading EA powered by AI that analyzes market
            patterns, executes trades, and maximizes your profits with minimal
            effort.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="bg-trading-yellow hover:bg-trading-yellow-dark text-trading-blue-dark transition-all duration-300 shadow-yellow-glow hover:shadow-lg w-full sm:w-auto btn-effect font-semibold"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-trading-yellow text-trading-yellow hover:bg-trading-yellow/10 transition-all duration-300 w-full sm:w-auto bg-white/10 backdrop-blur-sm"
            >
              <a
                href="#features"
                className="text-sm hover:text-decoration-none font-medium"
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`mt-16 relative transition-all duration-1000 delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-feature bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-center p-8 display-block">
              <img src="/public/AI_MT5_landing.png" alt="AI MT4 Landing" />
              <p className="text-lg font-medium text-white">
                AI MT4 EA Trading dashboard visualization
              </p>
              <p className="text-sm text-trading-blue-light mt-2">
                Real-time market analytics powered by AI
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-20 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div
          className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
              <TrendingUp className="h-6 w-6 text-trading-yellow" />
            </div>
            <div>
              <h3 className="font-medium text-white">Optimal Entry Points</h3>
              <p className="text-sm text-trading-blue-light">
                AI-powered timing for maximum returns
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
              <Bot className="h-6 w-6 text-trading-yellow" />
            </div>
            <div>
              <h3 className="font-medium text-white">Self-Learning Algorithms</h3>
              <p className="text-sm text-trading-blue-light">
                Continuously improves trading strategies
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
              <Shield className="h-6 w-6 text-trading-yellow" />
            </div>
            <div>
              <h3 className="font-medium text-white">Risk Management</h3>
              <p className="text-sm text-trading-blue-light">
                Advanced stop-loss and take-profit settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
