import React from "react";
import { ShieldCheck, Award } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

export const FounderProfile: React.FC = () => {
  const { founder, credentialsWall, recognitions } = CLIENT_DATABASE;

  return (
    <section className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              06. Leadership, Credentials &amp; Institutional Recognition
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B192C] leading-[1.15] tracking-tight">
              {founder.name} — {founder.qualifications}
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-xs font-mono-tabular text-slate-500">
              {founder.role.toUpperCase()} · {founder.foundationRole.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Founder Profile Two-Column Split (Section 24) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT 5 Columns: Structured Portrait Frame (Strictly Non-Fabricated Identity) */}
          <div className="lg:col-span-5">
            <div className="border border-slate-300 bg-slate-50">
              <div className="px-4 py-2.5 border-b border-slate-200 bg-white flex items-center justify-between text-[11px] font-mono-tabular text-slate-500">
                <span>FOUNDER PROFILE FRAME</span>
                <span>IDENTITY INTEGRITY PROTECTED</span>
              </div>

              {/* Architectural Portrait Frame — Never fabricates founder face with AI */}
              <div className="aspect-[3/4] w-full bg-[#0B192C] text-white p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Swiss Architectural Grid Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-6 border border-slate-700/70 flex flex-col justify-between"
                >
                  <div className="border-b border-slate-800/80 h-1/3" />
                  <div className="border-b border-slate-800/80 h-1/3" />
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs font-mono-tabular text-slate-400">
                  <span>CHAMBERS OF CA RAJENDER ARORA</span>
                  <span>FCA · LLB</span>
                </div>

                <div className="relative z-10 my-auto py-8 border-y border-slate-700/80">
                  <p className="text-xs font-mono-tabular text-[#38BDF8] mb-2">
                    {founder.portraitPlaceholderLabel}
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {founder.name}
                  </p>
                  <p className="text-sm font-mono-tabular text-slate-300 mt-1">
                    Fellow Chartered Accountant · Bachelor of Laws
                  </p>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Reserved for client-approved studio portrait photograph. In
                    accordance with institutional identity standards, synthetic or
                    AI-generated likenesses are never substituted.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tabular text-slate-400">
                  <span>20+ YEARS PRACTICE</span>
                  <span>59+ CONTRIBUTIONS</span>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-[#0B192C]">
                  {founder.role}
                </span>
                <span className="font-mono-tabular text-slate-500">
                  New Delhi
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT 7 Columns: Professional Biography & Credentials Wall (Section 25) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <p className="text-xs font-mono-tabular font-semibold text-slate-400 mb-3">
                INSTITUTIONAL BIOGRAPHY
              </p>
              <div className="space-y-4 text-base text-slate-700 leading-[1.72]">
                {founder.biographyParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0 ? "text-[17px] font-medium text-[#0B192C]" : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Verified Credentials Wall (Section 25) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-300 mb-5">
                <h3 className="text-sm font-mono-tabular font-bold text-[#0B192C]">
                  VERIFIED CREDENTIALS &amp; INSTITUTIONAL DESIGNATIONS
                </h3>
                <span className="text-[11px] font-mono-tabular text-slate-500">
                  CURRENT VS. HISTORICAL ROLES CLEARLY DISTINGUISHED
                </span>
              </div>

              <div className="border-t border-l border-slate-200 grid grid-cols-1 sm:grid-cols-2">
                {credentialsWall.map((cred) => {
                  const isHistorical =
                    cred.status === "Historical / Former Designation";
                  return (
                    <div
                      key={cred.id}
                      className="p-5 border-r border-b border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className={`text-[11px] font-mono-tabular font-semibold ${
                              isHistorical ? "text-amber-700" : "text-[#0284C7]"
                            }`}
                          >
                            {cred.status}
                          </span>
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0B192C] tracking-tight">
                          {cred.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {cred.institutionOrScope}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Recognition Section (Section 26 — Restrained Institutional Layout) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-300 mb-5">
                <h3 className="text-sm font-mono-tabular font-bold text-[#0B192C]">
                  PROFESSIONAL RECOGNITION &amp; HONORS
                </h3>
                <span className="text-[11px] font-mono-tabular text-slate-500">
                  VERIFIED AWARDS
                </span>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
                {recognitions.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                  >
                    <div className="md:col-span-5">
                      <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#0284C7] mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{rec.issuingBody}</span>
                      </div>
                      <h4 className="text-base font-bold text-[#0B192C] tracking-tight">
                        {rec.title}
                      </h4>
                      <p className="text-[11px] font-mono-tabular text-slate-400 mt-1">
                        {rec.yearNote}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {rec.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
