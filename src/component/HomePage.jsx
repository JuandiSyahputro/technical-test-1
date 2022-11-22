import React from 'react';
import Hero from './Hero/Hero';
import Kolaborasi from './Kolaborasi/Kolaborasi';
import Layout from './Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Kolaborasi />
    </Layout>
  );
};

export default HomePage;
