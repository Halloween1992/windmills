import React from "react";
import { OfferWrapper } from "../wrappers.js/OffersWrapper";
import { FaCookieBite, FaIceCream } from "react-icons/fa";
import { GiCakeSlice, GiCoffeeCup } from "react-icons/gi";

import { RiDrinksFill } from "react-icons/ri";
import { IoGlassesSharp } from "react-icons/io5";

const Offers = () => {
  return (
    <OfferWrapper id="offers">
      <div className="header">
        <h1>Nasz Oferty</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          pariatur atque
        </p>
      </div>
      <div className="offers">
        <div>
          <FaIceCream />
          <h2>Lody</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
        <div>
          <GiCoffeeCup />
          <h2>Kawa</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
        <div>
          <GiCakeSlice />
          <h2>Torty</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
        <div>
          <IoGlassesSharp />
          <h2>Puchary</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
        <div>
          <FaCookieBite />
          <h2>Ciastka</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
        <div>
          <RiDrinksFill />
          <h2>Drinki</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            pariatur atque, harum similique modi eveniet quasi deleniti vel
            nihil aperiam reiciendis eaque.
          </p>
        </div>
      </div>
    </OfferWrapper>
  );
};

export default Offers;
