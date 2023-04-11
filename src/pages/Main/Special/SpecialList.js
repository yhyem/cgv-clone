import styled from 'styled-components';

import special1 from '../../../assets/images/special1.png';
import special2 from '../../../assets/images/special2.png';
import special3 from '../../../assets/images/special3.png';
import special4 from '../../../assets/images/special4.png';

const SpecialList = () => {
  const SpecialData = [
    { title: 'SUITE CINEMA', image: special1, hastag: '#호텔 컨셉의 프리미어관' },
    { title: 'CINE & LIVINGROOM', image: special2, hastag: '#신개념 소셜 상영관' },
    { title: '4DX', image: special3, hastag: '#모션시트 #오감체험' },
    { title: 'CINE de CHEF', image: special4, hastag: '#쉐프가 있는 영화관' },
  ];
  return (
    <SpecialBlock>
      <Title>특별관</Title>
      <WrapEvent></WrapEvent>
    </SpecialBlock>
  );
};

const SpecialBlock = styled.div`
  width: 1000px;
  margin: auto;
  padding: 50px 0;
  overflow: hidden;
`;

const WrapEvent = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export default SpecialList;
