import { useState } from 'react';

import MovieInfo from './MovieInfo';
import MockupImage from '../../assets/images/mokup_image2.jpeg';
import TicketingInfo from './TicketingInfo';
import SelectBox from './SelectBox';

const Ticketing = () => {
  const [select, setSelect] = useState('');

  const MovieData = {
    title: select,
    age: '15세 이상 관람가',
    star: '4.5',
    image: MockupImage,
  };

  return (
    <>
      <MovieInfo data={MovieData} />
      <SelectBox onSelect={setSelect} select={select} />
      <TicketingInfo select={select} />
    </>
  );
};

export default Ticketing;
