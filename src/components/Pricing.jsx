import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Toggle from "./Toggle";
import PricingList from "./PricingList";
import Footer from "./Footer";

const Pricing = () => {
  const [isClicked, setIsClicked] = useState(true);
  function handleToggle() {
    setIsClicked(!isClicked);
  }
  //console.log(isClicked);
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2 flex justify-center flex-col">
        <Heading title="Our Pricing" />
        <Toggle handleToggle={handleToggle} />
        <PricingList isClicked={isClicked} />
        <Footer />
      </div>
      <div className="relative"></div>
    </Section>
  );
};

export default Pricing;
