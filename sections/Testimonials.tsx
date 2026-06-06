"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechFlow",
    text: "Muhammad Amir transformed our vision into a reality. His AI expertise helped us automate 40% of our customer support within months.",
    avatar: "SC",
  },
  {
    name: "James Wilson",
    role: "Founder of BuildIt",
    text: "The construction estimation app he built for us is a game-changer. The UI is sleek, and the AI backend is incredibly accurate.",
    avatar: "JW",
  },
  {
    name: "Elena Rodriguez",
    role: "CTO at GlobaMark",
    text: "Professional, fast, and highly skilled. Muhammad is our go-to partner for all things Next.js and Generative AI.",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] p-8 relative hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 group">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="mb-6 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
