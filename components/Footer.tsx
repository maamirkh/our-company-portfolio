"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Logo />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Building intelligent digital experiences with AI & modern web 
              technologies. Empowering the next generation of startups.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="#services" className="hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Cloud Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Profile</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/maamirkh" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <GithubIcon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/muhammad-amir-677681202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <LinkedinIcon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Muhammad Amir. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-muted">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
