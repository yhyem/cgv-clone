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
      <WrapHeaderTop>
        <HeaderTop>
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
        </HeaderTop>
      </WrapHeaderTop>
      <LineBlock />
    </>
  );
};

const WrapHeaderTop = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const HeaderTop = styled.div`
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

export default Header;
