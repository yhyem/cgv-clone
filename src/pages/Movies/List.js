import styled from 'styled-components';

import Movie from './Movie.js';
import mokupImage from '../../assets/images/mokup_image.jpeg';
const List = () => {
  const MovieList = [
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 1, date: '2023.03.08' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 2, date: '2023.03.08' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 3, date: '2023.03.08' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 4, date: '2023.03.08' },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 5, date: '2023.03.08' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 6, date: '2023.03.08' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 7, date: '2023.03.08' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 8, date: '2023.03.08' },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 9, date: '2023.03.08' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 10, date: '2023.03.08' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 11, date: '2023.03.08' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 12, date: '2023.03.08' },
  ];
  return (
    <>
      <WrapMovieList>
        <Title>무비차트</Title>
        <BlackLine />
        <WrapList>
          {MovieList.map((data, index) => (
            <Movie key={index} data={data} />
          ))}
        </WrapList>
      </WrapMovieList>
    </>
  );
};

const WrapMovieList = styled.div`
  width: 1000px;
  margin: 30px auto;
`;
const WrapList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const BlackLine = styled.div`
  height: 3px;
  background: #000000;
  margin: 20px 0;
`;

export default List;
