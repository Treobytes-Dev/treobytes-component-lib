import React from "react";

import { Animation } from "../../components/base/Animation";

const Animations = {
  title: "Animations/Animation",
  component: Animation,

  argTypes: {
    iteration: {
      control: {
        type: "select",
        options: ["infinite", "repeat-1", "repeat-2", "repeat-3"],
      },
    },
    delay: {
      control: {
        type: "select",
        options: ["delay-1s", "delay-2s", "delay-3s", "delay-4s", "delay-5s"],
      },
    },
    duration: {
      control: {
        type: "select",
        options: ["faster", "fast", "slow", "slower"],
      },
    },
    attentionSeekers: {
      control: {
        type: "select",
        options: [
          "bounce",
          "flash",
          "pulse",
          "rubberBand",
          "shakeX",
          "shakeY",
          "headShake",
          "swing",
          "tada",
          "wobble",
          "jello",
          "heartBeat",
        ],
      },
    },
    backEntrances: {
      control: {
        type: "select",
        options: ["backInDown", "backInLeft", "backInRight", "backInUp"],
      },
    },
    backExits: {
      control: {
        type: "select",
        options: ["backOutDown", "bounceInLeft", "bounceInRight", "bounceInUp"],
      },
    },
    bouncingEntrances: {
      control: {
        type: "select",
        options: ["backOutDown", "bounceInLeft", "bounceInRight", "bounceInUp"],
      },
    },
    bouncingExits: {
      control: {
        type: "select",
        options: [
          "bounceOut",
          "bounceOutDown",
          "bounceOutLeft",
          "bounceOutRight",
          "bounceOutUp",
        ],
      },
    },
    fadingEntrances: {
      control: {
        type: "select",
        options: [
          "fadeIn",
          "fadeInDown",
          "fadeInDown",
          "fadeInDownBig",
          "fadeInLeft",
          "fadeInLeftBig",
          "fadeInRight",
          "fadeInRightBig",
          "fadeInUp",
          "fadeInUpBig",
          "fadeInUp",
          "fadeInUpBig",
          "fadeInTopLeft",
          "fadeInTopRight",
          "fadeInBottomLeft",
          "fadeInBottomRight",
        ],
      },
    },
    fadingExits: {
      control: {
        type: "select",
        options: [
          "fadeOut",
          "fadeOutDown",
          "fadeOutDownBig",
          "fadeOutLeft",
          "fadeOutLeftBig",
          "fadeOutRight",
          "fadeOutRightBig",
          "fadeOutUp",
          "fadeOutUpBig",
          "fadeOutTopLeft",
          "fadeOutTopRight",
          "fadeOutBottomRight",
          "fadeOutBottomLeft",
        ],
      },
    },
    flippers: {
      control: {
        type: "select",
        options: ["flip", "flipInX", "flipInY", "flipOutX", "flipOutY"],
      },
    },
    lightSpeed: {
      control: {
        type: "select",
        options: [
          "lightSpeedInRight",
          "lightSpeedInLeft",
          "lightSpeedOutRight",
          "lightSpeedOutLeft",
        ],
      },
    },
    rotatingEntrances: {
      control: {
        type: "select",
        options: [
          "rotateIn",
          "rotateInDownLeft",
          "rotateInDownRight",
          "rotateInUpLeft",
          "rotateInUpRight",
        ],
      },
    },
    rotatingExits: {
      control: {
        type: "select",
        options: [
          "rotateOut",
          "rotateOutDownLeft",
          "rotateOutDownRight",
          "rotateOutUpLeft",
          "rotateOutUpRight",
        ],
      },
    },
    specials: {
      control: {
        type: "select",
        options: ["hinge", "jackInTheBox", "rollIn", "rollOut"],
      },
    },
    zoomingEntrances: {
      control: {
        type: "select",
        options: [
          "zoomIn",
          "zoomInDown",
          "zoomInLeft",
          "zoomInRight",
          "zoomInUp",
        ],
      },
    },
    zoomingExits: {
      control: {
        type: "select",
        options: [
          "zoomOut",
          "zoomOutDown",
          "zoomOutLeft",
          "zoomOutRight",
          "zoomOutUp",
        ],
      },
    },
    slidingEntrances: {
      control: {
        type: "select",
        options: ["slideInDown", "slideInLeft", "zoomOutRight", "zoomOutUp"],
      },
    },
    slidingExits: {
      control: {
        type: "select",
        options: [
          "slideOutDown",
          "slideOutLeft",
          "slideOutRight",
          "slideOutUp",
        ],
      },
    },
  },
};

const AnimationTemplate = (args) => <Animation {...args} />;
export const animation = AnimationTemplate.bind({});
animation.args = {
  children: "Animation",
  iteration: "",
  delay: "",
  duration: "",
  attentionSeekers: "",
  backEntrances: "",
  backExits: "",
  bouncingEntrances: "",
  bouncingExits: "",
  fadingEntrances: "",
  fadingExits: "",
  flippers: "",
  lightSpeed: "",
  rotatingEntrances: "",
  rotatingExits: "",
  specials: "",
  zoomingEntrances: "",
  zoomingExits: "",
  slidingEntrances: "",
  slidingExits: "",
};
animation.storyName = "Animation";

export default Animations;
