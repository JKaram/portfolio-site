import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../sections/Nav/Nav";
import Hero from "../sections/Hero/Hero";
import Portfolio from "../sections/Portfolio/Portfolio";

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
