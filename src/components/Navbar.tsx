
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
          ? "bg-white/80 dark:bg-trading-gray-dark/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-trading-blue mr-2" />
            <span className="text-xl font-semibold tracking-tight">
              AI MT4 EA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              Benefits
            </a>
            <a
              href="#guides"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              User Guides
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover-link-effect text-foreground transition-colors hover:text-trading-blue"
            >
              Contact
            </a>
            {/* <ThemeToggle /> */}
            <Button className="bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 shadow-button hover:shadow-lg btn-effect">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-trading-gray focus:outline-none"
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
          <div className="md:hidden mt-4 py-4 border-t border-trading-gray-light animate-fade-in dark:border-trading-gray-dark">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#guides"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                User Guides
              </a>
              <a
                href="#faq"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-foreground hover:bg-trading-gray dark:hover:bg-trading-gray-dark/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                className="bg-trading-blue hover:bg-trading-blue-dark transition-all duration-300 w-full"
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
