'use client'
import { Github, Linkedin, Twitter, Mail, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t-red-500 border-2 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="HavenTech Logo" width={200} height={100} />
            </Link>
            <p className="text-sm opacity-80">
              Delivering cutting-edge digital solutions with modern technology and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">About</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Services</Link></li>
              <li><Link href="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Portfolio</Link></li>
              <li><Link href="/team" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Web Development</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Mobile Apps</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">Cloud Solutions</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Github size={20} />
              </a> */}
              <a href="https://www.linkedin.com/company/thehavenech/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566527994940" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Facebook size={20} />
              </a>
              <a href="mailto:thehaventechofficial@gmail.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
          <p>© {currentYear} Haven Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
