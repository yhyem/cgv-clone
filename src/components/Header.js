import styled from 'styled-components';
import logoRed from '../assets/images/logoRed.png';
import logoWhite from '../assets/images/logoWhite.png';
import loginJoin from '../assets/images/loginJoin.png';
import loginMember from '../assets/images/loginMember.png';
import loginPassword from '../assets/images/loginPassword.png';
import loginCustomer from '../assets/images/loginCustomer.png';

const Header = () => {
  return (
    <>
      <WrapHeaderBlock>
        <HeaderBlock>
          <LogoImg src={logoRed} />
          <Title>C U L T U R E P L E X</Title>
          <RightBlock>
            <WrapHeaderImg>
              <HeaderImg src={loginPassword} />
              <HeaderContent>로그인</HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginJoin} />
              <HeaderContent>회원가입</HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginMember} />
              <HeaderContent>MY CGV</HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginCustomer} />
              <HeaderContent>고객센터</HeaderContent>
            </WrapHeaderImg>
          </RightBlock>
        </HeaderBlock>
      </WrapHeaderBlock>
      <LineBlock />
      <WrapHeaderBottomBlock>
        <HeaderBlock>
          <BottomContent>영화</BottomContent>
          <BottomContent>예매</BottomContent>
          <BottomContent>스토어</BottomContent>
          <BottomContent>이벤트</BottomContent>
        </HeaderBlock>
      </WrapHeaderBottomBlock>
      <RedLineBlock />
    </>
  );
};

const WrapHeaderBlock = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const WrapHeaderBottomBlock = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: center;
`;

const HeaderBlock = styled.div`
  width: 1200px;
  display: flex;
`;

const Title = styled.div`
  color: #757575;
  margin-top: 38px;
`;

const LogoImg = styled.img`
  height: 53px;
`;

const RightBlock = styled.div`
  margin-left: auto;
  display: flex;
`;

const WrapHeaderImg = styled.div`
  margin-left: 44px;
  margin-top: 2px;
  text-align: center;
`;

const HeaderImg = styled.img`
  margin: auto;
  width: 33px;
`;

const HeaderContent = styled.div`
  font-size: 15px;
  color: #757575;
`;

const LineBlock = styled.div`
  height: 1px;
  background-color: #eeeeee;
`;

const BottomContent = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-right: 50px;
`;

const RedLineBlock = styled.div`
  height: 2px;
  background-color: #fa4357;
`;

export default Header;
