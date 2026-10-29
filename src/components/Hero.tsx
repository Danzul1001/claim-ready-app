"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck, Download, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenPrintModal: () => void;
}

export default function Hero({ onOpenPrintModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      {/* Background soft ambient pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#E7EAEF_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy (~58%) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Label (Eyebrow) */}
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[#065F43]">
                Free Consumer Checklist
              </span>
            </div>

            {/* Headline Display */}
            <h1 className="headline-display text-[#0D1117] mb-6">
              A free checklist for anyone about to file a warranty claim.
            </h1>

            {/* Who This Is For Box */}
            <div id="who-this-is-for" className="w-full bg-[#F7F8FA] border border-[#E7EAEF] rounded-[18px] p-6 md:p-7 mb-8">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58]">
                  WHO THIS IS FOR
                </span>
              </div>
              <p className="text-[17.5px] md:text-[19px] leading-[1.65] text-[#363C47] font-normal">
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
                and who wants the claim to be decided on facts, in writing.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#087A58] hover:bg-[#066748] text-white rounded-full px-7 py-3.5 text-[15px] font-semibold shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[44px]"
              >
                <span>Download Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#checklist"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[44px]"
              >
                <span>Explore All 15 Steps</span>
              </a>
            </div>

            {/* Reassurance Micro-copy */}
            <div className="flex flex-wrap items-center gap-5 mt-6 text-[13.5px] text-[#5B6472]">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#087A58]" /> 100% Free & Open
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#087A58]" /> No Email Required
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#087A58]" /> Printable & Mobile Friendly
              </span>
            </div>
          </div>

          {/* Right Column: Headline Card as prescribed in DESIGN.md (~42%) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-[26px] bg-[#0D1117] text-white p-7 md:p-10 shadow-raised overflow-hidden border border-[#21262D] group">
              {/* Scanline subtle texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 scanlines opacity-30 pointer-events-none"
              />

              {/* Top Card Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#34D399]">
                    THE IDEA IN ONE LINE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/50 tracking-wider uppercase">
                  Core Rule
                </span>
              </div>

              {/* Large Mono Type Headline sentence */}
              <div className="relative z-10 mb-8">
                <blockquote className="font-mono text-[19px] sm:text-[21px] md:text-[23px] font-medium leading-[1.45] text-white tracking-tight">
                  “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
                </blockquote>
              </div>

              {/* Nested verification preview panel */}
              <div className="relative z-10 bg-white/[0.07] border border-white/10 rounded-[12px] p-4.5 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>RECORD PRINCIPLE</span>
                  <span className="text-[#34D399]">100% FACTUAL</span>
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/80">
                  Calm, written documentation shifts the burden of proof back to the brand and holds up in any consumer grievance.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#34D399]">
                  <span>→ ZERO HEARSAY</span>
                  <span className="text-white/40">•</span>
                  <span>→ VERIFIABLE TIMELINE</span>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div
                className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#087A58]/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
