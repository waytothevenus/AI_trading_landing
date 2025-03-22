
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ArrowRight, BarChart3, Shield, BookOpen, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserGuides = () => {
  return (
    <section id="guides" className="section-padding bg-trading-gray/30 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade">User Guides</h2>
          <p className="text-trading-gray-medium dark:text-gray-300 max-w-2xl mx-auto slide-up-fade-delay-1">
            Comprehensive guides to help you get the most out of your AI MT5 trading bot
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto slide-up-fade-delay-2">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="strategies">Strategy Setup</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 text-trading-blue" /> Getting Started with AI MT5 Bot
                </CardTitle>
                <CardDescription>Learn the basics and set up your first automated trading strategy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">1. Account Setup</h3>
                  <p>After subscribing to AI MT5 Bot, you'll receive login credentials via email. Follow these steps to get started:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Download and install MetaTrader 5 from the official website</li>
                    <li>Login to your MT5 account using your broker credentials</li>
                    <li>Access the AI MT5 Bot dashboard using your subscription credentials</li>
                    <li>Connect your MT5 account to the AI bot using the API key provided in your dashboard</li>
                    <li>Verify the connection by checking the status indicator in the dashboard</li>
                  </ol>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-100 dark:border-blue-800 mt-4">
                    <p className="text-sm"><strong>Tip:</strong> Make sure your MT5 platform is running with internet connectivity whenever you want the bot to trade.</p>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-trading-blue hover:bg-trading-blue-dark">
                  Watch Video Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="strategies">
            <Card>
              <CardHeader>
                <CardTitle>Creating and Optimizing Trading Strategies</CardTitle>
                <CardDescription>Learn how to set up custom strategies and optimize parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Strategy Selection</h3>
                  <p>AI MT5 Bot offers three ways to implement trading strategies:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Pre-built strategies</strong> - Select from our library of tested strategies</li>
                    <li><strong>Custom strategy builder</strong> - Use our visual editor to create strategies without coding</li>
                    <li><strong>Advanced custom coding</strong> - Write your own strategies using our Python API</li>
                  </ul>
                  <p>For beginners, we recommend starting with pre-built strategies while you learn the platform.</p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md border border-amber-100 dark:border-amber-800 mt-4">
                  <p className="text-sm"><strong>Important:</strong> Past performance is not indicative of future results. Always use proper risk management.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
                <CardDescription>Unlock the full potential of AI MT5 Bot with these advanced capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">AI Market Analysis</h3>
                  <p>The AI MT5 Bot uses advanced machine learning algorithms to analyze market data and identify potential trading opportunities:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Pattern recognition</strong> - Identifies chart patterns with higher accuracy than traditional indicators</li>
                    <li><strong>Sentiment analysis</strong> - Analyzes news and social media to gauge market sentiment</li>
                    <li><strong>Correlation detection</strong> - Identifies relationships between different markets</li>
                    <li><strong>Volatility forecasting</strong> - Predicts potential market volatility</li>
                  </ul>
                </div>

                <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-md border border-violet-100 dark:border-violet-800 mt-4">
                  <p className="text-sm"><strong>Note:</strong> API access is available in the professional subscription plan.</p>
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
