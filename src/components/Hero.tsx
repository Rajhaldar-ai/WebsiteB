import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface HeroProps {
  onBookConsultation: (preselectedService?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookConsultation,
  onExploreServices,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle Swiss Vertical Grid Guide Lines (Desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute inset-0 max-w-[1360px] mx-auto px-10"
      >
        <div className="w-full h-full border-x border-slate-100" />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT 58% (7 of 12 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Unboxed Metadata Label */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular font-medium text-[#0284C7] tracking-wider mb-5">
                <span>{CLIENT_DATABASE.identity.heroLabel}</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span className="text-slate-500">NEW DELHI</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#0B192C] leading-[1.12] tracking-tight mb-6 max-w-2xl">
                {CLIENT_DATABASE.identity.heroHeadline}
              </h1>

              {/* Supporting Factual Paragraph */}
              <p className="text-base sm:text-[17px] text-slate-600 leading-[1.68] max-w-[64ch] mb-8">
                {CLIENT_DATABASE.identity.heroParagraph}
              </p>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => onBookConsultation()}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                >
                  <span>{CLIENT_DATABASE.ctas.primary}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={onExploreServices}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                >
                  <span>{CLIENT_DATABASE.ctas.exploreServices}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Institutional Sub-Metadata Strip (Unboxed Typography) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600"
            >
              <div>
                <p className="font-mono-tabular text-[11px] text-slate-400 mb-0.5">
                  PRACTICE FOCUS
                </p>
                <p className="font-medium text-slate-800">
                  GST Litigation · Audit · Corporate Law
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-[11px] text-slate-400 mb-0.5">
                  EDUCATIONAL INITIATIVE
                </p>
                <p className="font-medium text-slate-800">
                  {CLIENT_DATABASE.identity.educationalInitiative}
                </p>
              </div>
              <div>
                <p className="font-mono-tabular text-[11px] text-slate-400 mb-0.5">
                  CHAMBERS HOURS
                </p>
                <p className="font-medium text-slate-800">
                  {CLIENT_DATABASE.contact.hours.combined}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT 42% (5 of 12 columns) — Structured Frame & Hero Information Panel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-slate-300 bg-slate-50">
              {/* Top Technical Frame Bar */}
              <div className="px-4 py-2.5 border-b border-slate-200 bg-white flex items-center justify-between text-[11px] font-mono-tabular text-slate-500">
                <span>CHAMBERS &amp; PRACTICE ARCHITECTURE</span>
                <span>DELHI · SHASTRI NAGAR / MOTI NAGAR</span>
              </div>

              {/* Structured Image Frame with Geometric Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B192C] group">
                {!imgError ? (
                  <img
                    src={CLIENT_DATABASE.images.heroArchitecture}
                    alt="Modern corporate tax and legal chambers interior for Rajinder Arora & Associates in New Delhi"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0B192C] to-slate-800 text-slate-200">
                    <Building2 className="w-10 h-10 text-[#38BDF8] mb-3 stroke-[1.5]" />
                    <p className="text-sm font-semibold">
                      {CLIENT_DATABASE.identity.firmName}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Chartered Accountants · New Delhi Chambers
                    </p>
                  </div>
                )}

                {/* Subtle Swiss Geometric Crosshair Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border-[10px] border-white/10"
                >
                  <div className="w-full h-full border border-white/20" />
                </div>

                {/* Measured Contrast Scrim at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/45 to-transparent px-4 py-3 flex items-center justify-between text-[11px] font-mono-tabular text-slate-200">
                  <span>INSTITUTIONAL ADVISORY &amp; LITIGATION</span>
                  <span>REF · {CLIENT_DATABASE.identity.logoPlaceholder}</span>
                </div>
              </div>

              {/* Hero Information Panel (Section 13) */}
              <div className="p-5 bg-white border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3.5 border-b border-slate-200">
                  <div>
                    <p className="text-[11px] font-mono-tabular text-slate-400">
                      MANAGING &amp; FOUNDING PARTNER
                    </p>
                    <h2 className="text-lg font-bold text-[#0B192C] tracking-tight mt-0.5">
                      {CLIENT_DATABASE.founder.name}
                    </h2>
                  </div>
                  <span className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                    {CLIENT_DATABASE.founder.qualifications}
                  </span>
                </div>

                <div className="mt-3.5 space-y-2 text-xs text-slate-600">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-slate-500">Educational Leadership</span>
                    <span className="font-medium text-slate-900 text-right">
                      President, GST Research Foundation
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-slate-500">Bar Representation</span>
                    <span className="font-medium text-slate-900 text-right">
                      Vice-President, Sales Tax Bar Association Delhi
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-slate-500">ICAI Committee Record</span>
                    <span className="font-medium text-slate-700 text-right">
                      Former Chairman, NIRC ICAI GST Committee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
