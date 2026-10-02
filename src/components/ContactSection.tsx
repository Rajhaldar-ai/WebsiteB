import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { CLIENT_DATABASE } from "../data/clientData";

interface ContactSectionProps {
  preselectedService: string;
}

const SERVICE_OPTIONS = [
  "GST SCN Management & Appeals",
  "ITC Optimization & Refund Filing",
  "Search, Seizure & Transit Detention Defense",
  "Indirect Tax & Corporate Structuring Advisory",
  "Statutory Audits & Risk Assurance",
  "Retail Audits & IT / CISA Auditing",
  "Corporate Law Advisory & Project Financing",
  "GST Research Foundation — Training & Syllabus Inquiry",
  "General Corporate Consultation",
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
}) => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceRequired, setServiceRequired] = useState(
    preselectedService || SERVICE_OPTIONS[0]
  );
  const [noticeInfo, setNoticeInfo] = useState("");
  const [description, setDescription] = useState("");
  const [stagedFileName, setStagedFileName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    serviceRequired: string;
    timestamp: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setServiceRequired(preselectedService);
    }
  }, [preselectedService]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setStagedFileName(`${file.name} (${Math.round(file.size / 1024)} KB)`);
    } else {
      setStagedFileName("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please provide a valid corporate or personal email address.");
      return;
    }
    if (phone.trim().length < 7) {
      setErrorMessage("Please provide a valid contact phone number.");
      return;
    }
    if (!description.trim()) {
      setErrorMessage("Please include a brief description of your requirement.");
      return;
    }

    const refCode = `RAA-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedData({
      referenceId: refCode,
      fullName: fullName.trim(),
      serviceRequired,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  const { contact } = CLIENT_DATABASE;

  return (
    <section
      id="contact"
      className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono-tabular font-semibold text-[#0284C7] mb-3">
              10. Corporate Consultation &amp; Chambers
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B192C] leading-[1.15] tracking-tight">
              Schedule a Corporate Consultation or Submit Case Documentation.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect with Rajinder Arora &amp; Associates at our Shastri Nagar
              or Moti Nagar (DLF Tower) offices in New Delhi.
            </p>
          </div>
        </div>

        {/* Main Grid: Chambers Details (5 Cols) + Consultation Form (7 Cols) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT 5 Columns: Verified Locations, Hours & Placeholders (Section 30) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Office */}
            <div className="p-6 border border-slate-300 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#0284C7] mb-2">
                <span>LOCATION 01 · PRIMARY CHAMBERS</span>
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-1">
                {contact.primaryOffice.label}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {contact.primaryOffice.addressLine1}
                <br />
                {contact.primaryOffice.addressLine2}
              </p>
            </div>

            {/* Secondary Location */}
            <div className="p-6 border border-slate-300 bg-slate-50">
              <div className="flex items-center justify-between text-xs font-mono-tabular text-[#0284C7] mb-2">
                <span>LOCATION 02 · CORPORATE TOWER</span>
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-1">
                {contact.secondaryOffice.label}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {contact.secondaryOffice.addressLine1}
                <br />
                {contact.secondaryOffice.addressLine2}
              </p>
            </div>

            {/* Hours & Contact Placeholders */}
            <div className="p-6 border border-slate-300 bg-white divide-y divide-slate-200">
              <div className="pb-4">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-slate-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>PRACTICE HOURS</span>
                </div>
                <p className="text-sm font-bold text-[#0B192C]">
                  {contact.hours.days}
                </p>
                <p className="text-sm font-mono-tabular text-slate-600">
                  {contact.hours.time}
                </p>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-slate-400 mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>TELEPHONE DIRECTORY</span>
                </div>
                <p className="text-sm font-mono-tabular font-semibold text-[#0B192C]">
                  {contact.phonePlaceholder}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Reserved for verified office telephone line
                </p>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-slate-400 mb-1">
                  <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>OFFICIAL ELECTRONIC MAIL</span>
                </div>
                <p className="text-sm font-mono-tabular font-semibold text-[#0B192C]">
                  {contact.emailPlaceholder}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Reserved for verified firm email address
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT 7 Columns: Consultation Form & Secure Upload Placeholder (Sections 31 & 32) */}
          <div className="lg:col-span-7 border border-slate-300 bg-white p-6 sm:p-8 lg:p-10">
            <div className="pb-6 border-b border-slate-200 mb-6 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-xs font-mono-tabular text-[#0284C7]">
                  CONSULTATION &amp; CASE EVALUATION INTAKE
                </p>
                <h3 className="text-xl font-bold text-[#0B192C] tracking-tight mt-0.5">
                  Corporate Mandate &amp; Notice Submission Form
                </h3>
              </div>
              <span className="text-xs font-mono-tabular text-slate-400">
                FRONTEND STAGING READY
              </span>
            </div>

            {submittedData ? (
              <div className="p-6 bg-slate-50 border border-slate-300 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-mono-tabular text-[#0284C7]">
                      LOCAL INTAKE RECORD PREPARED · REF {submittedData.referenceId}
                    </p>
                    <h4 className="text-lg font-bold text-[#0B192C] mt-0.5">
                      Consultation Brief Staged for {submittedData.fullName}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Your inquiry regarding{" "}
                  <span className="font-semibold text-[#0B192C]">
                    {submittedData.serviceRequired}
                  </span>{" "}
                  has been formatted in the frontend interface at{" "}
                  {submittedData.timestamp}.
                </p>

                <div className="p-4 bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <p className="font-mono-tabular font-semibold text-[#0B192C] mb-1">
                    BACKEND INTEGRATION NOTICE
                  </p>
                  <p>
                    In accordance with strict institutional transparency rules,
                    this preview interface does not transmit form payloads or
                    uploaded files to an external server until the firm&apos;s
                    production mail/CRM endpoint is connected.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setFullName("");
                    setCompany("");
                    setEmail("");
                    setPhone("");
                    setNoticeInfo("");
                    setDescription("");
                    setStagedFileName("");
                  }}
                  className="px-4 py-2.5 text-xs font-mono-tabular font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 cursor-pointer"
                >
                  Prepare Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {errorMessage && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Name of Authorized Representative"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enterprise, Institution or Practice Name"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="official@organization.com"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Direct Contact Number"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      SERVICE REQUIRED *
                    </label>
                    <select
                      id="contact-service"
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-notice"
                      className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                    >
                      NOTICE / CASE INFORMATION (OPTIONAL)
                    </label>
                    <input
                      id="contact-notice"
                      type="text"
                      value={noticeInfo}
                      onChange={(e) => setNoticeInfo(e.target.value)}
                      placeholder="e.g., SCN Reference / Financial Year / Forum"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-description"
                    className="block text-xs font-mono-tabular font-semibold text-[#0B192C] mb-1.5"
                  >
                    BRIEF DESCRIPTION OF MANDATE OR QUERY *
                  </label>
                  <textarea
                    id="contact-description"
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Outline the nature of the advisory, audit, litigation notice, or GST training requirement..."
                    className="w-full px-3.5 py-2.5 text-sm text-[#0B192C] bg-white border border-slate-300 focus:border-[#0284C7] focus:outline-none transition-colors duration-150"
                  />
                </div>

                {/* Secure Document Upload Placeholder (Section 32) */}
                <div className="p-4 bg-slate-50 border border-dashed border-slate-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-tabular font-bold text-[#0B192C] flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Secure Document Upload — Integration Required</span>
                    </span>
                    <span className="text-[11px] font-mono-tabular text-amber-700">
                      PLACEHOLDER INTERFACE
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Select a Show Cause Notice (SCN), assessment order, or
                    reconciliation summary to test file attachment staging. Files
                    are not uploaded or stored until a backend storage endpoint is
                    connected.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <label
                      htmlFor="document-upload-input"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono-tabular font-semibold text-[#0B192C] bg-white border border-slate-300 hover:border-[#0284C7] cursor-pointer transition-colors duration-150"
                    >
                      <span>Select Case Document (Local Preview)</span>
                      <input
                        id="document-upload-input"
                        type="file"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    {stagedFileName ? (
                      <span className="text-xs font-mono-tabular text-[#0284C7]">
                        Staged locally: {stagedFileName}
                      </span>
                    ) : (
                      <span className="text-xs font-mono-tabular text-slate-400">
                        No file staged
                      </span>
                    )}
                  </div>
                </div>

                {/* Privacy & Disclaimer Note */}
                <div className="text-xs text-slate-500 leading-relaxed pt-1">
                  <span className="font-semibold text-slate-700">
                    Professional Disclaimer &amp; Confidentiality Note:
                  </span>{" "}
                  Submitting this consultation form does not by itself create a
                  Chartered Accountant–client engagement until a formal letter of
                  engagement is executed. This frontend form is structured for
                  immediate backend API integration.
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162B49] transition-colors duration-150 cursor-pointer whitespace-nowrap"
                  >
                    <span>{CLIENT_DATABASE.ctas.primary}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
