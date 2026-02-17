"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Smartphones", href: "/comparatifs/smartphones" },
    { name: "PC Portables", href: "/comparatifs/pc-portables" },
    { name: "Accessoires", href: "/comparatifs/accessoires" },
    { name: "Guides", href: "/guides" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50" 
          : "bg-white border-b border-slate-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  Goud<span className="text-emerald-600">&</span>Good
                </span>
                <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                  Guide Tech Maroc
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors rounded-lg hover:bg-emerald-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-2/3 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/comparatifs"
              className="btn-primary text-sm !py-2.5 !px-5"
            >
              Voir les comparatifs
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition-colors flex items-center justify-center"
              aria-label="Menu"
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-2 pb-4 border-t border-slate-100 mt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 font-medium rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/comparatifs"
                className="btn-primary w-full justify-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Voir tous les comparatifs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
