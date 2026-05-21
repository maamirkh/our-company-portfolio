"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, ShoppingCart, Layout, Server, Cpu, Bot, 
  Zap, Users, MessageSquare, Workflow, Database, 
  CreditCard, Code, Rocket 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Business Websites",
    description: "Premium, SEO-optimized business websites that convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "E-Commerce Stores",
    description: "High-performance online stores built with modern headless commerce technology.",
    icon: ShoppingCart,
  },
  {
    title: "Frontend Development",
    description: "Pixel-perfect, responsive interfaces using Next.js and Tailwind CSS.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description: "Scalable, secure server-side architectures and API development.",
    icon: Server,
  },
  {
    title: "Generative AI Solutions",
    description: "Custom AI models and tools for image, text, and media generation.",
    icon: Cpu,
  },
  {
    title: "Agentic AI Systems",
    description: "Autonomous AI agents that handle complex workflows and decision-making.",
    icon: Bot,
  },
  {
    title: "Spec-Driven Development",
    description: "Rigorous development process ensuring precision and alignment with specs.",
    icon: Zap,
  },
  {
    title: "Full-Time AI Employees",
    description: "Deploy AI agents that work 24/7 as part of your digital workforce.",
    icon: Users,
  },
  {
    title: "RAG Chatbots",
    description: "Knowledge-aware chatbots that use your private data for accurate answers.",
    icon: MessageSquare,
  },
  {
    title: "AI Agents & Automation",
    description: "End-to-end business process automation using intelligent AI agents.",
    icon: Workflow,
  },
  {
    title: "CMS Integration",
    description: "Custom headless CMS setups for seamless content management.",
    icon: Database,
  },
  {
    title: "Payment Gateways",
    description: "Secure, global payment processing integration for any business.",
    icon: CreditCard,
  },
  {
    title: "Custom Software",
    description: "Tailor-made enterprise software solutions for unique business needs.",
    icon: Code,
  },
  {
    title: "SaaS Development",
    description: "Scalable cloud-based platforms designed for the modern web.",
    icon: Rocket,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-gradient">Core Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            We deliver cutting-edge technology solutions that help your business
            scale and thrive in the AI era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-white/60">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
