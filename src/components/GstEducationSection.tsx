import React, { useState } from "react";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface GstEducationSectionProps {
  onInquireTraining: (courseTopic: string) => void;
}

export const GstEducationSection: React.FC<GstEducationSectionProps> = ({
  onInquireTraining,
}) => {
  const [imgError, setImgError] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<string>("01");
  const [scheduleNoticeOpen, setScheduleNoticeOpen] = useState(false);

  const { gstFoundation } = CLIENT_DATABASE;

  return (
    <section
      id="training"
      className="bg-[#0B192C] text-white border-b border-slate-800 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#38BDF8] mb-3">
              <span>03. EDUCATIONAL &amp; RESEARCH INITIATIVE</span>
              <span aria-hidden="true">·</span>
              <span>{gstFoundation.name.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white leading-[1.15] tracking-tight">
              {gstFoundation.headline}
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {gstFoundation.description}
            </p>
            <p className="text-xs font-mono-tabular text-slate-400 mt-3">
              {gstFoundation.roleNote}
            </p>
          </div>
        </div>

        {/* Split Layout: Curriculum Pillars + Visual & Batch Schedule Module */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 6 Columns: Practical Curriculum Architecture */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-mono-tabular text-slate-400">
                APPLIED TRAINING MODULES (01–04)
              </span>
              <span className="text-xs font-mono-tabular text-[#38BDF8]">
                PRACTICAL EXECUTION FOCUS
              </span>
            </div>

            <div className="border border-slate-800 divide-y divide-slate-800 bg-[#0E2038]">
              {gstFoundation.curriculumPillars.map((pillar) => {
                const isSelected = selectedPillar === pillar.index;
                return (
                  <button
                    key={pillar.index}
                    type="button"
                    onClick={() => setSelectedPillar(pillar.index)}
                    className={`w-full text-left p-6 transition-colors duration-150 cursor-pointer block border-l-4 ${
                      isSelected
                        ? "bg-[#132A4A] border-[#38BDF8]"
                        : "bg-[#0E2038] hover:bg-[#112440] border-transparent"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-mono-tabular font-semibold text-[#38BDF8]">
                          MODULE {pillar.index}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono-tabular text-slate-400 shrink-0">
                        {isSelected ? "SELECTED" : "VIEW"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pl-0 sm:pl-[84px]">
                      {pillar.detail}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Audience Note */}
            <div className="mt-6 p-5 border border-slate-800 bg-[#081220]">
              <p className="text-xs font-mono-tabular text-slate-400 mb-1.5">
                ELIGIBLE PARTICIPANTS &amp; PROFESSIONAL AUDIENCE
              </p>
              <p className="text-sm text-slate-200 leading-relaxed">
                {gstFoundation.batchSchedule.targetAudience}
              </p>
            </div>
          </div>

          {/* Right 6 Columns: Seminar Frame + Training / Batch Module (Section 33) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Structured Seminar Hall Image Frame */}
            <div className="border border-slate-700 bg-[#081220]">
              <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono-tabular text-slate-400">
                <span>GST RESEARCH FOUNDATION · TRAINING ENVIRONMENT</span>
                <span>PRACTICAL LABS &amp; CASE STUDIES</span>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                {!imgError ? (
                  <img
                    src={CLIENT_DATABASE.images.gstFoundationSeminar}
                    alt="Executive seminar hall for GST Research Foundation professional GST training sessions"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-slate-300">
                    <BookOpen className="w-8 h-8 text-[#38BDF8] mb-2" />
                    <p className="text-sm font-semibold">{gstFoundation.name}</p>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081220]/90 via-[#081220]/40 to-transparent px-4 py-2.5 text-[11px] font-mono-tabular text-slate-300 flex items-center justify-between">
                  <span>GST PORTAL · TALLY · GSTAT LEARNING</span>
                  <span>DELHI</span>
                </div>
              </div>
            </div>

            {/* UI-Ready Training / Batch Module (Section 33) */}
            <div className="border border-slate-700 bg-[#0E2038] p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700/80">
                <div>
                  <p className="text-xs font-mono-tabular text-[#38BDF8]">
                    TRAINING &amp; BATCH SCHEDULE LEDGER
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                    {gstFoundation.batchSchedule.courseTitle}
                  </h3>
                </div>
                <span className="text-xs font-mono-tabular text-amber-300">
                  Upcoming schedule to be updated
                </span>
              </div>

              <dl className="mt-4 divide-y divide-slate-800 text-xs sm:text-sm">
                <div className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <dt className="font-mono-tabular text-xs text-slate-400">
                    COURSE FORMAT
                  </dt>
                  <dd className="text-slate-200 font-medium sm:text-right">
                    {gstFoundation.batchSchedule.format}
                  </dd>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <dt className="font-mono-tabular text-xs text-slate-400">
                    CORE SYLLABUS
                  </dt>
                  <dd className="text-slate-200 font-medium sm:text-right">
                    {gstFoundation.batchSchedule.syllabusSummary}
                  </dd>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <dt className="font-mono-tabular text-xs text-slate-400">
                    UPCOMING BATCH DATE
                  </dt>
                  <dd className="font-mono-tabular text-slate-200 sm:text-right">
                    {gstFoundation.batchSchedule.upcomingBatchDate}
                  </dd>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <dt className="font-mono-tabular text-xs text-slate-400">
                    DURATION &amp; FEE DETAILS
                  </dt>
                  <dd className="text-slate-300 sm:text-right">
                    {gstFoundation.batchSchedule.duration}
                  </dd>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <dt className="font-mono-tabular text-xs text-slate-400">
                    REGISTRATION PORTAL
                  </dt>
                  <dd className="font-mono-tabular text-[#38BDF8] sm:text-right">
                    {gstFoundation.batchSchedule.registrationPlaceholder}
                  </dd>
                </div>
              </dl>

              {/* Action Row */}
              <div className="mt-6 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onInquireTraining(
                      "GST Research Foundation — Training & Syllabus Inquiry"
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#0B192C] bg-white hover:bg-slate-100 transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <span>{CLIENT_DATABASE.ctas.exploreTraining}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setScheduleNoticeOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono-tabular text-slate-200 border border-slate-600 hover:border-slate-400 transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <span>
                    {scheduleNoticeOpen
                      ? "Hide Batch Status Note"
                      : "Check Registration Link Status"}
                  </span>
                </button>
              </div>

              {scheduleNoticeOpen && (
                <div className="mt-4 p-4 bg-[#081220] border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Batch Schedule Verification Notice
                    </p>
                    <p className="mt-1 leading-relaxed">
                      Official batch dates ({CLIENT_DATABASE.contact.courseDatePlaceholder}) and direct registration links ({CLIENT_DATABASE.contact.registrationLinkPlaceholder}) are updated upon release by the GST Research Foundation. Use{" "}
                      <button
                        type="button"
                        onClick={() =>
                          onInquireTraining(
                            "GST Research Foundation — Batch Notification Request"
                          )
                        }
                        className="underline text-[#38BDF8] hover:text-white cursor-pointer"
                      >
                        Explore GST Training
                      </button>{" "}
                      to register your interest with the secretariat.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
