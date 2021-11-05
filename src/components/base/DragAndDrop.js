import React, { useState } from "react";
import { string } from "prop-types";
import "../../styles/_dragAndDrop.scss";

const items = [
  { number: "1", title: "Row 1" },
  { number: "2", title: "Row 2" },
  { number: "3", title: "Row 3" },
  { number: "4", title: "Row 4" },
  { number: "5", title: "Row 5" },
];

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

export const DragAndDrop = ({ componentName, additionalClassName = "" }) => {
  const [list, setList] = useState(items);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", "");
  };

  // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const onDragOver = (event) => {
    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <div
      className={`${componentName} ${additionalClassName}`}
      data-test-id={componentName}
    >
      <ul className="unordered-list">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              data-position={index}
              draggable
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
              className={
                `list-item` + dragAndDrop &&
                dragAndDrop.draggedTo === Number(index)
                  ? "dropArea"
                  : ""
              }
            >
              <span>{item.number}</span>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DragAndDrop.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,
};

DragAndDrop.defaultProps = {
  componentName: "drag-and-drop",
};
