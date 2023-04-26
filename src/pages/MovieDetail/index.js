import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieInfo from './MovieInfo';
import MovieContent from './MovieContent';
import { useParams } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`);
        console.log(response);
        setMovie(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);
  console.log(movie);

  return (
    <>
      <WrapMovieDetail>
        <MovieInfo info={movie} />
        <MovieContent info={movie} />
      </WrapMovieDetail>
    </>
  );
};

const WrapMovieDetail = styled.div`
  width: 1000px;
  margin: 30px auto;
`;

export default MovieDetail;
