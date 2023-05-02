import { useState } from 'react';

import MovieInfo from './MovieInfo';
import MockupImage from '../../assets/images/noImg.jpg';
import TicketingInfo from './TicketingInfo';
import SelectBox from './SelectBox';

const Ticketing = () => {
  const [select, setSelect] = useState({ title: '영화를 선택해주세요.', image: MockupImage, average: '' });

  const MovieData = {
    title: select.title,
    image: select.image,
    average: select.average,
    origin: select.origin,
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
