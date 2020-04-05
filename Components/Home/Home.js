import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Body testID='body' />
    </React.Fragment>
  );
};

export default Home;