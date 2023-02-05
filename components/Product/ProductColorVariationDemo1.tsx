import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductColorVariationDemo1 = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div>
      <h3 className="text-sm text-gray-600">Color</h3>

      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  color.selectedColor,
                  active && checked ? "ring ring-offset-1" : "",
                  !active && checked ? "ring-2" : "",
                  "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                )
              }
            >
              <RadioGroup.Label as="p" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.bgColor,
                  "h-8 w-8 border border-black border-opacity-10 rounded-full"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ProductColorVariationDemo1;
