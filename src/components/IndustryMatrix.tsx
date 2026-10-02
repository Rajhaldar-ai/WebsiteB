import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface IndustryMatrixProps {
  onInquireIndustry: (industryName: string) => void;
}

export const IndustryMatrix: React.FC<IndustryMatrixProps> = ({
  onInquireIndustry,
}) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              04. Sector Coverage &amp; Client Profiles
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.16] tracking-tight">
              Structured Industry &amp; Institutional Matrix.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our practice advises commercial enterprises, regulated financial
              institutions, non-profit organizations, and fellow tax practitioners
              across 11 verified client categories.
            </p>
          </div>
        </div>

        {/* Column Headers (Desktop) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 py-3 px-5 bg-slate-100 border-b border-slate-300 text-[11px] font-mono-tabular font-semibold text-slate-500">
          <div className="col-span-1">INDEX</div>
          <div className="col-span-3">SECTOR / CLIENT TYPE</div>
          <div className="col-span-5">REGULATORY &amp; ADVISORY SCOPE</div>
          <div className="col-span-3 text-right">CORE ENGAGEMENT FOCUS</div>
        </div>

        {/* Numbered Rows (Section 22 — No 11 identical cards) */}
        <div className="divide-y divide-slate-200 border-b border-slate-300">
          {CLIENT_DATABASE.industries.map((industry) => {
            const isHovered = hoveredRow === industry.number;
            return (
              <div
                key={industry.number}
                onMouseEnter={() => setHoveredRow(industry.number)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`py-5 px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-baseline transition-colors duration-150 ${
                  isHovered ? "bg-[#0B192C] text-white" : "bg-white text-[#0B192C]"
                }`}
              >
                {/* Index */}
                <div className="lg:col-span-1 flex items-center justify-between lg:block">
                  <span
                    className={`text-xs font-mono-tabular font-bold ${
                      isHovered ? "text-[#38BDF8]" : "text-[#0284C7]"
                    }`}
                  >
                    {industry.number}
                  </span>
                  <span
                    className={`lg:hidden text-[11px] font-mono-tabular ${
                      isHovered ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {industry.category}
                  </span>
                </div>

                {/* Sector Name */}
                <div className="lg:col-span-3">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight">
                    {industry.name}
                  </h3>
                  <p
                    className={`hidden lg:block text-xs font-mono-tabular mt-0.5 ${
                      isHovered ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {industry.category}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p
                    className={`text-sm leading-relaxed ${
                      isHovered ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {industry.description}
                  </p>
                </div>

                {/* Focus Areas + Action */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between gap-2 pt-2 lg:pt-0">
                  <span
                    className={`text-xs font-mono-tabular lg:text-right ${
                      isHovered ? "text-[#38BDF8]" : "text-slate-500"
                    }`}
                  >
                    {industry.focusAreas}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onInquireIndustry(`Sector Consultation — ${industry.name}`)
                    }
                    className={`inline-flex items-center gap-1 text-xs font-mono-tabular font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                      isHovered
                        ? "text-white underline"
                        : "text-[#0B192C] hover:text-[#0284C7]"
                    }`}
                  >
                    <span>Consult</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
