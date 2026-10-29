"use client";

import React from "react";
import { ArrowUp, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 px-5 md:px-10 text-[#5B6472] text-[13.5px] leading-relaxed">
      <div className="max-w-[1180px] mx-auto">
        {/* Three Columns as specified in DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
          {/* Column 1: About (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold text-[16px] text-[#0D1117] tracking-tight">
                CLAIM READY
              </span>
            </div>
            <p className="text-[#5B6472] max-w-[380px] text-[14px]">
              A free checklist for anyone about to file a warranty claim.
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#087A58]">
              <span>OPEN CONSUMER RESOURCE</span>
              <span>•</span>
              <span>NO COMMERCIAL AFFILIATION</span>
            </div>
          </div>

          {/* Column 2: Sections & Stages (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0D1117] font-semibold">
              Checklist Stages
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#before-anything-goes-wrong"
                  className="hover:text-[#087A58] transition-colors"
                >
                  Stage 01: Before Anything Goes Wrong (Steps 1–4)
                </a>
              </li>
              <li>
                <a
                  href="#when-the-fault-appears"
                  className="hover:text-[#087A58] transition-colors"
                >
                  Stage 02: When The Fault Appears (Steps 5–7)
                </a>
              </li>
              <li>
                <a
                  href="#when-a-technician-visits"
                  className="hover:text-[#087A58] transition-colors"
                >
                  Stage 03: When A Technician Visits (Steps 8–10)
                </a>
              </li>
              <li>
                <a
                  href="#if-the-claim-is-refused"
                  className="hover:text-[#087A58] transition-colors"
                >
                  Stage 04: If The Claim Is Refused (Steps 11–15)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-4">
            <div className="flex flex-col md:items-end gap-2">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0D1117] font-semibold">
                Quick Action
              </h4>
              <p className="text-[13px] md:text-right text-[#5B6472]">
                Have your invoice ready before calling support.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-[#EEFAF5] border border-[#E7EAEF] text-[#0D1117] hover:text-[#087A58] px-4 py-2 rounded-full font-medium text-[13px] transition-colors shadow-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Exact FOOTER NOTE from content.txt */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[13px] text-[#697382] leading-relaxed max-w-[850px]">
            <strong className="text-[#0D1117] font-mono text-[11px] uppercase tracking-wider block sm:inline sm:mr-2">FOOTER NOTE:</strong>
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </p>
          <div className="shrink-0 font-mono text-[10px] text-[#697382] uppercase tracking-[0.16em]">
            DESIGNED WITH SOVEREIGN EDITORIAL
          </div>
        </div>
      </div>
    </footer>
  );
}
