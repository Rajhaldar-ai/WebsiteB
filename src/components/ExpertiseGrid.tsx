import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface ExpertiseGridProps {
  onSelectExpertise: (expertiseTopic: string) => void;
}

export const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({
  onSelectExpertise,
}) => {
  return (
    <section
      id="expertise"
      className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              05. Domain Matrix &amp; Core Expertise
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.16] tracking-tight">
              Specialized Technical &amp; Jurisprudential Domains.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Structured across five core competency matrices—spanning indirect
              tax adjudication, tribunal representation, credit reconciliation,
              accounting systems compliance, and professional GST education.
            </p>
          </div>
        </div>

        {/* Visual Matrix Layout (Section 23) */}
        <div className="mt-10 border-t border-l border-slate-300 bg-white grid grid-cols-1 lg:grid-cols-12">
          {CLIENT_DATABASE.expertiseMatrix.map((domain, index) => {
            // First 2 span 6 cols each on desktop; next 3 span 4 cols each on desktop
            const colSpanClass =
              index < 2 ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <div
                key={domain.code}
                className={`${colSpanClass} p-6 sm:p-8 border-r border-b border-slate-300 flex flex-col justify-between hover:bg-slate-50/70 transition-colors duration-150`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-200 mb-5">
                    <span className="text-xs font-mono-tabular font-bold text-[#0284C7] tracking-wider">
                      {domain.category}
                    </span>
                    <span className="text-xs font-mono-tabular text-slate-400">
                      {domain.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] tracking-tight mb-3">
                    {domain.headline}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-200 mb-5">
                    <p className="text-[11px] font-mono-tabular text-slate-400 mb-2">
                      VERIFIED CAPABILITIES
                    </p>
                    <ul className="space-y-1.5 text-xs font-medium text-slate-800">
                      {domain.capabilities.map((cap) => (
                        <li key={cap} className="flex items-baseline gap-2">
                          <span
                            aria-hidden="true"
                            className="font-mono-tabular text-[#0284C7]"
                          >
                            —
                          </span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectExpertise(
                        `${domain.category} — ${domain.headline}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tabular font-semibold text-[#0B192C] hover:text-[#0284C7] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  >
                    <span>Discuss {domain.category} Mandate</span>
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
