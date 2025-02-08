"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            Warung Geprek
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className={`hover:text-primary transition-colors ${
                isActive("/") ? "text-primary font-medium" : "text-gray-600"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className={`hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary font-medium" : "text-gray-600"
              }`}
            >
              Tentang
            </Link>
            <Link
              href="/menu"
              className={`hover:text-primary transition-colors ${
                isActive("/menu") ? "text-primary font-medium" : "text-gray-600"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className={`hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary font-medium" : "text-gray-600"
              }`}
            >
              Kontak
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`hover:text-primary transition-colors ${
                  isActive("/") ? "text-primary font-medium" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className={`hover:text-primary transition-colors ${
                  isActive("/about") ? "text-primary font-medium" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link
                href="/menu"
                className={`hover:text-primary transition-colors ${
                  isActive("/menu") ? "text-primary font-medium" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className={`hover:text-primary transition-colors ${
                  isActive("/contact") ? "text-primary font-medium" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}