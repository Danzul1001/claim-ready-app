"use client";

import React from "react";

const TICKER_ITEMS = [
  "A WARRANTY CLAIM IS DECIDED ON RECORDS",
  "KEEP YOURS, AND ASK FOR THEIRS IN WRITING",
  "IF IT IS NOT IN WRITING, IT DID NOT HAPPEN",
  "15 STEPS TO SAFEGUARD YOUR CONSUMER RIGHTS",
  "ASK FOR THE JOB SHEET BEFORE THE TECH LEAVES",
  "ALWAYS REQUEST WRITTEN DIAGNOSTIC PROOF",
];

export default function Ticker() {
  return (
    <div
      role="region"
      aria-label="Important warranty rules ticker"
      className="w-full bg-[#EEFAF5] border-b border-[#B9E6D6] py-3 overflow-hidden text-[#065F43] select-none no-print"
    >
      <div className="flex w-max animate-ticker">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              {item}
            </span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#087A58] mx-[40px] opacity-60"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
