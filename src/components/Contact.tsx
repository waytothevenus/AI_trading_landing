
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formState.name || !formState.email || !formState.message) {
    toast({
      variant: "destructive",
      title: "Invalid submission",
      description: "Please fill all required fields.",
    });
    return;
  }

  setFormState((prev) => ({ ...prev, isSubmitting: true }));

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email. Please try again later.");
    }

    setFormState((prev) => ({
      ...prev,
      isSubmitting: false,
      isSubmitted: true,
      name: "",
      email: "",
      message: "",
      subject: "general",
    }));

    toast({
      title: "Message sent successfully",
      description: "We'll get back to you as soon as possible.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      variant: "destructive",
      title: "Error",
      description:
        error.message || "Failed to send email. Please try again later.",
    });
    setFormState((prev) => ({ ...prev, isSubmitting: false }));
  }
};

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-trading-blue-light/30 to-trading-yellow/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up-fade text-trading-blue">Contact Us</h2>
          <p className="text-lg text-trading-gray-medium max-w-2xl mx-auto slide-up-fade-delay-1">
            Have questions or need support? Our team is here to help you succeed with AI MT4 Bot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-6 slide-up-fade-delay-2">
            <div className="space-y-6">
              <Card className="border-trading-blue/20 bg-white/90 backdrop-blur-sm shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
                    <Mail className="h-5 w-5 text-trading-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trading-blue">Email</h3>
                    <p className="text-sm text-trading-gray-medium">
                      support@aimt5bot.com
                    </p>
                    <p className="text-sm text-trading-gray-medium">
                      info@aimt5bot.com
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-trading-blue/20 bg-white/90 backdrop-blur-sm shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
                    <Phone className="h-5 w-5 text-trading-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trading-blue">Phone</h3>
                    <p className="text-sm text-trading-gray-medium">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-trading-gray-light">
                      Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-trading-blue/20 bg-white/90 backdrop-blur-sm shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-trading-yellow/20 border border-trading-yellow/30">
                    <Clock className="h-5 w-5 text-trading-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-trading-blue">Response Time</h3>
                    <p className="text-sm text-trading-gray-medium">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-2 slide-up-fade-delay-3">
            <Card className="p-6 border-trading-blue/20 bg-white/90 backdrop-blur-sm shadow-feature">
              {formState.isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-trading-yellow/20 border border-trading-yellow/30 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-trading-blue" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-trading-blue">Thank You!</h2>
                  <p className="text-trading-gray-medium mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                    variant="outline"
                    className="border-trading-blue text-trading-blue hover:bg-trading-blue hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-trading-blue">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="border-trading-blue/20 focus:border-trading-blue"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-trading-blue">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="border-trading-blue/20 focus:border-trading-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-trading-blue">Subject</Label>
                    <RadioGroup 
                      value={formState.subject} 
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" className="border-trading-blue text-trading-blue" />
                        <Label htmlFor="general" className="cursor-pointer text-trading-gray-medium">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="support" id="support" className="border-trading-blue text-trading-blue" />
                        <Label htmlFor="support" className="cursor-pointer text-trading-gray-medium">Technical Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="billing" id="billing" className="border-trading-blue text-trading-blue" />
                        <Label htmlFor="billing" className="cursor-pointer text-trading-gray-medium">Billing Question</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-trading-blue">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="border-trading-blue/20 focus:border-trading-blue"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-trading-blue hover:bg-trading-blue-dark shadow-button"
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
