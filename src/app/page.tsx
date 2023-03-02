// app/page.tsx
"use client";

import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Link } from "@chakra-ui/next-js";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
