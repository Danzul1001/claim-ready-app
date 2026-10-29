"use client";

import React from "react";
import { KEY_NUMBERS } from "@/data/checklist";

export default function KeyNumbers() {
  return (
    <section id="key-numbers" className="py-16 md:py-24 bg-[#F7F8FA] border-y border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Section Header Stack as prescribed in DESIGN.md */}
        <div className="flex flex-col items-start mb-12 md:mb-16 max-w-[62ch]">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" aria-hidden="true" />
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[#065F43]">
              AT A GLANCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="headline-lg text-[#0D1117] mb-5">
            Key numbers for the page
          </h2>

          {/* Lead */}
          <p className="body-lg text-[#5B6472]">
            Warranty claims are won by discipline, not by arguing on customer service calls.
            Here is the framework in three critical metrics.
          </p>
        </div>

        {/* Stat Grid joined by 1px hairline gaps inside one rounded card */}
        <div className="rounded-[18px] border border-[#E7EAEF] bg-[#E7EAEF] p-[1px] shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {KEY_NUMBERS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 md:p-9 flex flex-col justify-between transition-colors duration-200 hover:bg-[#FBFCFD] min-h-[180px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#697382]">
                      METRIC 0{idx + 1}
                    </span>
                    {item.hot && (
                      <span className="inline-flex items-center gap-1 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-medium">
                        Golden Rule
                      </span>
                    )}
                  </div>
                  <div
                    className={`stat-number mb-3 ${
                      item.hot ? "text-[#087A58]" : "text-[#0D1117]"
                    }`}
                  >
                    {item.number}
                  </div>
                </div>

                <div>
                  <div className="text-[15px] md:text-[16px] font-semibold text-[#0D1117] leading-snug mb-1">
                    {item.caption}
                  </div>
                  <div className="text-[13px] text-[#5B6472] font-normal">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
