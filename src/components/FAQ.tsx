
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<typeof faqs>(faqs);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(term.toLowerCase()) ||
          faq.answer.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade text-trading-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-trading-gray-medium max-w-2xl mx-auto slide-up-fade-delay-1">
            Find answers to common questions about our AI MT4 trading bot
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 slide-up-fade-delay-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-trading-gray-medium" />
            <Input
              className="pl-10 py-6 text-base border-trading-blue/20 focus:border-trading-blue"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto slide-up-fade-delay-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium mb-4 text-trading-blue">No results found</h3>
              <p className="text-trading-gray-medium mb-6">
                We couldn't find any FAQs matching your search. Try a different
                term or contact support.
              </p>
              <Button className="bg-trading-yellow hover:bg-trading-yellow-dark text-trading-blue">
                <a
                  href="#contact"
                  className="text-sm hover:text-decoration-none font-medium"
                >
                  Contact Support
                </a>
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-trading-blue/20 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-trading-blue-light/30 text-left font-medium text-trading-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-trading-blue-light/10 text-trading-gray-medium">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-trading-blue">Still Have Questions?</h3>
          <p className="text-trading-gray-medium max-w-2xl mx-auto mb-8">
            Our team is here to help you make the most of our AI trading bot.
            Contact us with any questions.
          </p>
          <Button
            variant="outline"
            className="border-trading-yellow text-trading-blue hover:bg-trading-yellow/10 transition-all duration-300"
          >
            <a
              href="#contact"
              className="text-sm hover:text-decoration-none font-medium"
            >
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// FAQ data
const faqs = [
  {
    question: "What is AI MT4 Bot?",
    answer: "AI MT4 Bot is an intelligent algorithmic trading solution that integrates with MetaTrader 5 to automate your trading strategies. It uses advanced artificial intelligence to analyze market data, identify opportunities, and execute trades with precision."
  },
  {
    question: "Do I need to have MetaTrader 5 to use this bot?",
    answer: "Yes, you need to have MetaTrader 5 installed and a trading account with a broker that supports MT4. Our bot interfaces directly with your MT4 platform to execute trades."
  },
  {
    question: "How is AI MT4 Bot different from other trading bots?",
    answer: "Unlike conventional trading bots that rely solely on predetermined rules, our AI MT4 Bot uses machine learning algorithms that continuously learn and adapt to changing market conditions. It can identify patterns, analyze sentiment, and make predictions that traditional indicator-based systems might miss."
  },
  {
    question: "Is the bot suitable for beginners?",
    answer: "Yes! The bot is designed with both beginners and experienced traders in mind. Beginners can use our pre-built strategies and easy setup wizard, while experienced traders can customize and fine-tune settings to match their trading style."
  },
  {
    question: "What markets can I trade with the bot?",
    answer: "The AI MT4 Bot can trade any market available on your MetaTrader 5 platform, including:<ul class='list-disc pl-5 mt-2 space-y-1'><li>Forex</li><li>Cryptocurrencies</li><li>Indices</li><li>Commodities</li><li>Stocks</li><li>Futures</li></ul>"
  },
  {
    question: "How much money do I need to start?",
    answer: "There's no minimum capital requirement to use our bot. However, we recommend starting with at least $1,000 to properly implement risk management strategies. You can also use a demo account to test the bot before trading with real money."
  }
];

export default FAQ;
