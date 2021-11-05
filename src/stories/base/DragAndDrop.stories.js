import React from "react";

import { DragAndDrop } from "../../components/base/DragAndDrop";

const DragAndDrops = {
  title: "Components/DragAndDrop",
  component: DragAndDrop,
  parameters: {
    docs: {
      description: {
        component: "Drag and drop",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args) => <DragAndDrop {...args} />;

export const dragAndDrop = Template.bind({});
dragAndDrop.args = {
  positions: [1, 2, 3, 4, 5],
};
dragAndDrop.storyName = "Default";

export default DragAndDrops;
