import styled from 'styled-components';

import logoWhite from '../../assets/images/logoWhite.png';
import searchWhite from '../../assets/images/searchWhite.png';

const ScrollBottom = () => {
  return (
    <ScrollBottomBlock>
      <WrapBottomContent>
        <WhiteLogoImg src={logoWhite} />
        <BottomContent>영화</BottomContent>
        <BottomContent>예매</BottomContent>
        <BottomContent>스토어</BottomContent>
        <BottomContent>이벤트</BottomContent>
        <RightBlock>
          <ColumnLine />
          <HeaderInput />
          <SearchImg src={searchWhite} />
          <ColumnLine />
        </RightBlock>
      </WrapBottomContent>
    </ScrollBottomBlock>
  );
};

const ScrollBottomBlock = styled.div`
  width: 100%;
  position: fixed;
  background: linear-gradient(45deg, #d74256, #ef632f);
  top: 0;
`;

const WrapBottomContent = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
  padding: 15px 20px;
`;

const WhiteLogoImg = styled.img`
  width: 65px;
`;

const RightBlock = styled.div`
  margin-left: auto;
  display: flex;
`;

const BottomContent = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-left: 50px;
  color: white;
  line-height: 30px;
`;

const ColumnLine = styled.div`
  width: 1px;
  background-color: #d84b31;
  margin: 0 10px;
`;

const HeaderInput = styled.input`
  font-size: 17px;
  border: none;
  padding: 0 7px;
  background: transparent;
`;

const SearchImg = styled.img`
  margin: auto;
  width: 25px;
`;

export default ScrollBottom;
