import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import Services from "../components/Services";
import { useAnalytics } from "react-analytics";
import React, { useEffect } from "react";

const Home = () => {
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Features />
      <About />
      <Services />
      <Logos />
      <Footer />
    </>
  );
};

export default Home;
