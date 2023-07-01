import { useState } from "react";
import starfill from "../assets/Icons/Starfill.svg";
import star from "../assets/Icons/Star.svg";
import plus from "../assets/Icons/plus.svg";
import minus from "../assets/Icons/minus.svg";
import sizeinfo from "../assets/Icons/sizeinfo.svg";
import location from "../assets/Icons/location.svg";

export default function DetailBox() {
  const colors = ["yellow", "black", "white"];
  const sizes = [39, 40, 41, 42, 43];
  const [selectSize, setSelectSize] = useState(0);
  const [selectColor, setSelectColor] = useState(1);
  const [qty, setQty] = useState(1);
  return (
    <div className="xsm:ml-8 ml-0 p-2">
      <div>
        <h1 className="font-semibold text-lg mt-4">
          Summer Soft Bottom Casual Shoes 2023 New Men's Shoes Hundred Trendy
          Breathable Mesh Sports Running Shoes Men's Shoes Mens Tennis
        </h1>
        <div className="flex">
          <div className="flex">
            <img src={starfill} />
            <img src={starfill} />
            <img src={starfill} />
            <img src={starfill} />
            <img src={star} />
          </div>
          <h2 className="text-midlegray pl-2">
            <span className="text-black font-semibold">(5,600) </span> Reviews
          </h2>
        </div>

        <div className="flex bg-litered justify-center items-baseline p-2 rounded-lg xsm:w-96 w-full">
          <h2 className="text-red text-lg font-black">USD: 1,300.00</h2>
          <h4 className="text-midlegray text-sm font-lite line-through px-4">
            USD: 1,140.00
          </h4>
          <h2 className="text-red text-lg font-black">20% off</h2>
        </div>
        <h2 className="font-semibold text-midlegray text-lg my-2">Colors</h2>

        <div className="flex xsm:flex-row flex-wrap">
          {colors.map((e, i) => (
            <div
              onClick={() => setSelectColor(i)}
              key={"s" + i}
              className="flex items-center mx-4 cursor-pointer my-2"
            >
              <div
                style={{ background: `${e}` }}
                className="w-6 h-6  rounded-full border-2 border-black relative"
              >
                {selectColor === i ? (
                  <div className="w-8 h-8  rounded-full border-4 border-red absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
                ) : (
                  <></>
                )}
              </div>
              <h6 className="font-semibold text-black px-2 capitalize">{e}</h6>
            </div>
          ))}
        </div>
        <h2 className="font-semibold text-midlegray text-lg my-2">Shoe Size</h2>
        <div className="flex pl-2 items-end flex-wrap">
          {sizes.map((e, i) => (
            <div
              onClick={() => {
                setSelectSize(i);
              }}
              key={"a" + i}
              className={`w-10 h-10 ${
                selectSize === i ? "bg-darkgray" : "bg-litegray"
              } flex items-center justify-center rounded-lg mx-2 my-2`}
            >
              <h4
                className={` ${
                  selectSize === i ? "text-white" : "text-darkgray"
                } font-semibold `}
              >
                {e}
              </h4>
            </div>
          ))}
          <div>
            <div className="flex">
              <h4>Size info</h4>
              <img src={sizeinfo} />
            </div>
          </div>
        </div>
        <h2 className="font-semibold text-midlegray text-lg my-2">Quantity</h2>
        <div className="flex items-center">
          <img
            src={plus}
            onClick={() => {
              setQty(qty + 1);
            }}
            className="pr-2"
          />
          <h3 className="text-black font-semibold text-2xl">{qty}</h3>
          <img
            src={minus}
            onClick={() => {
              if (qty > 1) {
                setQty(qty - 1);
              }
            }}
            className="pl-2"
          />
          <h2 className="text-midlegray text-xl my-2">52 Pieces available</h2>
        </div>
        <div className="bg-litegray p-4 rounded-2xl mt-4">
          <div className="flex items-baseline">
            <h6 className="font-semibold text-black text-lg pr-2 capitalize">
              Ships to
            </h6>
            <img src={location} />
            <h6 className="text-midlegray font-normal">United State</h6>
          </div>
          <div>
            <h6 className="font-semibold text-black text-lg pr-2 capitalize">
              Shipping: USD10.31
            </h6>
            <h6 className="text-midlegray">
              From China to USA via AliExpress Standard Shipping Estimated
              delivery on agust 25
            </h6>
          </div>
        </div>

        <button className="w-28  mt-4 font-semibold text-white h-12 bg-red">
          Buy Now
        </button>
        <button className="w-28 mt-4  mx-4 font-semibold h-12 bg-black text-white">
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
}
