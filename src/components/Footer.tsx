import React, { useState } from "react";
import { X } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<
    "privacy" | "disclaimer" | "compliance" | null
  >(null);

  const { identity, contact } = CLIENT_DATABASE;

  return (
    <>
      <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Column 1: Firm Identity (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <p className="text-lg font-bold text-white tracking-tight">
                  {identity.firmName}
                </p>
                <p className="text-xs font-mono-tabular text-[#38BDF8] mt-0.5">
                  {identity.descriptor.toUpperCase()}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Over 20 years of professional practice in GST litigation, tax
                consultancy, statutory and IT/CISA auditing, corporate law
                advisory, and professional GST education via{" "}
                <span className="text-slate-200 font-medium">
                  {identity.educationalInitiative}
                </span>
                .
              </p>

              <div className="pt-2 text-xs font-mono-tabular text-slate-400">
                <span>FOUNDER: {CLIENT_DATABASE.founder.name}</span>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span>{CLIENT_DATABASE.founder.qualifications}</span>
              </div>
            </div>

            {/* Column 2: Services (2 Cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono-tabular font-semibold text-white tracking-wider mb-4">
                SERVICES
              </h3>
              <ul className="space-y-2.5 text-xs">
                {[
                  {
                    label: "Tax Consultancy",
                    value: "Indirect Tax & Corporate Structuring Advisory",
                  },
                  {
                    label: "Litigation",
                    value: "GST SCN Management & Appeals",
                  },
                  {
                    label: "Auditing",
                    value: "Statutory Audits & Risk Assurance",
                  },
                  {
                    label: "Corporate Finance",
                    value: "Corporate Law Advisory & Project Financing",
                  },
                  {
                    label: "GST Training",
                    value: "GST Research Foundation — Training & Syllabus Inquiry",
                  },
                ].map((srv) => (
                  <li key={srv.label}>
                    <button
                      type="button"
                      onClick={() => onSelectService(srv.value)}
                      className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer text-left"
                    >
                      {srv.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources (2 Cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-mono-tabular font-semibold text-white tracking-wider mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="#insights"
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    Insights &amp; Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    GST Research Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="#expertise"
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    Professional Profiles
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    Practice Chronology
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Chambers (4 Cols) */}
            <div className="lg:col-span-4 space-y-3 text-xs">
              <h3 className="text-xs font-mono-tabular font-semibold text-white tracking-wider mb-4">
                CHAMBERS &amp; CONTACT
              </h3>
              <div>
                <p className="font-mono-tabular text-[11px] text-slate-400">
                  PRIMARY OFFICE (SHASTRI NAGAR)
                </p>
                <p className="text-slate-200 mt-0.5">
                  {contact.primaryOffice.fullAddress}
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-[11px] text-slate-400">
                  SECONDARY LOCATION (MOTI NAGAR)
                </p>
                <p className="text-slate-200 mt-0.5">
                  {contact.secondaryOffice.fullAddress}
                </p>
              </div>
              <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono-tabular text-slate-300">
                <span>TEL: {contact.phonePlaceholder}</span>
                <span>·</span>
                <span>EMAIL: {contact.emailPlaceholder}</span>
              </div>
              <p className="font-mono-tabular text-[11px] text-slate-400">
                HOURS: {contact.hours.combined}
              </p>
            </div>
          </div>

          {/* Bottom Legal & Compliance Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} {identity.firmName} —{" "}
              {identity.descriptor}. Associated with{" "}
              {identity.educationalInitiative}.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => setActiveLegalModal("privacy")}
                className="hover:text-white transition-colors duration-150 cursor-pointer"
              >
                Privacy Note
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal("disclaimer")}
                className="hover:text-white transition-colors duration-150 cursor-pointer"
              >
                Professional Disclaimer
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal("compliance")}
                className="hover:text-white transition-colors duration-150 cursor-pointer"
              >
                Professional Compliance
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Restrained Legal / Compliance Modal */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/75 flex items-center justify-center p-4"
        >
          <div className="bg-white border border-slate-300 max-w-lg w-full p-6 sm:p-8 text-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h4 className="text-base font-bold text-[#0B192C]">
                {activeLegalModal === "privacy" && "Privacy & Data Handling Note"}
                {activeLegalModal === "disclaimer" && "Institutional Disclaimer"}
                {activeLegalModal === "compliance" &&
                  "Professional Compliance Information"}
              </h4>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close legal dialog"
                className="p-1.5 text-slate-500 hover:text-[#0B192C] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              {activeLegalModal === "privacy" && (
                <p>
                  Information entered into the consultation or training inquiry
                  interfaces on this website is used solely for scheduling
                  professional consultations with {identity.firmName} or{" "}
                  {identity.educationalInitiative}. No external tracking or
                  unverified document storage is active until client backend
                  integration is completed.
                </p>
              )}
              {activeLegalModal === "disclaimer" && (
                <p>
                  The contents of this website provide factual information
                  regarding the practice areas, locations, and educational
                  initiatives of {identity.firmName} and{" "}
                  {identity.educationalInitiative}. Nothing on this website
                  constitutes formal tax or legal opinion without a documented
                  review of specific case facts.
                </p>
              )}
              {activeLegalModal === "compliance" && (
                <p>
                  Structured in accordance with professional standards applicable
                  to Chartered Accountancy practices in India, emphasizing
                  factual accuracy, non-solicitation, and clear differentiation
                  between current and historical institutional roles.
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 text-xs font-mono-tabular font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
