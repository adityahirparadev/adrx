import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FeatureSection from "./FeatureSection";
import Service from "./Home/Service";
const Home = () => {
  return (
    <>
      <Header />
      <FeatureSection name="Transforming Business Through IT"/>
      <Service/>
      <Footer />
    </>
  );
};

export default Home;
