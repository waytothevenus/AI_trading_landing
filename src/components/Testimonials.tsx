
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const Testimonial = ({ quote, author, role, company, stars }: TestimonialProps) => (
  <Card className="border-none shadow-none bg-transparent">
    <CardContent className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700 shadow-soft">
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"} mr-1`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-trading-blue/20 dark:bg-trading-blue/30 rounded-full flex items-center justify-center text-trading-blue font-medium">
          {author.split(' ').map(name => name[0]).join('')}
        </div>
        <div className="ml-3">
          <div className="font-medium text-sm">{author}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{role}, {company}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This AI trading bot has completely transformed my trading strategy. The risk management features are exceptional, and I've seen a 32% increase in my portfolio in just three months!",
      author: "Michael Chen",
      role: "Professional Trader",
      company: "Vertex Capital",
      stars: 5
    },
    {
      quote: "As someone new to algorithmic trading, I was skeptical at first. But the intuitive interface and pre-built strategies made it easy to get started. The results have been nothing short of amazing.",
      author: "Sarah Johnson",
      role: "Retail Investor",
      company: "Self-employed",
      stars: 5
    },
    {
      quote: "The backtesting capabilities alone are worth the subscription. I've optimized my strategies to perform in various market conditions, giving me confidence even during volatile periods.",
      author: "David Rodriguez",
      role: "Hedge Fund Analyst",
      company: "Meridian Investments",
      stars: 5
    },
    {
      quote: "Customer support is phenomenal. When I had questions about implementing a custom strategy, the team guided me through every step. This level of service is rare these days.",
      author: "Jennifer Park",
      role: "Financial Advisor",
      company: "Oakwood Financial",
      stars: 4
    },
    {
      quote: "The mobile app is a game-changer. I can monitor my trades and adjust my strategies on the go. The real-time notifications have saved me from potential losses multiple times.",
      author: "Robert Williams",
      role: "Day Trader",
      company: "Independent",
      stars: 5
    },
    {
      quote: "I've tried several trading bots, but this one stands out for its AI capabilities. It adapts to changing market conditions better than anything else I've used. Worth every penny.",
      author: "Emma Thompson",
      role: "Crypto Investor",
      company: "Digital Asset Fund",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-trading-gray/50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade">What Our Users Say</h2>
          <p className="text-trading-gray-medium dark:text-gray-300 max-w-2xl mx-auto slide-up-fade-delay-1">
            Don't just take our word for it. Here's what traders around the world have to say about our AI-powered MT5 trading bot.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 slide-up-fade-delay-2">
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
