
import React from "react";
import { Bot } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-trading-gray-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-trading-blue mr-2" />
              <span className="text-lg font-semibold">AI MT5 Bot</span>
            </div>
            <p className="text-sm text-trading-gray-medium mb-4">
              Revolutionizing trading through artificial intelligence and machine learning.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "github"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-trading-gray-medium hover:text-trading-blue transition-colors"
                  aria-label={`${social} link`}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-trading-gray">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Benefits", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-trading-gray-medium hover:text-trading-blue transition-colors hover-link-effect inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Tutorials", "Blog", "Knowledge Base", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-trading-gray-medium hover:text-trading-blue transition-colors hover-link-effect inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Careers", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-trading-gray-medium hover:text-trading-blue transition-colors hover-link-effect inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-trading-gray-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-trading-gray-medium">
              &copy; {currentYear} AI MT5 Bot. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-trading-gray-medium hover:text-trading-blue transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
