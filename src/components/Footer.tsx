
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-hireyth-blue to-hireyth-orange opacity-30 rounded-full blur-sm"></div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                  <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-hireyth-blue to-hireyth-orange">H</span>
                </div>
              </div>
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-hireyth-blue to-hireyth-orange">Hireyth</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs">
              Connect with travelers around the world, share experiences, and create unforgettable memories together.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                { icon: <Github className="w-5 h-5" />, label: "Github" },
                { icon: <Mail className="w-5 h-5" />, label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-hireyth-blue hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {[
            {
              title: "Explore",
              links: [
                { label: "Find Trips", to: "/trips" },
                { label: "Experiences", to: "/experiences" },
                { label: "Create Trip", to: "/trips/new" },
                { label: "Travel Map", to: "#" }
              ]
            },
            {
              title: "Company",
              links: [
                { label: "About Us", to: "#" },
                { label: "Contact", to: "#" },
                { label: "Careers", to: "#" },
                { label: "Press", to: "#" }
              ]
            },
            {
              title: "Support",
              links: [
                { label: "Help Center", to: "#" },
                { label: "Safety", to: "#" },
                { label: "Terms", to: "#" },
                { label: "Privacy", to: "#" }
              ]
            }
          ].map((group, groupIndex) => (
            <div key={groupIndex} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.to} className="text-gray-600 hover:text-hireyth-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hireyth. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <a key={index} href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
