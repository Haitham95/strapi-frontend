import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import ProductSliderDemo1 from "./ProductSliderDemo1";
import ProductColorVariationDemo1 from "./ProductColorVariationDemo1";
import ProductDetailsDemo1 from "./ProductDetailsDemo1";
import ProductDescriptionDemo1 from "./ProductDescriptionDemo1";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverviewDemo1({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
      {/* Image gallery */}
      <ProductSliderDemo1 images={product.images} />

      {/* Product info */}
      <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          {product.name}
        </h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">{product.price}</p>
        </div>

        {/* Reviews */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating
                      ? "text-indigo-500"
                      : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
          </div>
        </div>

        <ProductDescriptionDemo1 description={product.description} />

        <form className="mt-6">
          {/* Colors */}
          <ProductColorVariationDemo1
            colors={product.colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <div className="mt-10 flex sm:flex-col1">
            <button
              type="submit"
              className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
            >
              Add to bag
            </button>

            <button
              type="button"
              className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </form>

        <ProductDetailsDemo1 details={product.details} />
      </div>
    </div>
  );
}
