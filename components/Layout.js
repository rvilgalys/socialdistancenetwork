import Head from "next/head";

const Layout = ({ children, includeFooter = true }) => (
  <>
    <Head>
      <title>🌎Social 🌍Distance 🌏Network</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,700|Space+Mono&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    {children}
  </>
);

export default Layout;
