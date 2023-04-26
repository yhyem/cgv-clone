import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Movie from './Movie';
import mokupImage from '../../../assets/images/mokup_image.jpeg';

const apiKey = process.env.REACT_APP_API_KEY;

const List = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.select}?api_key=${apiKey}&language=ko-KR`,
        );
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [props.select]);

  const MovieList = [
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 1 },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 2 },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 3 },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 4 },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 5 },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 6 },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 7 },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 8 },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%', rank: 9 },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%', rank: 10 },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%', rank: 11 },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%', rank: 12 },
  ];
  return (
    <WrapList>
      {movies.map((data, index) => (
        <Movie key={index} data={data} index={index} check={props.check} />
      ))}
    </WrapList>
  );
};

const WrapList = styled.div`
  display: flex;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export default List;
