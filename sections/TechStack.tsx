"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "HTML", category: "Frontend", image: "/assets/html.png" },
  { name: "JavaScript", category: "Frontend", image: "/assets/javascript.png" },
  { name: "TypeScript", category: "Frontend", image: "/assets/typescript.png" },
  { name: "React", category: "Frontend", image: "/assets/react.png" },
  { name: "Next.js", category: "Frontend", image: "/assets/next-js.jpg" },
  { name: "Tailwind CSS", category: "Frontend", image: "/assets/tailwindcss.png" },
  { name: "Python", category: "Backend", image: "/assets/python.jpg" },
  { name: "Node.js", category: "Backend", image: "/assets/node-js.png" },
  { name: "MongoDB", category: "Database", image: "/assets/mongodb.png" },
  { name: "Sanity CMS", category: "CMS", image: "/assets/sanity.png" },
  { name: "Clerk", category: "Auth", image: "/assets/clerk.png" },
  { name: "OpenAI", category: "AI", image: "/assets/openai-agents-sdk.jpg" },
  { name: "Stripe", category: "Payments", image: "/assets/stripe.png" },
  { name: "Payfast", category: "Payments", image: "/assets/payfast.png" },
  { name: "Framer Motion", category: "Design", image: "/assets/framer-motion.jpg" },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg"
            >
              We use the most advanced and reliable technologies to build 
              future-proof digital products.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full md:w-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass h-[160px] p-4 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.05]"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white mb-0.5">{tech.name}</span>
                  <span className="text-[9px] text-muted uppercase font-bold tracking-widest">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="relative flex overflow-x-hidden py-10 opacity-10">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {Array(5).fill(technologies).flat().map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/20">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
