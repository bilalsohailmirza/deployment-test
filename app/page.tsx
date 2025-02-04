import React from "react";
import Header from "@/components/home/Header";
import OfferSection from "@/components/home/OfferSection";
import Features from "@/components/home/Features";
import Explore from "@/components/home/Explore";
import RAGFlow from "@/components/home/RAGFlow";
import KeyQuestions from "@/components/home/KeyQuestions";
import Request from "@/components/home/Request";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <OfferSection />
      <Features />
      <Explore />
      <RAGFlow />
      <KeyQuestions />
      <Request />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
