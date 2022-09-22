import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../sections/Nav/Nav";
import Hero from "../sections/Hero/Hero";
import Portfolio from "../sections/Portfolio/Portfolio";
import { getGithubRepo } from "../util/api";

const Home: NextPage = (props: any) => {
  const { github } = props;
  return (
    <div>
      <Head>
        <title>Jamie Karam</title>
        <meta name="description" content="Jamie Karam Web Developer Porfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero github={github} />
      <Portfolio />
    </div>
  );
};

export async function getStaticProps() {
  const github = await getGithubRepo();
  return {
    props: {
      github,
    },
  };
}

export default Home;
