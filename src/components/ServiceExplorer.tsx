import React, { useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface ServiceExplorerProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
  onNavigateToTraining: () => void;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({
  onSelectServiceForConsultation,
  onNavigateToTraining,
}) => {
  const [activeBranchId, setActiveBranchId] = useState<string>(
    CLIENT_DATABASE.serviceBranches[0].id
  );
  const activeBranch =
    CLIENT_DATABASE.serviceBranches.find((b) => b.id === activeBranchId) ||
    CLIENT_DATABASE.serviceBranches[0];

  const [activeServiceId, setActiveServiceId] = useState<string>(
    activeBranch.services[0].id
  );

  const handleBranchChange = (branchId: string) => {
    setActiveBranchId(branchId);
    const nextBranch = CLIENT_DATABASE.serviceBranches.find(
      (b) => b.id === branchId
    );
    if (nextBranch && nextBranch.services.length > 0) {
      setActiveServiceId(nextBranch.services[0].id);
    }
  };

  const activeService =
    activeBranch.services.find((s) => s.id === activeServiceId) ||
    activeBranch.services[0];

  return (
    <section
      id="services"
      className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              02. Practice Architecture &amp; Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B192C] leading-[1.15] tracking-tight">
              Three Integrated Branches of Professional Practice.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Select a practice branch and individual service below to inspect scope,
              relevant client types, related domain expertise, and direct consultation
              pathways.
            </p>
          </div>
        </div>

        {/* Interactive Service Explorer (Sections 18 & 19) */}
        <div className="mt-10 border border-slate-300 bg-white grid grid-cols-1 lg:grid-cols-12">
          {/* Left Vertical Category Navigation (4 Columns) */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-300 bg-slate-50 flex flex-col justify-between">
            <div>
              <div className="px-5 py-3.5 border-b border-slate-200 text-[11px] font-mono-tabular text-slate-500">
                SELECT PRACTICE BRANCH (01–03)
              </div>
              <div className="divide-y divide-slate-200" role="tablist">
                {CLIENT_DATABASE.serviceBranches.map((branch) => {
                  const isSelected = branch.id === activeBranch.id;
                  return (
                    <button
                      key={branch.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => handleBranchChange(branch.id)}
                      className={`w-full text-left p-5 sm:p-6 transition-colors duration-150 cursor-pointer flex flex-col gap-2 border-l-4 ${
                        isSelected
                          ? "bg-[#0B192C] text-white border-[#0284C7]"
                          : "bg-slate-50 hover:bg-slate-100 text-[#0B192C] border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span
                          className={`text-xs font-mono-tabular font-semibold ${
                            isSelected ? "text-[#38BDF8]" : "text-[#0284C7]"
                          }`}
                        >
                          BRANCH {branch.number}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-150 ${
                            isSelected
                              ? "text-[#38BDF8] translate-x-0.5"
                              : "text-slate-400"
                          }`}
                        />
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-tight">
                        {branch.title}
                      </span>
                      <span
                        className={`text-xs leading-relaxed ${
                          isSelected ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {branch.overview}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-5 border-t border-slate-200 bg-white text-xs text-slate-500">
              <p className="font-mono-tabular text-[11px] text-slate-400 mb-1">
                JURISDICTION &amp; REPRESENTATION
              </p>
              <p>
                Departmental Adjudication · Appellate Forums · Statutory Audit ·
                GST Research Foundation
              </p>
            </div>
          </div>

          {/* Right Detailed Interactive Service Content (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white">
            {/* Sub-navigation for Services within Active Branch */}
            <div>
              <div className="px-6 py-3.5 border-b border-slate-200 bg-slate-50/60 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono-tabular font-semibold text-[#0B192C]">
                  {activeBranch.number} — {activeBranch.title.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono-tabular text-slate-500">
                  SELECT MANDATE TO INSPECT DETAILS
                </span>
              </div>

              {/* Service Selector List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {activeBranch.services.map((service) => {
                  const isActive = service.id === activeService.id;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceId(service.id)}
                      className={`p-5 text-left transition-colors duration-150 cursor-pointer border-b border-slate-200 last:border-b-0 ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-white hover:bg-slate-50 text-[#0B192C]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-mono-tabular font-semibold ${
                            isActive ? "text-[#38BDF8]" : "text-slate-400"
                          }`}
                        >
                          {service.number} — MANDATE
                        </span>
                        {isActive && (
                          <span className="text-[11px] font-mono-tabular text-[#38BDF8]">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base font-bold tracking-tight">
                        {service.title}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Service Inspection Panel */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#0284C7] mb-3">
                  <span>
                    {activeBranch.number}.{activeService.number}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeBranch.title}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] tracking-tight mb-4">
                  {activeService.title}
                </h3>

                <p className="text-base text-slate-700 leading-[1.7] mb-8">
                  {activeService.detailedDescription}
                </p>

                {/* Metadata Grid: Client Types & Related Expertise (Unboxed Text) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div>
                    <p className="text-xs font-mono-tabular text-slate-400 mb-2">
                      RELEVANT CLIENT TYPES
                    </p>
                    <p className="text-sm font-medium text-[#0B192C] leading-relaxed">
                      {activeService.clientTypes.join(" · ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono-tabular text-slate-400 mb-2">
                      RELATED EXPERTISE DOMAINS
                    </p>
                    <p className="text-sm font-medium text-[#0B192C] leading-relaxed">
                      {activeService.relatedExpertise.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Bar inside Service Explorer */}
            <div className="px-6 sm:px-8 py-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-[#0B192C]">
                  Direct Mandate Inquiry:
                </span>{" "}
                Pre-fills consultation request with{" "}
                <span className="underline">{activeService.title}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (activeBranch.id === "gst-education-training") {
                    onNavigateToTraining();
                  } else {
                    onSelectServiceForConsultation(
                      activeService.ctaServiceValue
                    );
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>{activeService.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Auditing & Corporate Finance Alternating Row Architecture (Section 20) */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-2">
                ASSURANCE, SYSTEMS &amp; CAPITAL ARCHITECTURE
              </p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B192C] tracking-tight">
                Auditing &amp; Corporate Finance Practice Ledger
              </h3>
            </div>
            <div className="lg:col-span-5 flex items-end lg:justify-end">
              <p className="text-xs font-mono-tabular text-slate-500">
                06 CORE ASSURANCE &amp; ADVISORY MANDATES
              </p>
            </div>
          </div>

          {/* Alternating Structured Row Layout */}
          <div className="border-t border-slate-300 divide-y divide-slate-200">
            {CLIENT_DATABASE.auditingAndFinanceRows.map((item, idx) => (
              <div
                key={item.number}
                className={`py-6 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline transition-colors duration-150 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/80"
                } hover:bg-slate-100/80`}
              >
                <div className="lg:col-span-1">
                  <span className="text-sm font-mono-tabular font-bold text-[#0284C7]">
                    {item.number}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h4 className="text-base sm:text-lg font-bold text-[#0B192C] tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono-tabular text-slate-500 mt-0.5">
                    {item.scopeNote}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="lg:col-span-3 flex flex-col lg:items-end justify-between gap-2">
                  <span className="text-xs font-medium text-slate-700 lg:text-right">
                    {item.clientType}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectServiceForConsultation(item.name)}
                    className="inline-flex items-center gap-1 text-xs font-mono-tabular font-semibold text-[#0B192C] hover:text-[#0284C7] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  >
                    <span>Request Mandate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
