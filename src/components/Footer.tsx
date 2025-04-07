import { Bot } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = {
  twitter: "#",
  facebook: "#",
  linkedin: "#",
  github: "#",
};

const platformIcons = {
  twitter: FaTwitter,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  github: FaGithub,
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-trading-gray-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-trading-blue mr-2" />
              <span className="text-lg text-black font-semibold">
                AI MT5 EA
              </span>
            </div>
            <p className="text-sm text-trading-gray-medium mb-4">
              Revolutionizing trading through artificial intelligence and
              machine learning.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "github"].map((social) => {
                const Icon = platformIcons[social];
                return (
                  <a
                    key={social}
                    href={socialLinks[social]}
                    className="text-trading-gray-medium hover:text-trading-blue transition-colors"
                    aria-label={`${social} link`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-trading-gray">
                      {Icon && <Icon className="h-4 w-4" fill="currentColor" />}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <ul className="flex space-x-4 sm:space-x-6 md:space-x-16 lg:space-x-32">
              {["Features", "Benefits", "Pricing", "Testimonials", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-trading-gray-medium hover:text-trading-blue transition-colors hover-link-effect inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-trading-gray-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-trading-gray-medium">
              &copy; {currentYear} AI MT5 EA. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-trading-gray-medium hover:text-trading-blue transition-colors"
                    >
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
