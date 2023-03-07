import React from "react";
import { FacebookWithSquareBackFill } from "../../icons/FacebookWithSquareBackFill";
import { TwitterWithBackFillSquare } from "../../icons/TwitterWithBackFillSquare";
import { Instagram } from "../../icons/Instagram";


/**
 * React Social Icons component.
 * @function
 * Social Icons - Renders a branded Treobytes social icons component.
 */

export const SocialIcons = () => {
  return (
   <>
    <FacebookWithSquareBackFill
        additionalClass=""
        fill1="#3b5998"
        fill2="#fff"
        width={50}
        height={50}
        heightRect={72}
        widthRect={72}
        viewBox="0 0 72 72"
      />

      <TwitterWithBackFillSquare
        additionalClass=""
        fill1="#55ACEE"
        fill2="#fff"
        height={50}
        viewBox="0 0 75 75"
        width={50}
      />

      <Instagram
        additionalClass=""
        stroke="#C9006B"
        viewBox="0 0 24 24"
        width="50px"
      />
   </>
  );
};
