import Link from "next/link";
import Layout from "../components/Layout";
import NavbarDemo1 from "../components/Navbar/NavbarDemo1";
import HeaderDemo1 from "../components/Header/HeaderDemo1";
import CategoriesSectionDemo1 from "../components/Section/CategoriesSectionDemo1";
import PromoSectionDemo1 from "../components/Promo/PromoSectionDemo1";
import ProductSectionDemo1 from "../components/Product/ProductSectionDemo1";
import PromoSectionDemo2 from "../components/Promo/PromoSectionDemo2";
import FooterDemo1 from "../components/Footer/FooterDemo1";
import { products } from "../utils/product/product-section-data";

const IndexPage = () => {
  return (
    <>
      <Layout title="Welcome to site">
        {/* <NavbarDemo1 /> */}
        <HeaderDemo1
          title="Summer styles are finally here"
          description="This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die."
          btnText="Shop Collection"
          btnLink="/shop"
        />
        {/* Top navigation */}

        <main>
          {/* Category section */}
          <CategoriesSectionDemo1
            title="Shop by Category"
            btnText="Browse all categories"
            btnLink="/shop"
          />

          {/* Featured section */}
          <PromoSectionDemo1
            title="Long-term thinking"
            description="We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe."
            btnText="Read our story"
            btnLink="#"
          />

          {/* Favorites section */}
          <ProductSectionDemo1
            title="Our Favorites"
            btnText="Browse all categories"
            btnLink="#"
            products={products}
          />

          {/* CTA section */}
          <PromoSectionDemo2
            title="Final Stock."
            offer="Up to 50% off."
            btnText="Shop the sale"
            btnLink="#"
          />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
