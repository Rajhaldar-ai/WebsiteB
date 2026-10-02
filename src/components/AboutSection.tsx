import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowDownRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

export const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Two-Column Swiss About Layout (Section 16) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-200">
          {/* LEFT 5 Columns */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              {CLIENT_DATABASE.about.sectionNumber}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.18] tracking-tight">
              {CLIENT_DATABASE.about.heading}
            </h2>
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-slate-400">
                  CORE PRACTICE
                </span>
                <span className="font-medium text-slate-800">
                  Tax Advisory · Litigation · Assurance
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular text-slate-400">
                  ASSOCIATED BODY
                </span>
                <span className="font-medium text-slate-800">
                  {CLIENT_DATABASE.identity.educationalInitiative}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-base text-slate-700 leading-[1.7]">
              <p className="font-medium text-[#0B192C] text-[17px]">
                {CLIENT_DATABASE.about.leadParagraph}
              </p>
              <p>{CLIENT_DATABASE.about.secondaryParagraph}</p>

              {expanded && (
                <div className="space-y-5 pt-2 border-t border-slate-200/80 animate-fadeIn">
                  {CLIENT_DATABASE.about.expandedParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2 text-xs font-mono-tabular font-semibold text-[#0B192C] hover:text-[#0284C7] py-2 px-3 bg-white border border-slate-300 hover:border-[#0284C7] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>
                  {expanded
                    ? "Collapse Institutional Overview"
                    : "Read Full Institutional Overview"}
                </span>
                {expanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Firm Story Timeline (Section 17) */}
        <div className="pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono-tabular font-semibold text-slate-500 mb-1.5">
                INSTITUTIONAL PROGRESSION
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] tracking-tight">
                Practice Evolution &amp; Educational Mandate
              </h3>
            </div>
            <p className="text-xs font-mono-tabular text-slate-500">
              VERIFIED CHRONOLOGY · NO FABRICATED DATES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {CLIENT_DATABASE.timeline.map((stage) => (
              <div
                key={stage.index}
                className="p-6 sm:p-7 border-r border-b border-slate-200 flex flex-col justify-between hover:bg-slate-50/70 transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                      STAGE {stage.index}
                    </span>
                    <ArrowDownRight className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-xs font-mono-tabular text-slate-500 mb-1.5">
                    {stage.phase}
                  </p>
                  <h4 className="text-base font-bold text-[#0B192C] tracking-tight mb-3">
                    {stage.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
