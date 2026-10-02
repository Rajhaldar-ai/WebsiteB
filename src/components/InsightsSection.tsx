import React, { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface InsightsSectionProps {
  onRequestPublication: (referenceCode: string) => void;
}

const CATEGORIES = [
  "All",
  "GST",
  "Litigation",
  "Compliance",
  "Corporate Finance",
  "Training",
] as const;

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onRequestPublication,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [imgError, setImgError] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? CLIENT_DATABASE.insightsArchive
      : CLIENT_DATABASE.insightsArchive.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section
      id="insights"
      className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              08. Knowledge Hub &amp; Research Archive
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.16] tracking-tight">
              Institutional Publications &amp; Statutory Briefings.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm text-slate-600 leading-relaxed">
              Structured archive for verified firm articles, GST Research
              Foundation monographs, and statutory updates. Unverified article
              titles and dates are maintained as explicit placeholders until
              publication release.
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls (Functional Buttons Allowed per Design Constitution) */}
        <div className="py-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter Insights by Practice Category"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                    active
                      ? "bg-[#0B192C] text-white"
                      : "text-slate-600 hover:text-[#0B192C]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono-tabular text-slate-500">
            SHOWING {filteredItems.length} OF{" "}
            {CLIENT_DATABASE.insightsArchive.length} ARCHIVE SLOTS
          </span>
        </div>

        {/* Main Split: Publication Archive Table (8 Cols) + Editorial Library Frame (4 Cols) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 8 Columns: Structured Archive Rows */}
          <div className="lg:col-span-8 divide-y divide-slate-200 border-t border-b border-slate-300">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="py-6 px-4 sm:px-5 hover:bg-slate-50 transition-colors duration-150"
              >
                {/* Unboxed Metadata Row with Typographic Separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-slate-500 mb-2">
                  <span className="font-semibold text-[#0284C7]">
                    {item.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.referenceCode}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.datePlaceholder}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readingFormat}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B192C] tracking-tight mb-2">
                  {item.titlePlaceholder}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.abstract}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    onRequestPublication(
                      `Publication Request — ${item.referenceCode} (${item.category})`
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tabular font-semibold text-[#0B192C] hover:text-[#0284C7] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <span>Request Briefing Copy When Published</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </article>
            ))}
          </div>

          {/* Right 4 Columns: Tax & Legal Library Reference Frame */}
          <div className="lg:col-span-4 border border-slate-300 bg-slate-50">
            <div className="px-4 py-2.5 border-b border-slate-200 bg-white flex items-center justify-between text-[11px] font-mono-tabular text-slate-500">
              <span>RESEARCH ARCHIVE</span>
              <span>STATUTORY REPOSITORY</span>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B192C]">
              {!imgError ? (
                <img
                  src={CLIENT_DATABASE.images.legalTaxLibrary}
                  alt="Bound Indian taxation and corporate law reference volumes on an executive slate desk"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-300">
                  <FileText className="w-8 h-8 text-[#38BDF8] mb-2" />
                  <p className="text-xs font-mono-tabular">
                    STATUTORY &amp; CASE LAW ARCHIVE
                  </p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/40 to-transparent px-4 py-2.5 text-[11px] font-mono-tabular text-slate-200">
                <span>59+ PROFESSIONAL CONTRIBUTIONS</span>
              </div>
            </div>

            <div className="p-5 bg-white border-t border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-[#0B192C]">
                Editorial Integrity Policy
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                In adherence to strict institutional standards, only verified
                client publications and GST Research Foundation circulars are
                indexed here. Placeholder slots indicate where client-supplied
                manuscripts and release dates ({`[PUBLICATION DATE]`}) will be
                mounted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
