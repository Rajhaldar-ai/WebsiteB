import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(CLIENT_DATABASE.faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left 4 Columns */}
          <div className="lg:col-span-4">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              09. Institutional Clarifications
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] leading-[1.18] tracking-tight mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Official responses regarding GST Research Foundation enrollment and
              curriculum modules, alongside clearly marked suggested procedural
              questions.
            </p>
            <div className="p-4 bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <p className="font-mono-tabular font-semibold text-[#0B192C]">
                VERIFICATION LEGEND
              </p>
              <p>
                <span className="font-mono-tabular text-[#0284C7] font-semibold">
                  Verified Official FAQ:
                </span>{" "}
                Confirmed from client database.
              </p>
              <p>
                <span className="font-mono-tabular text-amber-700 font-semibold">
                  Suggested FAQ:
                </span>{" "}
                Marked for client review prior to official ratification.
              </p>
            </div>
          </div>

          {/* Right 8 Columns: Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-b border-slate-300 divide-y divide-slate-200 bg-white">
              {CLIENT_DATABASE.faqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                const isVerified = faq.status === "Verified Official FAQ";

                return (
                  <div key={faq.id} className="px-5 sm:px-7 py-5">
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                    >
                      <div>
                        {/* Unboxed Metadata Line */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular mb-1.5">
                          <span className="text-slate-400">0{index + 1}</span>
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                          <span
                            className={`font-semibold ${
                              isVerified ? "text-[#0284C7]" : "text-amber-700"
                            }`}
                          >
                            {faq.status}
                          </span>
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                          <span className="text-slate-500">{faq.category}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#0B192C] group-hover:text-[#0284C7] transition-colors duration-150">
                          {faq.question}
                        </h3>
                      </div>

                      <span className="mt-1 inline-flex items-center justify-center w-8 h-8 border border-slate-200 text-[#0B192C] shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
