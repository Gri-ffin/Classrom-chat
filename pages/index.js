import { Fragment } from 'react';
import { SectionOne } from '../components/IndexPage/SectionOne';
import Head from 'next/head';
import { SectionTwo } from '../components/IndexPage/SectionTwo';
import { SectionThree } from '../components/IndexPage/SectionThree';
import { SectionFour } from '../components/IndexPage/SectionFour';
import { SectionFive } from '../components/IndexPage/SectionFive';
import { Footer } from '../components/IndexPage/Footer';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Discord | Your place to talk and hang out</title>
        <meta
          name='description'
          content='discord | your place to talk and hang out'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </Fragment>
  );
}
