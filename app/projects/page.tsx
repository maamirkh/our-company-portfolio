"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/projects-data";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-6 mb-8">
        <Link href="/">
          <Button variant="outline" size="sm" className="rounded-full glass hover:bg-primary/10 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl"
          >
            A comprehensive list of our work, from AI-powered applications to 
            interactive 3D educational simulations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden group border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
