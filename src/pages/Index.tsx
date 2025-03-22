
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import UserGuides from "@/components/UserGuides";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for navbar
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add scroll animation for elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-up-fade, .slide-up-fade-delay-1, .slide-up-fade-delay-2, .slide-up-fade-delay-3, .slide-up-fade-delay-4');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <UserGuides />
        <FAQ />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ThemeToggle floating />
    </div>
  );
};

export default Index;
