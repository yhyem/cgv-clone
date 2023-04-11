import styled from 'styled-components';
import eggGold from '../../assets/images/eggGold.png';

const Movie = props => {
  const { title, image, percent, rate, rank } = props.data;
  return (
    <MovieBlock>
      <WrapPoster>
        <PosterStyle>
          <RankingFont>{rank}</RankingFont>
          <HoverButton color="#ffffff" font="#848484">
            상세보기
          </HoverButton>
          <HoverButton color="#FB4357" font="#ffffff">
            예매하기
          </HoverButton>
        </PosterStyle>
        <MoviePoster src={image} />
      </WrapPoster>
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

const WrapPoster = styled.div`
  position: relative;
`;

const PosterStyle = styled.div`
  position: absolute;
  width: 170px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 70%, rgba(20, 20, 20, 1) 100%);

  &:hover {
    background: #00000090;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div {
      display: none;
    }

    & > button {
      display: block;
    }
  }
`;

const HoverButton = styled.button`
  margin: 3px auto;
  width: 130px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 2px;
  display: none;
  &:hover {
    opacity: 80%;
  }
`;

const RankingFont = styled.div`
  position: absolute;
  margin-left: 10px;
  bottom: -11px;
  color: white;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
`;

const MoviePoster = styled.img`
  margin-right: 30px;
  width: 170px;
  height: 250px;
  border-radius: 10px;
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
