import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Edu from "../components/Edu";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Skill from "../components/Skill";

const HomeView = () => {
  

  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Edu />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
