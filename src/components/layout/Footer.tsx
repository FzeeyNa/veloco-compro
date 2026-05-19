"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#ecosystem" },
  { label: "Marketplace", href: "/marketplace", badge: "Soon" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/veloco.id",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/veloco",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/veloco_id",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left */}
            <div>
              <h3
                className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Building Tomorrow&apos;s
                <br />
                <span className="text-primary">Digital Impact</span>
              </h3>
              <div className="flex flex-wrap gap-4 mt-8">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-mid-gray hover:text-primary transition-colors"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="badge-soon ml-1">{link.badge}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right - Newsletter */}
            <div className="md:text-right">
              <h4 className="text-lg font-semibold mb-2">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-mid-gray mb-4">
                Stay updated with our latest projects and insights
              </p>
              <form
                className="flex gap-2 md:justify-end"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-200 rounded-full text-sm flex-1 md:max-w-xs focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-deep transition-colors shrink-0"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="container-custom px-4 md:px-8">
        <div className="watermark text-center leading-none pb-4">VELOCO.</div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mid-gray hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-sm text-mid-gray">
              © {new Date().getFullYear()} Veloco. All rights reserved
            </p>

            <div className="flex gap-6 text-sm text-mid-gray">
              <span className="hover:text-primary cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
