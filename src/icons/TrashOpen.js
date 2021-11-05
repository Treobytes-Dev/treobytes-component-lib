import React from "react";
import { string, number } from "prop-types";

export const TrashOpen = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  fill2,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      d="M17.662 21.885l45.723 8.94 45.722 8.942a1.559 1.559 0 0 0 1.828-1.23 10.152 10.152 0 0 0-8.016-11.913l-15.172-2.967.797-4.073a11.11 11.11 0 0 0-8.761-13.02l-22.449-4.39a11.11 11.11 0 0 0-13.02 8.76l-.797 4.074-15.172-2.967a10.152 10.152 0 0 0-11.913 8.016 1.559 1.559 0 0 0 1.23 1.828zM60.067 9.824L74.37 12.62a8.264 8.264 0 0 1 6.524 9.697l-15.26-2.984-15.262-2.985a8.264 8.264 0 0 1 9.696-6.524z"
      fill={fill1}
    />
    <path
      d="M110.588 47.362H17.412a1.559 1.559 0 0 0-1.558 1.557v5.91c0 .86 16.143 61.052 16.143 61.052a11.081 11.081 0 0 0 11.039 10.153h41.928a11.081 11.081 0 0 0 11.04-10.153s16.142-60.193 16.142-61.052v-5.91a1.559 1.559 0 0 0-1.558-1.557zM48.654 111.58a2.608 2.608 0 0 1-3.196-1.848c-4.443-16.614-8.96-33.53-11.916-44.73a2.61 2.61 0 1 1 5.049-1.332c2.954 11.191 7.47 28.104 11.91 44.713a2.61 2.61 0 0 1-1.847 3.197zm17.954-2.522a2.611 2.611 0 0 1-5.222 0V64.337a2.611 2.611 0 0 1 5.222 0zm27.85-44.056c-3.09 11.706-7.99 30.053-11.916 44.73a2.61 2.61 0 1 1-5.044-1.349c3.924-14.673 8.823-33.015 11.91-44.713a2.61 2.61 0 1 1 5.05 1.332z"
      fill={fill2}
    />
  </svg>
);

TrashOpen.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon height
   */
  height: number,

  /**
   * Define icon width
   */
  width: number,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon fill1 color
   */
  fill1: string,

  /**
   * Define icon fill2 color
   */
  fill2: string,
};

TrashOpen.defaultProps = {
  componentName: "trash-open",
};
