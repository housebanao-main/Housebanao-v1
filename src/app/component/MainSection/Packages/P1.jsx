"use client";

import React, { useState } from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Construction starts from ₹990/sq.ft",
      items: ["Ground + 1", "Ground + 1 + 2", "Ground + 1 + 2 + 3", "Ground + 1 + 2 + 3 + 4"],
      details: ["Basic level construction with essential amenities.", "Ideal for small families or temporary setups.", "Includes basic electrical and plumbing work.", "Foundation ready for future vertical expansion."]
    },
    {
      id: 2,
      title: "Construction + interior starts from ₹1499/sq.ft",
      items: [
        "Designs and drawings",
        "Structure",
        "Kitchen",
        "Bathroom",
        "Doors and windows",
        "Painting",
        "Flooring",
        "Electrical",
        "Miscellaneous",
      ],
      details: {
        "Designs and drawings": [
            "Architectural Layout in 2D Format, including detailed Floor plans",
            "Structural Drawings with Foundation, Beams & Column Details.",
            "Electrical Drawings, Plumbing Drawings.",
            "Building Elevation plan, designed as per your choice with options."
          ],
          "Structure": [
            "Preparation of floors with brick bat filling where required.",
            "Excavation, back-filling, ramming, watering & compacting as per architect recommendations.",
            "Vibrator and Hammer used for proper mixing and smoothing."
          ],
          "Kitchen": [
            "Wall tiles 2 ft height above slab up to Rs. 40 psf.",
            "One Main sink mixer faucet up to Rs. 1200/-. Any other faucets or connectors or accessories - ISI marked.",
            "One Single sink Stainless Steel up to Rs. 3000/-.",
            "Kitchen Cabinets with high gloss lamination."
          ],
          "Bathroom": [
            "Wall tiles of 2x2 ft up to 7’ height up to Rs. 40 psf.",
            "Sanitary ware, CP, Shower, Mixer, Washbasin, fittings up to Rs. 30,000/- per bathroom.",
            "CPVC Pipelines used - Astral or equivalent.",
            "Doors - Flush doors of 30mm with Laminates and Handles, Lock/Latch, door-stopper fittings.",
            "One Geyser 15 Litres up to Rs. 8000/- per bathroom."
          ],
          "Doors and windows": [
            "Main Door - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, stoppers, Magic eye/Peephole wide angle lens, Chain lock and tall chitkani, all ISI mark.",
            "Main door lock up to Rs. 2500/- internal door locks up to 1200/-.",
            "Internal Doors - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, Door stoppers.",
            "External/Balcony doors of UPVC with Fixed and sliding portions, with mosquito mesh included for bedrooms and drawing room where applicable as per architect design."
          ],
          "Painting": [
            "Interior Paint - JK Putty + Tractor Emulsion or equivalent.",
            "Exterior Paint - Asian Primer + Asian exterior paint.",
            "Enamel Paint work on all MS railings."
          ],
          "Flooring": [
            "Drawing / Dining Room area Bedrooms - Vitrified tiles up to Rs. 50 psf.",
            "Kitchen Floor - Vitrified tiles up to Rs. 50 psf.",
            "Balconies and Open areas including terrace - Anti Skid tiles up to Rs. 40 psf.",
            "Stilt Parking area - Granite up to Rs. 70 psf."
          ],
          "Electrical": [
            "Wires - Fire resistant wires by Finolex, Havells or equivalent.",
            "Switches and Sockets by Anchor or North West or equivalent.",
            "Branded ceiling lights up to Rs. 250 each up to 8 lights per bedroom.",
            "Branded ceiling lights up to Rs. 250 each up to 14 lights for drawing room."
          ],
          "Miscellaneous": [
            "Double layer overhead water tanks of Sintex of 1000 litres per dwelling unit.",
            "Underground water storage of 2000 liters per dwelling unit.",
            "1 water motor per floor of Crompton brand.",
            "Drainage connection up to 10 ft from the plot included."
          ]
      }
    },
    {
      id: 3,
      title: "Interior starts from ₹1100/sq.ft",
      items: [
        "Designs and drawings",
        "Structure",
        "Kitchen",
        "Bathroom",
        "Doors and windows",
        "Painting",
        "Flooring",
        "Electrical",
        "Miscellaneous",
      ],
      details: {
        "Designs and drawings": [
            "Architectural Layout in 2D Format, including detailed Floor plans",
            "Structural Drawings with Foundation, Beams & Column Details.",
            "Electrical Drawings, Plumbing Drawings.",
            "Building Elevation plan, designed as per your choice with options."
          ],
          "Structure": [
            "Preparation of floors with brick bat filling where required.",
            "Excavation, back-filling, ramming, watering & compacting as per architect recommendations.",
            "Vibrator and Hammer used for proper mixing and smoothing."
          ],
          "Kitchen": [
            "Wall tiles 2 ft height above slab up to Rs. 40 psf.",
            "One Main sink mixer faucet up to Rs. 1200/-. Any other faucets or connectors or accessories - ISI marked.",
            "One Single sink Stainless Steel up to Rs. 3000/-.",
            "Kitchen Cabinets with high gloss lamination."
          ],
          "Bathroom": [
            "Wall tiles of 2x2 ft up to 7’ height up to Rs. 40 psf.",
            "Sanitary ware, CP, Shower, Mixer, Washbasin, fittings up to Rs. 30,000/- per bathroom.",
            "CPVC Pipelines used - Astral or equivalent.",
            "Doors - Flush doors of 30mm with Laminates and Handles, Lock/Latch, door-stopper fittings.",
            "One Geyser 15 Litres up to Rs. 8000/- per bathroom."
          ],
          "Doors and windows": [
            "Main Door - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, stoppers, Magic eye/Peephole wide angle lens, Chain lock and tall chitkani, all ISI mark.",
            "Main door lock up to Rs. 2500/- internal door locks up to 1200/-.",
            "Internal Doors - Flush door of 30 mm, up to 8’ ft height, with Laminate up to 1000/- psf with Locks, hinges, Door stoppers.",
            "External/Balcony doors of UPVC with Fixed and sliding portions, with mosquito mesh included for bedrooms and drawing room where applicable as per architect design."
          ],
          "Painting": [
            "Interior Paint - JK Putty + Tractor Emulsion or equivalent.",
            "Exterior Paint - Asian Primer + Asian exterior paint.",
            "Enamel Paint work on all MS railings."
          ],
          "Flooring": [
            "Drawing / Dining Room area Bedrooms - Vitrified tiles up to Rs. 50 psf.",
            "Kitchen Floor - Vitrified tiles up to Rs. 50 psf.",
            "Balconies and Open areas including terrace - Anti Skid tiles up to Rs. 40 psf.",
            "Stilt Parking area - Granite up to Rs. 70 psf."
          ],
          "Electrical": [
            "Wires - Fire resistant wires by Finolex, Havells or equivalent.",
            "Switches and Sockets by Anchor or North West or equivalent.",
            "Branded ceiling lights up to Rs. 250 each up to 8 lights per bedroom.",
            "Branded ceiling lights up to Rs. 250 each up to 14 lights for drawing room."
          ],
          "Miscellaneous": [
            "Double layer overhead water tanks of Sintex of 1000 litres per dwelling unit.",
            "Underground water storage of 2000 liters per dwelling unit.",
            "1 water motor per floor of Crompton brand.",
            "Drainage connection up to 10 ft from the plot included."
          ]
      }
    },
  ];

  const [expandedPackage, setExpandedPackage] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (packageId, item) => {
    const isCurrentlyExpanded = expandedPackage === packageId && expandedItem === item;
    setExpandedPackage(isCurrentlyExpanded ? null : packageId);
    setExpandedItem(isCurrentlyExpanded ? null : item);
  };

  const getIcon = (packageId, item) => {
    const isExpanded = expandedPackage === packageId && expandedItem === item;
    return isExpanded ? faMinus : faPlus;
  };

  return (
    <section className="flex flex-col items-center mt-8 font-poppins">
      <CommonHeading className="text-[25px] font-extrabold mt-[5px]">Packages</CommonHeading>
      <SubHeading className="text-center mt-[7px]">Find the best home construction packages</SubHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-[1290px]">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border-2 border-brown rounded-md h-auto flex flex-col items-center justify-between w-full md:w-[400px]">
            <div className="bg-brown rounded-t-md w-full p-5">
              <h1 className="text-white text-[15px]">{pkg.title}</h1>
            </div>
            <div className="bg-white w-full p-5 flex flex-col items-start flex-grow text-[#575757]">
              {pkg.items.map((item, index) => (
                <div key={item} className="w-full flex justify-between items-center mb-4">
                  <span onClick={() => handleItemClick(pkg.id, item)} className="cursor-pointer">{item}</span>
                  <FontAwesomeIcon icon={getIcon(pkg.id, item)} className="cursor-pointer" onClick={() => handleItemClick(pkg.id, item)} />
                </div>
              ))}
              {expandedPackage === pkg.id && expandedItem && (
                <div className="text-sm mt-2 text-gray-600 pl-4 list-disc">
                  {Array.isArray(pkg.details[expandedItem]) ?
                    pkg.details[expandedItem].map((detail, idx) => <li key={idx}>{detail}</li>) :
                    <li>{pkg.details[expandedItem]}</li>
                  }
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-center justify-center text-[#575757]">
              <p className="text-center mb-auto p-5">
                View More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs text-[#575757]" />
              </p>
              <button className="hidden lg:flex w-fit h-[40px] rounded-[88px] border-[0.5px] p-[14px] justify-between items-center bg-brown mb-4">
                <span className="font-medium text-regular bg-brown text-white">Book Consultation now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[20px] bg-white"></div>
    </section>
  );
};
