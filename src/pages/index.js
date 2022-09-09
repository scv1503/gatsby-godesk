import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="GoDesk Support System" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="Acerca de GoDesk" />
        <InterestsSection sectionId="details" heading="Funciones" />
        <ProjectsSection sectionId="features" heading="Características" />
        <ContactSection sectionId="github" heading="Precios" />
      </Page>
    </>
  );
}
