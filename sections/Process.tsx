"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "I dive deep into your business goals, challenges, and target audience.",
  },
  {
    title: "Planning",
    description: "Creating a robust roadmap, technical specifications, and architecture.",
  },
  {
    title: "Design",
    description: "Crafting modern, intuitive UI/UX that aligns with your brand identity.",
  },
  {
    title: "Development",
    description: "Building your product with clean code and scalable architecture.",
  },
  {
    title: "AI Integration",
    description: "Supercharging your software with intelligent AI features and agents.",
  },
  {
    title: "Deployment",
    description: "Launching your product to production with zero downtime.",
  },
  {
    title: "Support",
    description: "Continuous monitoring, maintenance, and strategic updates.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Workflow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            A streamlined process designed for speed, quality, and innovation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500"
                  >
                    <span className="text-primary font-bold text-4xl mb-4 block opacity-20">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="absolute w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                  <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping" />
                </div>

                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
