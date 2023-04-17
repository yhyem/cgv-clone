import styled from 'styled-components';
import eggGold from '../../assets/images/eggGold.png';

const Movie = props => {
  const { title, image, percent, rate, rank, date } = props.data;
  return (
    <MovieBlock>
      <RankBlock color={rank > 3 ? '#333333' : '#fa4357'}>No.{rank}</RankBlock>
      <WrapPoster>
        <PosterStyle />
        <MoviePoster src={image} />
      </WrapPoster>
      <MovieTitle> {title}</MovieTitle>
      <WrapMovieContent>
        예매율 {rate}
        <ContentImage src={eggGold} />
        {percent}
        <br />
        {date} 개봉
      </WrapMovieContent>
      <HoverButton color="#FB4357" font="#ffffff">
        예매하기
      </HoverButton>
    </MovieBlock>
  );
};
const MovieBlock = styled.div`
  display: block;
  margin-bottom: 50px;
`;

const RankBlock = styled.div`
  background: ${props => props.color};
  color: white;
  text-align: center;
  width: 190px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;

const WrapPoster = styled.div`
  position: relative;
`;

const PosterStyle = styled.div`
  position: absolute;
  width: 190px;
  height: 250px;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 70%, rgba(20, 20, 20, 1) 100%);
`;

const MoviePoster = styled.img`
  margin-right: 60px;
  width: 190px;
  height: 250px;
`;

const MovieTitle = styled.div`
  margin-top: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const WrapMovieContent = styled.div`
  font-size: 14px;
  color: #444;
  margin: 9px auto 0 auto;
`;

const ContentImage = styled.img`
  width: 20px;
  margin-right: 3px;
`;

const HoverButton = styled.button`
  margin: 3px auto;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 2px;
  margin-top: 10px;
`;

export default Movie;
