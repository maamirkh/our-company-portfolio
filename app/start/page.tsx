"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Send, CheckCircle2, 
  MessageSquare, Sparkles, ShieldCheck, 
  Clock, Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";

const benefits = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Get a detailed proposal within 24-48 hours of your inquiry."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Your project ideas and data are protected by strict NDAs."
  },
  {
    icon: Zap,
    title: "Expert Guidance",
    description: "Direct consultation with senior architects and AI experts."
  }
];

const steps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Tell us about your vision and requirements."
  },
  {
    number: "02",
    title: "Discovery Call",
    description: "We'll hop on a call to dive deeper into the technical specs."
  },
  {
    number: "03",
    title: "Project Kickoff",
    description: "Once approved, we start building your next-gen solution."
  }
];

export default function StartProjectPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Retrieve the Access Key from environment variables
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      formData.append("access_key", accessKey);
    } else {
      console.error("Web3Forms Access Key is missing in .env");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pb-24 pt-24">
      <div className="container mx-auto px-6 flex justify-end mb-12">
        <Link href="/">
          <Button variant="outline" size="sm" className="rounded-full glass hover:bg-primary/10 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Build Your <br />
                <span className="text-gradient">Next Big Thing</span>
              </h1>
              <p className="text-muted text-lg mb-10 max-w-lg">
                Whether you're a startup looking for an MVP or an enterprise 
                scaling with AI, Muhammad Amir is your strategic partner.
              </p>

              <div className="space-y-8 mb-12">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  What happens next?
                </h4>
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 relative">
                      <span className="text-2xl font-black text-white/10">{step.number}</span>
                      <div>
                        <h5 className="font-bold text-white/90 text-sm">{step.title}</h5>
                        <p className="text-xs text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 md:p-10 border-white/5 bg-white/[0.02] relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Application Received!</h3>
                  <p className="text-muted mb-8">
                    Our team will review your project details and get back to 
                    you within 24 hours. Check your inbox for a confirmation email.
                  </p>
                  <Link href="/">
                    <Button variant="outline" className="rounded-full">Return Home</Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Project Inquiry Form</h3>
                    <p className="text-sm text-muted">Fill out the details below to get started.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Full Name</label>
                        <input
                          name="name"
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Email Address</label>
                        <input
                          name="email"
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Project Category</label>
                      <select name="category" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                        <option className="bg-[#030303]">AI & Machine Learning</option>
                        <option className="bg-[#030303]">Fullstack Web App</option>
                        <option className="bg-[#030303]">3D Simulation / Interactive</option>
                        <option className="bg-[#030303]">E-Commerce Solution</option>
                        <option className="bg-[#030303]">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Estimated Budget</label>
                      <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                        <option className="bg-[#030303]">$5k - $10k</option>
                        <option className="bg-[#030303]">$10k - $25k</option>
                        <option className="bg-[#030303]">$25k - $50k</option>
                        <option className="bg-[#030303]">$50k+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Project Description</label>
                      <textarea
                        name="message"
                        required
                        placeholder="Tell us about your goals, features, and timeline..."
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      variant="premium" 
                      className="w-full py-7 text-lg rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Project Application"} <Send className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <p className="text-[10px] text-center text-muted">
                      By submitting, you agree to our terms and privacy policy. 
                      We'll never share your data.
                    </p>
                  </form>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
