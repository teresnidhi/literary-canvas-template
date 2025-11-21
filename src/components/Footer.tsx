import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import societyLogo from "@/assets/society-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@literarysociety.edu", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 w-fit">
              <img src={societyLogo} alt="Literary Society Logo" className="h-12 w-12" />
              <span className="font-poppins font-semibold text-xl">Literary Society</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Fostering a love for literature and building a vibrant community of readers, writers, and literary enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 hover:bg-accent/20 rounded-full transition-colors"
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Stay updated with our latest events and literary discussions
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>© {currentYear} University Literary Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
