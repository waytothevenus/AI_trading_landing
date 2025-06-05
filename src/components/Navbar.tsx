
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Bot
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-trading-blue-dark/90 backdrop-blur-md shadow-sm"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-trading-yellow mr-2" />
            <span className={`text-xl font-semibold tracking-tight ${
              isScrolled ? "text-trading-blue" : "text-white"
            }`}>
              AI MT4 EA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              Features
            </a>
            <a
              href="#benefits"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              Benefits
            </a>
            <a
              href="#guides"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              User Guides
            </a>
            <a
              href="#faq"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium hover-link-effect transition-colors ${
                isScrolled 
                  ? "text-trading-blue hover:text-trading-blue-vibrant" 
                  : "text-white hover:text-trading-yellow"
              }`}
            >
              Contact
            </a>
            <Button className="bg-trading-yellow hover:bg-trading-yellow-dark text-trading-blue-dark transition-all duration-300 shadow-yellow-glow hover:shadow-lg btn-effect font-semibold">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full hover:bg-white/10 focus:outline-none ${
                isScrolled ? "text-trading-blue" : "text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20 animate-fade-in bg-white/10 backdrop-blur-sm rounded-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#guides"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                User Guides
              </a>
              <a
                href="#faq"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                className="bg-trading-yellow hover:bg-trading-yellow-dark text-trading-blue-dark transition-all duration-300 w-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
