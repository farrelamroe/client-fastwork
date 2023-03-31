import React from "react";
import Image from "next/image";

const PageTwo = () => {
  return (
    <>
      <div
        className="h-screen w-full relative overflow-hidden p-5"
        style={{ backgroundImage: `url("/assets/background.jpeg")` }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-[150%]">
          <path
            d="M6.87502 15.3001L0.275016 8.70006C0.175016 8.60006 0.104015 8.49173 0.0620154 8.37506C0.0200154 8.25839 -0.000651042 8.13339 1.56251e-05 8.00006C1.56251e-05 7.86673 0.0210158 7.74173 0.0630158 7.62506C0.105016 7.50839 0.175682 7.40006 0.275016 7.30006L6.87502 0.70006C7.05835 0.516727 7.28768 0.421061 7.56302 0.413061C7.83835 0.405061 8.07568 0.500727 8.27501 0.70006C8.47501 0.883394 8.57935 1.11273 8.58802 1.38806C8.59668 1.66339 8.50068 1.90073 8.30002 2.10006L3.40002 7.00006H14.575C14.8583 7.00006 15.096 7.09606 15.288 7.28806C15.48 7.48006 15.5757 7.71739 15.575 8.00006C15.575 8.28339 15.4793 8.52106 15.288 8.71306C15.0967 8.90506 14.859 9.00073 14.575 9.00006H3.40002L8.30002 13.9001C8.48335 14.0834 8.57935 14.3167 8.58802 14.6001C8.59668 14.8834 8.50068 15.1167 8.30002 15.3001C8.11668 15.5001 7.88335 15.6001 7.60002 15.6001C7.31668 15.6001 7.07502 15.5001 6.87502 15.3001Z"
            fill="#FFFFFF"
          />
        </svg>

        <div className="bottom-0 absolute h-[50%] w-full bg-white rounded-t-2xl left-[50%] translate-x-[-50%] z-0">
          <svg
            width="39"
            height="10"
            viewBox="0 0 39 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-translate-y-12 block mx-auto hover:cursor-pointer">
            <rect width="39" height="10" rx="5" fill="black" />
          </svg>
          <h1 className="font-bold text-3xl pt-5 pl-5 pr-16">Get 80% off with our exclusive discount offer!</h1>
          
        </div>
      </div>
    </>
  );
};

export default PageTwo;
