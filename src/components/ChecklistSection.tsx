"use client";

import React, { useState } from "react";
import {
  CHECKLIST_STAGES,
  ChecklistStage,
  ChecklistItem,
} from "@/data/checklist";
import {
  Check,
  CheckCircle2,
  Clock,
  Shield,
  FileCheck,
  Camera,
  Mail,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

interface ChecklistSectionProps {
  completedItems: number[];
  onToggleItem: (id: number) => void;
  onResetItems: () => void;
}

export default function ChecklistSection({
  completedItems,
  onToggleItem,
  onResetItems,
}: ChecklistSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "remaining" | "completed">("all");

  const totalItemsCount = 15;
  const completedCount = completedItems.length;
  const progressPercent = Math.round((completedCount / totalItemsCount) * 100);

  return (
    <div id="checklist" className="relative">
      {/* Interactive Sticky Floating Toolbar */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E7EAEF] py-3.5 px-5 md:px-10 shadow-xs no-print">
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Progress pill & bar */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3 py-1 rounded-full text-[#065F43] font-mono text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
              <span>
                {completedCount} OF {totalItemsCount} SECURED ({progressPercent}%)
              </span>
            </div>

            <div className="hidden sm:block w-32 md:w-48 bg-[#F2F4F7] h-2 rounded-full overflow-hidden border border-[#E7EAEF]">
              <div
                className="bg-[#087A58] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Controls: Filter & Reset */}
          <div className="flex items-center gap-2">
            <div className="inline-flex bg-[#F2F4F7] p-1 rounded-full border border-[#D6DBE3] text-[12px] font-medium">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeFilter === "all"
                    ? "bg-white text-[#0D1117] shadow-xs font-semibold"
                    : "text-[#5B6472] hover:text-[#0D1117]"
                }`}
              >
                All (15)
              </button>
              <button
                onClick={() => setActiveFilter("remaining")}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeFilter === "remaining"
                    ? "bg-white text-[#0D1117] shadow-xs font-semibold"
                    : "text-[#5B6472] hover:text-[#0D1117]"
                }`}
              >
                Remaining ({totalItemsCount - completedCount})
              </button>
              <button
                onClick={() => setActiveFilter("completed")}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeFilter === "completed"
                    ? "bg-white text-[#0D1117] shadow-xs font-semibold"
                    : "text-[#5B6472] hover:text-[#0D1117]"
                }`}
              >
                Done ({completedCount})
              </button>
            </div>

            {completedCount > 0 && (
              <button
                onClick={onResetItems}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5B6472] hover:text-[#D61F26] px-2 py-1 transition-colors"
                title="Reset progress"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden md:inline">RESET</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Render Each Stage According to DESIGN.md Alternating Themes */}
      {CHECKLIST_STAGES.map((stage, stageIdx) => {
        const visibleItems = stage.items.filter((item) => {
          const isDone = completedItems.includes(item.id);
          if (activeFilter === "completed") return isDone;
          if (activeFilter === "remaining") return !isDone;
          return true;
        });

        if (visibleItems.length === 0 && activeFilter !== "all") {
          return null;
        }

        return (
          <ChecklistStageSection
            key={stage.id}
            stage={stage}
            stageIndex={stageIdx}
            visibleItems={visibleItems}
            completedItems={completedItems}
            onToggleItem={onToggleItem}
          />
        );
      })}
    </div>
  );
}

interface ChecklistStageSectionProps {
  stage: ChecklistStage;
  stageIndex: number;
  visibleItems: ChecklistItem[];
  completedItems: number[];
  onToggleItem: (id: number) => void;
}

function ChecklistStageSection({
  stage,
  stageIndex,
  visibleItems,
  completedItems,
  onToggleItem,
}: ChecklistStageSectionProps) {
  const isDark = stage.isDark;

  // Background alternates: White (0) -> Mist #F7F8FA (1) -> White (2) -> Dark Ink #0D1117 (3)
  const bgClass = isDark
    ? "bg-[#0D1117] text-white"
    : stageIndex % 2 === 1
    ? "bg-[#F7F8FA] text-[#363C47] border-y border-[#E7EAEF]"
    : "bg-white text-[#363C47]";

  return (
    <section
      id={stage.id}
      className={`py-20 md:py-28 transition-colors duration-200 ${bgClass}`}
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Section Header Stack as prescribed in DESIGN.md */}
        <div className="flex flex-col items-start mb-12 md:mb-16 max-w-[62ch]">
          {/* Eyebrow Pill */}
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 shadow-xs ${
              isDark
                ? "bg-white/10 border border-white/20 text-[#34D399]"
                : "bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isDark ? "bg-[#34D399]" : "bg-[#087A58]"
              }`}
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              {stage.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`headline-lg mb-5 ${
              isDark ? "text-white" : "text-[#0D1117]"
            }`}
          >
            {stage.title}
          </h2>

          {/* Lead Paragraph (~62 chars wide) */}
          <p
            className={`body-lg ${
              isDark ? "text-white/75" : "text-[#5B6472]"
            }`}
          >
            {stage.lead}
          </p>
        </div>

        {/* Cards Grid: 1 col on mobile, 2 cols on tablet, 2 cols on desktop for readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleItems.map((item) => {
            const isCompleted = completedItems.includes(item.id);

            if (isDark) {
              /* Dark Section Card styling from DESIGN.md */
              return (
                <div
                  key={item.id}
                  onClick={() => onToggleItem(item.id)}
                  className={`group relative rounded-[18px] p-7 md:p-8 border transition-all duration-200 cursor-pointer select-none ${
                    isCompleted
                      ? "bg-white/[0.12] border-[#34D399]/60 shadow-raised"
                      : "bg-white/[0.05] border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-0.5 shadow-card"
                  }`}
                  role="checkbox"
                  aria-checked={isCompleted}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      onToggleItem(item.id);
                    }
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#34D399] uppercase bg-[#34D399]/10 px-2.5 py-1 rounded-md border border-[#34D399]/20">
                        STEP {item.stepNumber}
                      </span>
                      <span className="font-mono text-[10px] font-medium text-white/50 uppercase tracking-[0.1em]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Interactive Custom Checkbox (min 40px touch target) */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                        isCompleted
                          ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                          : "border-white/30 group-hover:border-white/60 bg-transparent text-transparent"
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  </div>

                  <h3 className="text-[20px] md:text-[22px] font-extrabold text-white tracking-[-0.03em] leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[15.5px] leading-[1.68] text-white/80 font-normal">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                      RECORD IN WRITING
                    </span>
                    <span
                      className={`text-[12px] font-mono transition-colors ${
                        isCompleted ? "text-[#34D399]" : "text-white/40"
                      }`}
                    >
                      {isCompleted ? "✓ VERIFIED" : "TAP TO RECORD"}
                    </span>
                  </div>
                </div>
              );
            }

            /* Light Section Card styling from DESIGN.md */
            return (
              <div
                key={item.id}
                onClick={() => onToggleItem(item.id)}
                className={`group relative rounded-[18px] p-7 md:p-8 bg-white border transition-all duration-200 cursor-pointer select-none ${
                  isCompleted
                    ? "border-[#087A58] ring-1 ring-[#087A58] shadow-raised bg-[#FBFCFD]"
                    : "border-[#E7EAEF] hover:border-[#B9E6D6] hover:-translate-y-0.5 hover:shadow-raised shadow-card"
                }`}
                role="checkbox"
                aria-checked={isCompleted}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    onToggleItem(item.id);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#087A58] uppercase bg-[#EEFAF5] px-2.5 py-1 rounded-md border border-[#B9E6D6]">
                      STEP {item.stepNumber}
                    </span>
                    <span className="font-mono text-[10px] font-medium text-[#697382] uppercase tracking-[0.1em]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Interactive Custom Checkbox (touch friendly min 40px target container) */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${
                      isCompleted
                        ? "bg-[#087A58] border-[#087A58] text-white shadow-xs"
                        : "border-[#D6DBE3] group-hover:border-[#087A58] bg-white text-transparent"
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#0D1117] tracking-[-0.03em] leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-[15.5px] leading-[1.68] text-[#363C47] font-normal">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#E7EAEF] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#697382]">
                    VERIFIABLE EVIDENCE
                  </span>
                  <span
                    className={`text-[12px] font-mono transition-colors ${
                      isCompleted ? "text-[#087A58] font-semibold" : "text-[#697382]"
                    }`}
                  >
                    {isCompleted ? "✓ CHECKED" : "TAP TO COMPLETE"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
