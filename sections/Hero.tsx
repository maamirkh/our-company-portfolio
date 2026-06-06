"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">
                Next-Gen AI Software Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight"
            >
              Building Intelligent <br />
              <span className="text-gradient">Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-base md:text-lg text-muted mb-8 leading-relaxed"
            >
              I empower startups and enterprises with AI-first web technologies, 
              agentic systems, and scalable digital architectures that drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <Link href="/start">
                <Button variant="premium" size="lg" className="rounded-full px-8">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="rounded-full px-8 glass">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-50"
            >
              {["Vercel", "Stripe", "OpenAI", "Framer"].map((partner) => (
                <div key={partner} className="text-sm font-bold tracking-widest text-white/40 uppercase">
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur-xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-[2rem] overflow-hidden border border-white/20 glass shadow-2xl">
                <Image
                  src="/assets/my-cover-pic.JPG"
                  alt="Muhammad Amir"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
