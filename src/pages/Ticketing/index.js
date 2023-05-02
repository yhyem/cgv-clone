import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MovieInfo from './MovieInfo';
import MockupImage from '../../assets/images/noImg.jpg';
import TicketingInfo from './TicketingInfo';
import SelectBox from './SelectBox';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Ticketing = () => {
  const [select, setSelect] = useState({ title: '영화를 선택해주세요.', image: MockupImage, average: '' });

  const location = useLocation();
  console.log(location);
  const selectedMovie = location.state;

  const MovieData = {
    title: selectedMovie ? selectedMovie.title : select.title,
    image: selectedMovie ? IMAGE_URL + selectedMovie.poster_path : select.image,
    average: selectedMovie ? selectedMovie.vote_average : select.average,
    origin: selectedMovie ? selectedMovie.original_title : select.origin,
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
