import type { NextPage } from "next";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jamie Karam</title>
        <meta name="description" content="Jamie Karam Web Developer Porfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Portfolio />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
