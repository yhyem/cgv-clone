import { useState } from 'react';

import Banner from './Banner';
import Ranking from './Ranking';
import EventList from './EventList';

const Main = () => {
  return (
    <>
      <Banner />
      <Ranking />
      <EventList />
    </>
  );
};

export default Main;
