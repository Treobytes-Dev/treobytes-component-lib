import React, { useState } from "react";
import { node, string } from "prop-types";
import "../../styles/_menu-hover.scss";

export const MenuHover = ({
  isOpenChildren,
  isClosedChildren,
  additionalClassName = "",
  componentName,
}) => {
  const [navigationLinksArr, setNavigationLinksArr] = useState([
    {
      id: uuidv4(),
      href: "/get-care/",
      linkName: "get-care",
      anchorName: "Get Care Today",
      chevronDown: "",
      currentIndex: null,
    },
    {
      id: uuidv4(),
      href: "https://www.sharp.com/san-diego-doctors/",
      linkName: "find-a-doctor",
      anchorName: "Find a Doctor",
      chevronDown: <IconChevronDown />,
      currentIndex: uuidv4(),
      menuTitle: "Frequently Searched",
      menuOptions: [
        [
          {
            id: uuidv4(),
            urls:
              "/san-diego-doctors/search?specialty=Cardiovascular%20Disease",
            urlText: "Cardiologists",
          },
          {
            id: uuidv4(),
            urls: "/san-diego-doctors/search?specialty=Obstetrics%2FGynecology",
            urlText: "Gynecologists",
          },
          {
            id: uuidv4(),
            urls:
              "/san-diego-doctors/search?specialty=Hematology%2FOncology%2CRadiation%20Oncology%2CSurgical%20Oncology%2CGynecologic%20Oncology",
            urlText: "Oncologists",
          },
          {
            id: uuidv4(),
            urls: "/san-diego-doctors/search?specialty=Orthopedic%20Surgery",
            urlText: "Orthopedic surgeons",
          },
          {
            id: uuidv4(),
            urls: "/san-diego-doctors/search?specialty=Pediatrics",
            urlText: "Pediatricians",
          },
          {
            id: uuidv4(),
            urls:
              "/san-diego-doctors/search?specialty=Family%20Medicine%2CInternal%20Medicine",
            urlText: "Primary care",
          },
        ],
        [
          {
            id: uuidv4(),
            urls:
              "/san-diego-doctors/search?specialty=Family%20Medicine%2CInternal%20Medicine&searchType=primary",
            urlText: "Find a primary care doctor",
          },
          {
            id: uuidv4(),
            urls: "/san-diego-doctors/search?searchType=specialist",
            urlText: "Find a specialist",
          },
          {
            id: uuidv4(),
            urls: "/san-diego-doctors?searchType=name",
            urlText: "Find your doctor by name",
          },
        ],
      ],
    },
    {
      id: uuidv4(),
      href: "/locations/",
      linkName: "locations",
      anchorName: "Locations",
      chevronDown: <IconChevronDown />,
      currentIndex: uuidv4(),
      menuTitle: "Location Types",
      menuTitle2: "Medical Groups",
      menuOptions: [
        [
          {
            id: uuidv4(),
            urls: "/locations/search/emergency-rooms",
            urlText: "Emergency rooms",
          },
          {
            id: uuidv4(),
            urls: "/locations/search/hospitals",
            urlText: "Hospitals",
          },
          {
            id: uuidv4(),
            urls: "void(0)",
            urlText: "Hospitals",
          },
          {
            id: uuidv4(),
            urls: "void(0)",
            urlText: "Labs",
          },
          {
            id: uuidv4(),
            urls: "void(0)",
            urlText: "Urgent care centers",
          },
        ],
        [
          {
            id: uuidv4(),
            urls: "/locations/search/sharp-rees-stealy",
            urlText: "Sharp Rees-Stealy Medical Group offices",
          },
          {
            id: uuidv4(),
            urls: "/locations/search/sharp-community/primary-care/",
            urlText: "Sharp Community Medical Group offices",
          },
          {
            id: uuidv4(),
            urls: "/sharpcare/",
            urlText: "SharpCare Medical Group offices",
          },
          {
            id: uuidv4(),
            urls: "void:(0)",
            urlText: "View all location types",
            arrowRight: <IconArrowRight />,
          },
        ],
      ],
    },
    {
      id: uuidv4(),
      href: "/services/",
      linkName: "services",
      anchorName: "Medical Services",
      chevronDown: <IconChevronDown />,
      currentIndex: uuidv4(),
      menuTitle: "Department and Specialties",
      menuOptions: [
        [
          {
            id: uuidv4(),
            urls: "/services/cancer/",
            urlText: "Cancer treatment",
          },
          {
            id: uuidv4(),
            urls: "/services/emergency-urgent-care/",
            urlText: "Emergency and urgent care",
          },
          {
            id: uuidv4(),
            urls: "/services/heart/",
            urlText: "Heart and vascular care",
          },
          {
            id: uuidv4(),
            urls: "/services/heart/",
            urlText: "Heart and vascular care",
          },
          {
            id: uuidv4(),
            urls: "/services/mental-health/",
            urlText: "Mental health",
          },
          {
            id: uuidv4(),
            urls: "/services/ortho/",
            urlText: "Orthopedics",
          },
        ],
        [
          {
            id: uuidv4(),
            urls: "/services/rehab/",
            urlText: "Physical therapy and rehab",
          },
          {
            id: uuidv4(),
            urls: "/services/pregnancy/",
            urlText: "Pregnancy and childbirth",
          },
          {
            id: uuidv4(),
            urls: "/services/primary-care/",
            urlText: "Primary care",
          },
          {
            id: uuidv4(),
            urls: "/services/weight-loss/",
            urlText: "Weight loss",
          },
          {
            id: uuidv4(),
            urls: "/services/",
            urlText: "View all medical services",
            arrowRight: <IconArrowRight />,
          },
        ],
      ],
    },
    {
      id: uuidv4(),
      href: "/health-insurance/",
      linkName: "health-insurance",
      anchorName: "Insurance",
      chevronDown: <IconChevronDown />,
      currentIndex: uuidv4(),
      menuOptions: [
        [
          {
            id: uuidv4(),
            urls: "https://www.sharphealthplan.com/",
            urlText: "Sharp Health Plan",
          },
          {
            id: uuidv4(),
            urls: "/health-insurance/health-insurance-plans.cfm",
            urlText: "Accepted plans",
          },
          {
            id: uuidv4(),
            urls: "/health-insurance/i-need-to-buy-insurance.cfm",
            urlText: "Buying insurance",
          },
          {
            id: uuidv4(),
            urls: "/health-insurance/covered-california.cfm",
            urlText: "Covered California",
          },
        ],
        [
          {
            id: uuidv4(),
            urls: "/health-insurance/employer-based-health-insurance.cfm",
            urlText: "Insurance from your employer",
          },
          {
            id: uuidv4(),
            urls: "/health-insurance/medicare/",
            urlText: "Medicare",
          },
          {
            id: uuidv4(),
            urls: "/health-insurance/medical-groups.cfm",
            urlText: "Choosing a medical group",
          },
        ],
      ],
    },
    {
      id: uuidv4(),
      href: "/health-classes/",
      linkName: "health-classes",
      anchorName: "Classes and Events",
      currentIndex: null,
    },
  ]);

  return (
    <>
      <div
        className={`${componentName} ${
          isOpen ? "open" : ""
        } ${additionalClassName}`}
        data-test-id={componentName}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? isOpenChildren : isClosedChildren}
      </div>
    </>
  );
};

MenuHover.propTypes = {
  /**
   * Add an additional className
   */
  isOpenChildren: node.isRequired,

  /**
   * Add an additional className
   */
  isClosedChildren: node.isRequired,

  /**
   * Add an additional className
   */
  additionalClassName: string,
};

MenuHover.defaultProps = {
  componentName: "menu-hover",
};
