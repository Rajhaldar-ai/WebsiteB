import React from "react";
import { X, ArrowUpRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";
import { NAV_ITEMS } from "./Header";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (preselectedService?: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-[#0B192C] text-white flex flex-col justify-between overflow-y-auto"
    >
      {/* Top Bar inside Overlay */}
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between border-b border-slate-800 shrink-0">
        <div>
          <span className="text-base font-bold tracking-tight text-white block">
            {CLIENT_DATABASE.identity.firmName}
          </span>
          <span className="text-[11px] font-mono-tabular text-slate-400">
            {CLIENT_DATABASE.identity.descriptor} · {CLIENT_DATABASE.identity.educationalInitiative}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex items-center justify-center w-11 h-11 text-white border border-slate-700 hover:bg-slate-800 transition-colors duration-150 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Structured Grid Links */}
      <nav aria-label="Mobile Navigation" className="px-4 sm:px-6 py-8 flex-1">
        <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline justify-between py-4 text-xl font-semibold tracking-tight text-slate-100 hover:text-[#38BDF8] transition-colors duration-150"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono-tabular text-slate-400">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#38BDF8] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

        {/* Verified Chambers Summary */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div>
            <p className="font-mono-tabular text-slate-400 mb-1">
              Primary Office · Shastri Nagar
            </p>
            <p>{CLIENT_DATABASE.contact.primaryOffice.fullAddress}</p>
          </div>
          <div>
            <p className="font-mono-tabular text-slate-400 mb-1">
              Secondary Location · Moti Nagar
            </p>
            <p>{CLIENT_DATABASE.contact.secondaryOffice.fullAddress}</p>
          </div>
        </div>
      </nav>

      {/* Bottom Action Area */}
      <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#081220] shrink-0">
        <button
          type="button"
          onClick={() => onBookConsultation()}
          className="w-full py-3.5 px-5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold tracking-tight flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer whitespace-nowrap"
        >
          <span>{CLIENT_DATABASE.ctas.primary}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
