
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserGuides = () => {
  return (
    <section
      id="guides"
      className="section-padding bg-gradient-to-br from-trading-blue-light/20 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade text-trading-blue">
            User Guides
          </h2>
          <p className="text-trading-gray-medium max-w-2xl mx-auto slide-up-fade-delay-1">
            Comprehensive guides to help you get the most out of your AI MT4
            trading bot
          </p>
        </div>

        <Tabs
          defaultValue="getting-started"
          className="max-w-4xl mx-auto slide-up-fade-delay-2"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-trading-blue-light/20">
            <TabsTrigger value="getting-started" className="data-[state=active]:bg-trading-yellow data-[state=active]:text-trading-blue">Getting Started</TabsTrigger>
            <TabsTrigger value="strategies" className="data-[state=active]:bg-trading-yellow data-[state=active]:text-trading-blue">Strategy Setup</TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-trading-yellow data-[state=active]:text-trading-blue">Advanced Features</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card className="border-trading-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center text-trading-blue">
                  <Bot className="mr-2 text-trading-yellow" /> Getting Started
                  with AI MT4 Bot
                </CardTitle>
                <CardDescription className="text-trading-gray-medium">
                  Learn the basics and set up your first automated trading
                  strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-trading-blue">1. Account Setup</h3>
                  <p className="text-trading-gray-medium">
                    After subscribing to AI MT4 Bot, you'll receive login
                    credentials via email. Follow these steps to get started:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-trading-gray-medium">
                    <li>
                      Download and install MetaTrader 5 from the official
                      website
                    </li>
                    <li>
                      Login to your MT4 account using your broker credentials
                    </li>
                    <li>
                      Access the AI MT4 Bot dashboard using your subscription
                      credentials
                    </li>
                    <li>
                      Connect your MT4 account to the AI bot using the API key
                      provided in your dashboard
                    </li>
                    <li>
                      Verify the connection by checking the status indicator in
                      the dashboard
                    </li>
                  </ol>
                  <div className="bg-trading-yellow/10 p-4 rounded-md border border-trading-yellow/30 mt-4">
                    <p className="text-sm text-trading-blue">
                      <strong>Tip:</strong> Make sure your MT4 platform is
                      running with internet connectivity whenever you want the
                      bot to trade.
                    </p>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-trading-yellow hover:bg-trading-yellow-dark text-trading-blue">
                  Watch Video Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies">
            <Card className="border-trading-blue/20">
              <CardHeader>
                <CardTitle className="text-trading-blue">
                  Creating and Optimizing Trading Strategies
                </CardTitle>
                <CardDescription className="text-trading-gray-medium">
                  Learn how to set up custom strategies and optimize parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-trading-blue">Strategy Selection</h3>
                  <p className="text-trading-gray-medium">
                    AI MT4 Bot offers three ways to implement trading
                    strategies:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-trading-gray-medium">
                    <li>
                      <strong>Pre-built strategies</strong> - Select from our
                      library of tested strategies
                    </li>
                    <li>
                      <strong>Custom strategy builder</strong> - Use our visual
                      editor to create strategies without coding
                    </li>
                    <li>
                      <strong>Advanced custom coding</strong> - Write your own
                      strategies using our Python API
                    </li>
                  </ul>
                  <p className="text-trading-gray-medium">
                    For beginners, we recommend starting with pre-built
                    strategies while you learn the platform.
                  </p>
                </div>

                <div className="bg-trading-orange/10 p-4 rounded-md border border-trading-orange/30 mt-4">
                  <p className="text-sm text-trading-blue">
                    <strong>Important:</strong> Past performance is not
                    indicative of future results. Always use proper risk
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="border-trading-blue/20">
              <CardHeader>
                <CardTitle className="text-trading-blue">Advanced Features</CardTitle>
                <CardDescription className="text-trading-gray-medium">
                  Unlock the full potential of AI MT4 Bot with these advanced
                  capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-trading-blue">AI Market Analysis</h3>
                  <p className="text-trading-gray-medium">
                    The AI MT4 Bot uses advanced machine learning algorithms to
                    analyze market data and identify potential trading
                    opportunities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-trading-gray-medium">
                    <li>
                      <strong>Pattern recognition</strong> - Identifies chart
                      patterns with higher accuracy than traditional indicators
                    </li>
                    <li>
                      <strong>Sentiment analysis</strong> - Analyzes news and
                      social media to gauge market sentiment
                    </li>
                    <li>
                      <strong>Correlation detection</strong> - Identifies
                      relationships between different markets
                    </li>
                    <li>
                      <strong>Volatility forecasting</strong> - Predicts
                      potential market volatility
                    </li>
                  </ul>
                </div>

                <div className="bg-trading-blue/10 p-4 rounded-md border border-trading-blue/30 mt-4">
                  <p className="text-sm text-trading-blue">
                    <strong>Note:</strong> API access is available in the
                    professional subscription plan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UserGuides;
