import React from "react";

const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="text-center md:w-[300px] w-[250px] mx-auto my-10">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      <h3 className="border-b-4 border-t-4 py-2 md:text-3xl text-2xl">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
