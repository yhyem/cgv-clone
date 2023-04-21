import styled from 'styled-components';

const MovieInfo = props => {
  const { title, image, subtitle, rate, percent, director, actor, genre, basic, date } = props.info;
  return (
    <>
      <WrapInfoBlock>
        <MoviePoster src={image} />
        <WrapInfo>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <RateBlock>
            예매율<TicketRate>{rate}</TicketRate>
            <ColumnBlock />
            <TicketRate>{percent}</TicketRate>
          </RateBlock>
          <LineBlock />
          <WrapContent>
            감독 : {director} / 배우 : {actor}
            <br />
            장르 : {genre} / 기본 : {basic}
            <br />
            개봉 : {date}
          </WrapContent>{' '}
          <ButtonBlock color="#ffffff" font="#000000" border="#000000">
            프리에그
          </ButtonBlock>
          <ButtonBlock color="#FB4357" font="#ffffff" border="#FB4357">
            예매하기
          </ButtonBlock>
        </WrapInfo>
      </WrapInfoBlock>
    </>
  );
};

const Title = styled.div`
  font-weight: bold;
  font-size: 23px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #666666;
`;

const RateBlock = styled.div`
  display: flex;
  margin: 20px 0 8px 0;
  font-size: 14px;
`;

const ColumnBlock = styled.div`
  width: 1px;
  height: 13px;
  background-color: #e4e4e4;
  margin: auto 5px;
`;

const TicketRate = styled.div`
  font-size: 13px;
  margin-left: 5px;
`;

const LineBlock = styled.div`
  height: 1px;
  background-color: #e4e4e4;
`;

const WrapContent = styled.div`
  font-size: 13px;
  margin: 15px 0;
  line-height: 20px;
  font-weight: 600;
`;

const WrapInfoBlock = styled.div`
  display: flex;
`;

const WrapInfo = styled.div`
  display: block;
  margin: 0 30px;
`;

const MoviePoster = styled.img`
  width: 170px;
`;

const ButtonBlock = styled.button`
  margin-right: 3px;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: 1px solid ${props => props.border};
  border-radius: 2px;
  margin-top: 10px;
`;

export default MovieInfo;
