import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/priceLogo.png";
import img2 from "../assets/pricelogo2.png";
import img3 from "../assets/priceLogo3.png";
import PriceContent from "./PriceContent";
const Price = () => {
  return (
    <div className=" py-25">
      <Container>
        <SecHead
          title="Pricing Plan"
          heading="Discover our flexible pricing plans for attendees"
          className="w-200 mx-auto text-center"
          titleCss=" justify-center "
        />
        <div className="grid py-20 grid-cols-3">
          <PriceContent image={img1} title="Basic Package" number="$49  " />
          <PriceContent image={img2} title="Standard Pass" number="$59  " />
          <PriceContent image={img3} title="Standard Pass" number="$65  " />
        </div>
      </Container>
    </div>
  );
};

export default Price;
