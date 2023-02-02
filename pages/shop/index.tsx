import BreadcrumbDemo1 from "../../components/Breadcrumbs/BreadcrumbDemo1";
import HeaderDemo2 from "../../components/Header/HeaderDemo2";
import Layout from "../../components/Layout";
import ShopLayout from "../../components/Layouts/ShopLayout";

const Shop = () => (
  <>
    <Layout>
      {/* 
        // 1. Indicator of where we are we in the shop
        // 2. Header 
        // 3. Sidebar for filtering
        // 4. Products area
        // 5. Pagination
      */}

      <BreadcrumbDemo1 defaultText="Shop" />
      <HeaderDemo2
        title="New Arrivals"
        description="Thoughtfully designed objects for the workspace, home, and travel."
      />
      <main>
        <ShopLayout />
      </main>
    </Layout>
  </>
);

export default Shop;
