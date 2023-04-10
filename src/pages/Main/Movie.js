import styled from 'styled-components';
import eggGold from '../../assets/images/eggGold.png';

const Movie = props => {
  const { title, image, percent, rate } = props.data;
  return (
    <MovieBlock>
      <MoviePoster src={image} />
      <MovieTitle> {title}</MovieTitle>
      <WrapMovieContent>
        <MovieLeftContent>
          <ContentImage src={eggGold} />
          {percent}
        </MovieLeftContent>
        <MovieRightContent>{rate}</MovieRightContent>
      </WrapMovieContent>
    </MovieBlock>
  );
};
const MovieBlock = styled.div`
  display: block;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 150px;
  height: 230px;
  background: white;
  border-radius: 10px;
`;

const MovieTitle = styled.div`
  margin-top: 14px;
  font-size: 18px;
  color: #222;
`;

const WrapMovieContent = styled.div`
  font-size: 14px;
  color: #444;
  width: 100px;
  margin: 9px auto 0 auto;
`;
const ContentImage = styled.img`
  width: 12px;
  margin-right: 3px;
`;
const MovieLeftContent = styled.div`
  float: left;
`;

const MovieRightContent = styled.div`
  float: right;
`;

export default Movie;
