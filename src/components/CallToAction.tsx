"use client";

import React, { useState } from "react";
import {
  Download,
  Share2,
  Copy,
  Check,
  Mail,
  ArrowRight,
  FileText,
  Printer,
} from "lucide-react";

interface CallToActionProps {
  onOpenPrintModal: () => void;
}

export default function CallToAction({ onOpenPrintModal }: CallToActionProps) {
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "CLAIM READY — Free Warranty Claim Checklist",
          text: "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;
    setEmailSubmitted(true);
  };

  return (
    <section id="action" className="py-20 md:py-28 bg-[#F7F8FA] border-t border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Section Header Stack as prescribed in DESIGN.md */}
        <div className="flex flex-col items-start mb-12 md:mb-16 max-w-[62ch]">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" aria-hidden="true" />
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[#065F43]">
              TAKE ACTION
            </span>
          </div>

          {/* Headline */}
          <h2 className="headline-lg text-[#0D1117] mb-5">
            CALL TO ACTION
          </h2>

          {/* Lead Paragraph */}
          <p className="body-lg text-[#5B6472]">
            Keep these records close before you need them. Save a copy with your warranty paperwork or pass it along to protect someone you know.
          </p>
        </div>

        {/* 2 Primary Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Action 1: Download */}
          <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 md:p-10 shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58] bg-[#EEFAF5] border border-[#B9E6D6] px-2.5 py-1 rounded-full">
                  ACTION 01
                </span>
                <span className="font-mono text-[11px] text-[#697382]">
                  PDF & PRINT
                </span>
              </div>

              <h3 className="text-[23px] md:text-[26px] font-extrabold text-[#0D1117] tracking-[-0.03em] leading-snug mb-3">
                Download the checklist and keep it with your invoices.
              </h3>

              <p className="text-[16px] text-[#5B6472] leading-relaxed mb-8">
                Print a physical one-sheet copy or save it as a digital reference to staple directly behind your appliance bills and store receipts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#087A58] hover:bg-[#066748] text-white rounded-full px-7 py-3.5 text-[15px] font-semibold shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Download & Print</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] rounded-full px-5 py-3.5 text-[14px] font-medium transition-colors min-h-[44px]"
              >
                <Printer className="w-4 h-4 text-[#5B6472]" />
                <span>Quick Print</span>
              </button>
            </div>
          </div>

          {/* Action 2: Share */}
          <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-8 md:p-10 shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58] bg-[#EEFAF5] border border-[#B9E6D6] px-2.5 py-1 rounded-full">
                  ACTION 02
                </span>
                <span className="font-mono text-[11px] text-[#697382]">
                  SPREAD THE WORD
                </span>
              </div>

              <h3 className="text-[23px] md:text-[26px] font-extrabold text-[#0D1117] tracking-[-0.03em] leading-snug mb-3">
                Share it with a friend who just bought something expensive.
              </h3>

              <p className="text-[16px] text-[#5B6472] leading-relaxed mb-8">
                Laptops, televisions, phones and appliances are large investments. Helping them document the baseline today will save hundreds if a defect appears.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D1117] hover:bg-[#087A58] text-white rounded-full px-7 py-3.5 text-[15px] font-semibold shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#34D399]" />
                    <span>Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share Checklist</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] rounded-full px-5 py-3.5 text-[14px] font-medium transition-colors min-h-[44px]"
              >
                <Copy className="w-4 h-4 text-[#5B6472]" />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>

        {/* Email Backup Callout Card styled strictly to DESIGN.md */}
        <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 md:p-9 text-[#065F43]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-[580px]">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087A58] block mb-2">
                BACKUP COPIES
              </span>
              <h4 className="text-[20px] md:text-[22px] font-extrabold text-[#065F43] tracking-tight leading-snug mb-2">
                Send a copy of this 15-step checklist to your email
              </h4>
              <p className="text-[14.5px] leading-relaxed text-[#065F43]/85">
                Keep a searchable timestamped record in your inbox folder titled “Warranty & Invoices”.
              </p>
            </div>

            {/* Input component formatted strictly to DESIGN.md */}
            <div className="w-full lg:w-auto shrink-0">
              {emailSubmitted ? (
                <div className="flex items-center gap-2.5 bg-white border border-[#B9E6D6] text-[#087A58] px-5 py-3 rounded-[12px] font-medium text-[14.5px]">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Checklist copy sent! Keep it with your records.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleEmailSubmit}
                  className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-[420px]"
                >
                  <label htmlFor="user-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 bg-[#F2F4F7] text-[#0D1117] placeholder-[#697382] rounded-[12px] h-[44px] px-3.5 border border-[#D6DBE3] text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 transition-all shadow-input"
                  />
                  <button
                    type="submit"
                    className="bg-[#087A58] hover:bg-[#066748] text-white rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all h-[44px] flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                  >
                    <span>Send Copy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
