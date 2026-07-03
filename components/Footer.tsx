import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white mb-3">
            <Dumbbell className="text-orange-500" size={22} />
            DranzerFit
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your journey to a stronger, healthier you starts here. Free
            programs, expert tips, and tools to keep you on track.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DranzerFit. All rights reserved.
      </div>
    </footer>
  );
}