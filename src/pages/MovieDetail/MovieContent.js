import styled from 'styled-components';
import AD1 from '../../assets/images/ad1.png';
import AD2 from '../../assets/images/ad2.png';
import AD3 from '../../assets/images/ad3.png';
import StillCut from './StillCut';

const MovieContent = props => {
  const { overview } = props.info;
  return (
    <MovieContentBlock>
      <WrapContent>
        <Content>{overview}</Content>
        <CenterImageBlock src={AD3} alt="AD3" />
        <Title>트레일러</Title>
        <Title>스틸컷</Title>
        <WrapStillCut>
          <StillCut stillCut={props.stillCut} />
        </WrapStillCut>
      </WrapContent>
      {/* <SideImageBlock>
        <SideImage src={AD1} alt="AD1" />
        <SideImage src={AD2} alt="AD2" />
      </SideImageBlock> */}
    </MovieContentBlock>
  );
};

const MovieContentBlock = styled.div``;

const WrapContent = styled.div``;

const Content = styled.div`
  white-space: pre-wrap;
  font-size: 13px;
  width: 600px;
`;

const Title = styled.div`
  background-color: #f6f6f6;
  height: 39px;
  float: left;
  padding-left: 16px;
  line-height: 39px;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
`;

const WrapStillCut = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const CenterImageBlock = styled.img`
  margin-top: 30px;
  width: 100%;
`;

const SideImageBlock = styled.div`
  display: block;
  margin-left: auto;
  width: 150px;
`;

const SideImage = styled.img`
  width: 150px;
`;

export default MovieContent;
