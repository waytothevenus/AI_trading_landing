
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Clock, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
    isSubmitting: false,
    isSubmitted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormState(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        variant: "destructive",
        title: "Invalid submission",
        description: "Please fill all required fields."
      });
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    // Simulate API call with timeout
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        message: "",
        subject: "general"
      }));
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        // icon: <CheckCircle2 className="h-4 w-4 text-green-500" />
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-trading-gray/30 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade">Contact Us</h2>
          <p className="text-lg text-trading-gray-medium dark:text-gray-300 max-w-2xl mx-auto slide-up-fade-delay-1">
            Have questions or need support? Our team is here to help you succeed with AI MT5 Bot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-6 slide-up-fade-delay-2">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-trading-blue mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-sm text-trading-gray-medium dark:text-gray-400">
                      support@aimt5bot.com
                    </p>
                    <p className="text-sm text-trading-gray-medium dark:text-gray-400">
                      info@aimt5bot.com
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-trading-blue mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-sm text-trading-gray-medium dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-trading-gray-light dark:text-gray-500 text-xs">
                      Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-trading-blue mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Response Time</h3>
                    <p className="text-sm text-trading-gray-medium dark:text-gray-400">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-2 slide-up-fade-delay-3">
            <Card className="p-6">
              {formState.isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                  <p className="text-trading-gray-medium dark:text-gray-300 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <RadioGroup 
                      value={formState.subject} 
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" />
                        <Label htmlFor="support" className="cursor-pointer">Technical Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="billing" id="billing" />
                        <Label htmlFor="billing" className="cursor-pointer">Billing Question</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-trading-blue hover:bg-trading-blue-dark"
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
