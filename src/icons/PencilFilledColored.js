import React from "react";
import {string} from "prop-types";

export const PencilFilledColored = ({
  componentName,
  additionalClassName,
  width,
  height,
  viewBox,
  circle,
  fillPath1,
  fillPath2,
  fillPath3,
  fillRect1,
  fillRect2,
  fillPolygon1,
  fillPolygon2,
  fillPolygon3,
  fillPolygon4,
  fillPolygon5,
  fillPolygon6,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <circle
        className="circle"
        fill={circle}
        cx="255.996"
        cy="255.996"
        r="255.996"
      />
      <path
        className="path-1"
        fill={fillPath1}
        d="M512,256.001c0-26.605-4.061-52.261-11.593-76.384L393.276,72.485  c-11.098-11.097-29.256-11.097-40.353,0L130.438,294.97L84.364,427.636l57.608,57.608C176.31,502.358,215.028,512,256.001,512  C397.385,512,512,397.385,512,256.001z"
      />
      <path
        className="path-2"
        fill={fillPath2}
        d="M400.804,197.788l-86.592-86.592l38.711-38.711c11.097-11.097,29.256-11.097,40.353,0l46.238,46.238  c11.097,11.097,11.097,29.256,0,40.353L400.804,197.788z"
      />
      <path
        className="path-3"
        fill={fillPath3}
        d="M439.17,159.422c11.287-11.287,11.287-29.756,0-41.043l-22.774-22.774l-58.888,58.888l43.296,43.296  L439.17,159.422z"
      />
      <rect
        className="rect-1"
        x="288.796"
        y="145.226"
        transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 483.0012 524.0056)"
        fill={fillRect1}
        width="122.459"
        height="33.488"
      />
      <rect
        className="rect-2"
        x="341.061"
        y="166.878"
        transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 504.6495 576.2772)"
        fill={fillRect2}
        width="61.23"
        height="33.488"
      />
      <polygon
        className="polygon-1"
        fill={fillPolygon1}
        points="297.372,128.037 130.438,294.97 84.364,427.636 217.03,381.562 383.963,214.627 "
      />
      <polygon
        className="polygon-2"
        fill={fillPolygon2}
        points="383.963,214.627 340.667,171.333 84.364,427.636 217.03,381.562 "
      />
      <polygon
        className="polygon-3"
        fill={fillPolygon3}
        points="84.364,427.636 217.03,381.562 130.438,294.97 "
      />
      <polygon
        className="polygon-4"
        fill={fillPolygon4}
        points="173.734,338.266 84.364,427.636 217.03,381.562 "
      />
      <polygon
        className="polygon-5"
        fill={fillPolygon5}
        points="142.558,407.426 104.574,369.442 84.364,427.636 "
      />
      <polygon
        className="polygon-6"
        fill={fillPolygon6}
        points="123.566,388.434 84.364,427.636 142.558,407.426 "
      />
    </svg>
  );
};

PencilFilledColored.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * circle color
   */
  circle: string,

  /**
   * fillPath1 color
   */
  fillPath1: string,

  /**
   * fillPath2 color
   */
  fillPath2: string,

  /**
   * fillPath3 color
   */
  fillPath3: string,

  /**
   * fillRect1 color
   */
  fillRect1: string,

  /**
   * fillRect2 color
   */
  fillRect2: string,

  /**
   * fillPolygon1 color
   */
  fillPolygon1: string,

  /**
   * fillPolygon2 color
   */
  fillPolygon2: string,

  /**
   * fillPolygon3 color
   */
  fillPolygon3: string,

  /**
   * fillPolygon4 color
   */
  fillPolygon4: string,

  /**
   * fillPolygon5 color
   */
  fillPolygon5: string,

  /**
   * fillPolygon6 color
   */
  fillPolygon6: string,
};

PencilFilledColored.defaultProps = {
  componentName: "pencil-filled-colored",
};
