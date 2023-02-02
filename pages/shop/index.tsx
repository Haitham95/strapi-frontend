import BreadcrumbDemo1 from "../../components/Breadcrumbs/BreadcrumbDemo1";
import CategoriesFilterDesktop from "../../components/Category/CategoriesFilterDesktop";
import CategoriesFilterMobile from "../../components/Category/CategoriesFilterMobile";
import HeaderDemo2 from "../../components/Header/HeaderDemo2";
import Layout from "../../components/Layout";
import ShopLayout from "../../components/Layouts/ShopLayout";
import ProductListDemo1 from "../../components/Product/ProductListDemo1";

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

const Shop = () => (
  <>
    <Layout>
      {/* 
        // 5. Pagination
      */}

      <BreadcrumbDemo1 defaultText="Shop" />
      <HeaderDemo2
        title="New Arrivals"
        description="Thoughtfully designed objects for the workspace, home, and travel."
      />
      <main>
        <CategoriesFilterMobile filters={filters} quickLinks={quickLinks} />
        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <ShopLayout>
            {/* Filters */}
            <CategoriesFilterDesktop
              filters={filters}
              quickLinks={quickLinks}
            />
            {/* Product grid */}

            <ProductListDemo1 />
          </ShopLayout>
        </section>
      </main>
    </Layout>
  </>
);

export default Shop;
