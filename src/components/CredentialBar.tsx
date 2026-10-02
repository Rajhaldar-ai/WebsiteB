import React from "react";
import { CLIENT_DATABASE } from "../data/clientData";

export const CredentialBar: React.FC = () => {
  return (
    <section
      aria-label="Verified Practice Credentials and Statistics"
      className="bg-[#0B192C] text-white border-b border-slate-800"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {CLIENT_DATABASE.credentialsBar.map((item, index) => (
            <div
              key={item.id}
              className={`py-7 sm:py-8 ${
                index === 0
                  ? "sm:pr-6 lg:pr-8"
                  : index === CLIENT_DATABASE.credentialsBar.length - 1
                  ? "sm:pl-6 lg:pl-8"
                  : "sm:px-6 lg:px-8"
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono-tabular tracking-tight text-white">
                  {item.value}
                </span>
                <span className="text-[11px] font-mono-tabular text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-100">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
