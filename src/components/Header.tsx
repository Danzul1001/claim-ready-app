"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Menu, X, ArrowDown, FileText } from "lucide-react";

interface HeaderProps {
  completedCount: number;
  totalCount: number;
  onOpenPrintModal: () => void;
}

export default function Header({
  completedCount,
  totalCount,
  onOpenPrintModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#who-this-is-for" },
    { label: "15 Steps", href: "#checklist" },
    { label: "Key Numbers", href: "#key-numbers" },
    { label: "Refusal Guide", href: "#if-the-claim-is-refused" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 no-print ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7EAEF]"
          : "bg-white/92 backdrop-blur-sm border-b border-[#E7EAEF]"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-[1180px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 rounded-full py-1 px-1.5"
          aria-label="Claim Ready Homepage"
        >
          <div className="w-8 h-8 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58] group-hover:bg-[#087A58] group-hover:text-white transition-colors duration-200">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l6.09-6.09 1.41 1.41L11 16.5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[17px] tracking-[-0.035em] text-[#0D1117] leading-tight">
              CLAIM READY
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#5B6472]">
              Warranty Protocol
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-[#5B6472] hover:text-[#0D1117] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Progress */}
        <div className="flex items-center gap-3">
          {completedCount > 0 && (
            <div className="hidden sm:flex items-center gap-1.5 bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] rounded-full px-3 py-1 font-mono text-[11px] font-medium tracking-[0.05em]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
              <span>
                {completedCount}/{totalCount}
              </span>
            </div>
          )}

          <button
            onClick={onOpenPrintModal}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#0D1117] hover:bg-[#087A58] text-white rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm active:translate-y-0"
            aria-label="Download or print checklist"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get Checklist</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#E7EAEF] text-[#0D1117] hover:bg-[#F7F8FA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#087A58]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white border-b border-[#E7EAEF] px-5 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7EAEF]">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#5B6472]">
              Checklist Progress
            </span>
            <span className="font-mono text-[11px] font-semibold text-[#087A58] bg-[#EEFAF5] px-2.5 py-0.5 rounded-full border border-[#B9E6D6]">
              {completedCount} of {totalCount} completed
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] font-semibold text-[#0D1117] py-2 px-3 rounded-lg hover:bg-[#F7F8FA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E7EAEF] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#087A58] hover:bg-[#066748] text-white rounded-full py-3 text-[15px] font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download & Print Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
