"use client";

import React, { useState, useEffect } from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyNumbers from "@/components/KeyNumbers";
import ChecklistSection from "@/components/ChecklistSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import PrintModal from "@/components/PrintModal";

export default function Home() {
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Load saved checklist state from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("claim_ready_completed");
      if (saved) {
        setCompletedItems(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleToggleItem = (id: number) => {
    setCompletedItems((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("claim_ready_completed", JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  const handleResetItems = () => {
    setCompletedItems([]);
    try {
      localStorage.removeItem("claim_ready_completed");
    } catch (e) {
      // ignore
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#363C47]">
      {/* 1. Ticker strip at very top */}
      <Ticker />

      {/* 2. Sticky Header with navigation & quick action */}
      <Header
        completedCount={completedItems.length}
        totalCount={15}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      {/* 3. Hero Section with "WHO THIS IS FOR" & "THE IDEA IN ONE LINE" Headline Card */}
      <Hero onOpenPrintModal={() => setIsPrintModalOpen(true)} />

      {/* 4. Stat Grid: "KEY NUMBERS FOR THE PAGE" */}
      <KeyNumbers />

      {/* 5. Complete 15-step Checklist with 4 alternating stages */}
      <ChecklistSection
        completedItems={completedItems}
        onToggleItem={handleToggleItem}
        onResetItems={handleResetItems}
      />

      {/* 6. Call To Action section */}
      <CallToAction onOpenPrintModal={() => setIsPrintModalOpen(true)} />

      {/* 7. Footer with legal disclaimer and exact footer note */}
      <Footer />

      {/* 8. Print & Export Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        completedItems={completedItems}
      />
    </main>
  );
}
