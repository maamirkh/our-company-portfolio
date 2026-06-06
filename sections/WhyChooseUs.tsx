"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Rocket, Code, Layout, Smartphone, Search, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  { title: "Modern Technologies", icon: Rocket },
  { title: "AI Expertise", icon: Zap },
  { title: "Scalable Architecture", icon: Layout },
  { title: "Clean Code", icon: Code },
  { title: "Fast Delivery", icon: Smartphone },
  { title: "Secure Systems", icon: Lock },
  { title: "SEO Optimized", icon: Search },
  { title: "Responsive Design", icon: Shield },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            I combine technical excellence with business strategy to deliver
            results that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-6 text-center border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group">
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm md:text-base">{feature.title}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
