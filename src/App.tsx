/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CredentialBar } from "./components/CredentialBar";
import { AboutSection } from "./components/AboutSection";
import { ServiceExplorer } from "./components/ServiceExplorer";
import { GstEducationSection } from "./components/GstEducationSection";
import { IndustryMatrix } from "./components/IndustryMatrix";
import { ExpertiseGrid } from "./components/ExpertiseGrid";
import { FounderProfile } from "./components/FounderProfile";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { InsightsSection } from "./components/InsightsSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>(
    "GST SCN Management & Appeals"
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B192C]">
      {/* Sticky Institutional Header (3-Zone Top Bar Contract) */}
      <Header onBookConsultation={handleBookConsultation} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Bright Structured Swiss Hero + Hero Information Panel */}
        <Hero
          onBookConsultation={handleBookConsultation}
          onExploreServices={() => scrollToSection("services")}
        />

        {/* Horizontal Verified Credentials Bar */}
        <CredentialBar />

        {/* 01. About the Practice + Firm Story Timeline */}
        <AboutSection />

        {/* 02. Interactive 3-Branch Service Explorer + Auditing & Corporate Finance Ledger */}
        <ServiceExplorer
          onSelectServiceForConsultation={(service) =>
            handleBookConsultation(service)
          }
          onNavigateToTraining={() => scrollToSection("training")}
        />

        {/* 03. GST Research Foundation Educational Experience & Batch Schedule Ledger */}
        <GstEducationSection
          onInquireTraining={(courseTopic) =>
            handleBookConsultation(courseTopic)
          }
        />

        {/* 04. Structured 11-Sector Industry Matrix */}
        <IndustryMatrix
          onInquireIndustry={(industryTopic) =>
            handleBookConsultation(industryTopic)
          }
        />

        {/* 05. Domain Matrix — Core Expertise */}
        <ExpertiseGrid
          onSelectExpertise={(expertiseTopic) =>
            handleBookConsultation(expertiseTopic)
          }
        />

        {/* 06. Leadership, Credentials Wall & Restrained Professional Recognition */}
        <FounderProfile />

        {/* 07. Four-Stage Jurisprudential & Advisory Workflow */}
        <ProcessTimeline
          onInitiateProcess={() =>
            handleBookConsultation("GST SCN Management & Appeals")
          }
        />

        {/* 08. Knowledge Hub & Research Archive */}
        <InsightsSection
          onRequestPublication={(refTopic) => handleBookConsultation(refTopic)}
        />

        {/* 09. Verified & Suggested Institutional FAQs */}
        <FaqSection />

        {/* 10. Chambers Locations, Consultation Form & Secure Upload Placeholder */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Deep Navy Institutional Footer */}
      <Footer onSelectService={(srv) => handleBookConsultation(srv)} />
    </div>
  );
}
