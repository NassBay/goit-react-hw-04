import React from "react";
import { ThreeDots } from "react-loader-spinner";



const CustomLoader = () => {
  return (
    <div>
      <ThreeDots
        wrapperStyle={{
          justifyContent: "center",
        }}
        color="#0000cc"
        height={80}
        width={80}
      />
    </div>
  );
};

export default CustomLoader;
