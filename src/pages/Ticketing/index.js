import MovieInfo from './MovieInfo';

import MockupImage from '../../assets/images/mokup_image2.jpeg';
import TicketingInfo from './TicketingInfo';

const Ticketing = () => {
  const MovieData = {
    title: '슈퍼 마리오 브라더스',
    age: '15세 이상 관람가',
    star: '4.5',
    image: MockupImage,
  };

  return (
    <>
      <MovieInfo data={MovieData} />
      <TicketingInfo />
    </>
  );
};

export default Ticketing;
