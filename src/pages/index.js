import React from "react";
//css
import "../assets/css/main.css";
//components
import LaningSection from "../components/home/laningSection";
import ServicesSection from "../components/home/servicesSection";
import ContactSection from "../components/home/ContactSection";
import Testimonial from "../components/home/testimonial";

const Index = () => {
  return (
    <div>
      <LaningSection />
      <ServicesSection />
      <ContactSection />
      <Testimonial />
    </div>
  );
};

export default Index;
