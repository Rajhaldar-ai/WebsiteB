import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface ProcessTimelineProps {
  onInitiateProcess: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  onInitiateProcess,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              07. Engagement Methodology
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B192C] leading-[1.16] tracking-tight">
              Four-Stage Jurisprudential &amp; Advisory Workflow.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:items-end justify-between gap-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
              Every representation and compliance mandate follows a structured
              four-stage operational protocol from initial document intake through
              authority representation.
            </p>
            <button
              type="button"
              onClick={onInitiateProcess}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{CLIENT_DATABASE.ctas.submitNotice}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Progress Line Indicator */}
        <div className="hidden lg:block mt-12 mb-6">
          <div className="relative h-[2px] bg-slate-200 w-full">
            <div
              className="h-full bg-[#0284C7] transition-transform duration-200 origin-left"
              style={{
                transform: `scaleX(${(activeStepIndex + 1) / 4})`,
              }}
            />
          </div>
        </div>

        {/* 4-Column Horizontal Grid on Desktop / Vertical Timeline on Mobile */}
        <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-4 border-l-2 lg:border-l-0 border-slate-300 lg:border-t lg:border-slate-200 bg-white divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {CLIENT_DATABASE.processWorkflow.map((step, index) => {
            const isSelected = activeStepIndex === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStepIndex(index)}
                onClick={() => setActiveStepIndex(index)}
                className={`p-6 sm:p-8 flex flex-col justify-between transition-colors duration-150 cursor-pointer ${
                  isSelected ? "bg-[#0B192C] text-white" : "bg-white text-[#0B192C]"
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-6">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold font-mono-tabular tracking-tight ${
                        isSelected ? "text-[#38BDF8]" : "text-[#0B192C]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono-tabular ${
                        isSelected ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      STAGE 0{index + 1} / 04
                    </span>
                  </div>

                  <p
                    className={`text-xs font-mono-tabular mb-1.5 ${
                      isSelected ? "text-[#38BDF8]" : "text-[#0284C7]"
                    }`}
                  >
                    {step.subtitle}
                  </p>

                  <h3 className="text-lg font-bold tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t text-xs font-mono-tabular ${
                    isSelected
                      ? "border-slate-800 text-slate-300"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  <span className="block text-[10px] opacity-75 mb-0.5">
                    STAGE OUTPUT
                  </span>
                  <span className="font-medium">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
