

'use client';

import { useState } from 'react';

export default function AssistantPreview() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: 'assistant' | 'user'; text: string }[]
  >([
    {
      role: 'assistant',
      text: "Hi! I’m the Vila Assistant (Preview). I can help answer common questions about alterations, pricing, and hours.",
    },
  ]);

  const suggestions = [
    {
      q: 'How long do alterations usually take?',
      a: 'Most basic alterations are ready within a few days. Timing can vary depending on the garment and current workload.',
    },
    {
      q: 'Do you alter wedding dresses?',
      a: 'Yes, we provide alterations for wedding dresses and special occasion garments. We recommend booking early.',
    },
    {
      q: 'What are your business hours?',
      a: 'Our hours are listed on the website, and you can also call the shop if you have a specific question.',
    },
  ];

  function sendDemo(q: string, a: string) {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: q },
      { role: 'assistant', text: a },
    ]);
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[var(--accent-sage)] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[var(--accent-sage)]/90"
        aria-label="Open assistant preview"
      >
        Ask Us
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[320px] max-w-[90vw] rounded-2xl border bg-white shadow-xl">
          <div className="flex items-center justify-between rounded-t-2xl border-b bg-stone-50 px-4 py-3">
            <div>
              <div className="text-sm font-semibold text-zinc-900">
                Vila Assistant
              </div>
              <div className="text-xs text-zinc-500">Preview</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-500 hover:text-zinc-700"
            >
              ✕
            </button>
          </div>

          <div className="max-h-64 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === 'assistant'
                    ? 'rounded-xl bg-stone-100 px-3 py-2 text-zinc-800'
                    : 'ml-auto max-w-[85%] rounded-xl bg-[var(--accent-sage)]/90 px-3 py-2 text-white'
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t px-3 py-3">
            <div className="mb-2 text-xs text-zinc-500">
              Try a sample question:
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s.q}
                  onClick={() => sendDemo(s.q, s.a)}
                  className="rounded-full border bg-stone-50 px-3 py-1 text-xs text-zinc-700 hover:bg-stone-100"
                >
                  {s.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}