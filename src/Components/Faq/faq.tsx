"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqItems } from "@/constants/faq";

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="entry-card p-5 md:p-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-foreground">{question}</span>
        <FaChevronDown
          className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <FaqRow key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
