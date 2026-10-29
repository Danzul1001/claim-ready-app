"use client";

import React, { useRef } from "react";
import { CHECKLIST_STAGES } from "@/data/checklist";
import { X, Printer, Download, Check, Copy } from "lucide-react";

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  completedItems: number[];
}

export default function PrintModal({
  isOpen,
  onClose,
  completedItems,
}: PrintModalProps) {
  const [copiedAll, setCopiedAll] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    let text = "CLAIM READY — WARRANTY CLAIM CHECKLIST\n";
    text += "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.\n\n";

    CHECKLIST_STAGES.forEach((stage) => {
      text += `=== ${stage.title} ===\n`;
      stage.items.forEach((item) => {
        const isDone = completedItems.includes(item.id) ? "[X]" : "[ ]";
        text += `${isDone} Step ${item.stepNumber}: ${item.title} — ${item.description}\n`;
      });
      text += "\n";
    });

    text += "FOOTER NOTE:\nClaim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.\n";

    try {
      await navigator.clipboard.writeText(text);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch (e) {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="relative w-full max-w-3xl bg-white rounded-[26px] shadow-float border border-[#E7EAEF] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E7EAEF] flex items-center justify-between bg-[#F7F8FA] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
              <Printer className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-[#0D1117] leading-tight">
                Print & Export Checklist
              </h3>
              <p className="text-[12px] text-[#5B6472]">
                15-step verifiable warranty record protocol
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#087A58] hover:bg-[#066748] text-white px-4 py-2 rounded-full text-[13px] font-semibold transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-[#F2F4F7] border border-[#D6DBE3] text-[#0D1117] px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-[#087A58]" /> : <Copy className="w-3.5 h-3.5 text-[#5B6472]" />}
              <span>{copiedAll ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-[#D6DBE3] text-[#5B6472] hover:text-[#0D1117] hover:bg-[#E7EAEF] flex items-center justify-center transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-white text-[#363C47]">
          {/* Header document card */}
          <div className="border-b-2 border-[#0D1117] pb-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#087A58] font-bold block mb-1">
                  OFFICIAL CONSUMER AID
                </span>
                <h1 className="text-[26px] font-extrabold text-[#0D1117] tracking-tight">
                  CLAIM READY
                </h1>
                <p className="text-[15px] text-[#5B6472] mt-1">
                  A free checklist for anyone about to file a warranty claim.
                </p>
              </div>
              <div className="text-right font-mono text-[11px] text-[#697382]">
                <div>15 STEPS TOTAL</div>
                <div className="text-[#087A58] font-bold">DECIDED ON RECORDS</div>
              </div>
            </div>

            <div className="mt-4 bg-[#EEFAF5] p-3 rounded-[12px] border border-[#B9E6D6] text-[13.5px] font-mono text-[#065F43]">
              <strong>THE IDEA IN ONE LINE:</strong> A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </div>
          </div>

          {/* Render All 4 Stages and 15 Steps */}
          {CHECKLIST_STAGES.map((stage) => (
            <div key={stage.id} className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#E7EAEF] pb-1.5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#087A58]">
                  {stage.eyebrow}
                </span>
                <span className="text-[#E7EAEF]">|</span>
                <span className="text-[14px] font-bold text-[#0D1117]">
                  {stage.title}
                </span>
              </div>

              <div className="space-y-3 pl-1">
                {stage.items.map((item) => {
                  const isChecked = completedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 text-[14px] leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded border border-[#087A58] flex items-center justify-center shrink-0 mt-0.5">
                        {isChecked && <Check className="w-3.5 h-3.5 text-[#087A58] stroke-[3]" />}
                      </div>
                      <div>
                        <span className="font-bold text-[#0D1117]">
                          {item.stepNumber}. {item.title}{" "}
                        </span>
                        <span className="text-[#363C47]">{item.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Key numbers footer */}
          <div className="pt-4 border-t border-[#E7EAEF] grid grid-cols-3 gap-2 text-center bg-[#F7F8FA] p-3 rounded-[12px]">
            <div>
              <div className="font-extrabold text-[18px] text-[#0D1117]">15</div>
              <div className="text-[11px] text-[#5B6472]">steps in checklist</div>
            </div>
            <div>
              <div className="font-extrabold text-[18px] text-[#0D1117]">4</div>
              <div className="text-[11px] text-[#5B6472]">records before fault</div>
            </div>
            <div>
              <div className="font-extrabold text-[18px] text-[#087A58]">1 Rule</div>
              <div className="text-[11px] text-[#5B6472]">if not in writing, didn&apos;t happen</div>
            </div>
          </div>

          {/* Legal Note */}
          <div className="text-[11px] text-[#697382] leading-normal pt-2">
            <strong>FOOTER NOTE:</strong> Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </div>
        </div>
      </div>
    </div>
  );
}
