import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import FooterDemo1 from "./Footer/FooterDemo1";
import NavbarDemo1 from "./Navbar/NavbarDemo1";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-white">
      <NavbarDemo1 />
      {children}
      <FooterDemo1 />
    </div>
  </div>
);

export default Layout;
