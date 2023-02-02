import CategoriesFilterSideBarDemo1 from "../Category/CategoriesFilterMobile";
import CategoriesFilterDesktop from "../Category/CategoriesFilterDesktop";

const quickLinks = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

export default function Example() {
  return (
    <>
      {/* Mobile filter dialog */}
      <CategoriesFilterSideBarDemo1 filters={filters} quickLinks={quickLinks} />

      <section aria-labelledby="products-heading" className="pt-6 pb-24">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Filters */}
          <CategoriesFilterDesktop filters={filters} quickLinks={quickLinks} />
          {/* Product grid */}
          <div className="lg:col-span-3">
            {/* Replace with your content */}
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" />
            {/* /End replace */}
          </div>
        </div>
      </section>
    </>
  );
}
