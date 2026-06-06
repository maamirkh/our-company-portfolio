"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Rocket, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Innovating the Future with <br />
              <span className="text-gradient">AI-First Development</span>
            </h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              My journey began with a vision to bridge the gap between 
              traditional software engineering and the rapidly evolving world of 
              Artificial Intelligence. I don't just build websites; I build 
              intelligent systems that think, learn, and grow.
            </p>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              As an AI Solutions Architect and Full-Stack Engineer, I work at the 
              intersection of design and technology to deliver products that 
              are not only visually stunning but also technically superior.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "My Mission", text: "To empower businesses with intelligent digital tools." },
                { icon: Lightbulb, title: "My Vision", text: "To be a leader in AI-driven software innovation." },
              ].map((item, index) => (
                <div key={item.title} className="flex space-x-4">
                  <div className="mt-1">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass p-8 rounded-3xl border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <BrainCircuit className="w-24 h-24 text-primary mb-8 animate-pulse" />
              <h3 className="text-3xl font-bold mb-4">Personalized <br />Innovation</h3>
              <p className="text-muted mb-6">
                I specialize in helping startups move from idea to MVP in record 
                time, using agentic systems and spec-driven development to 
                ensure precision and speed.
              </p>
              <div className="flex items-center space-x-2 text-primary font-bold">
                <Rocket className="w-5 h-5" />
                <span>Accelerate Your Growth</span>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
