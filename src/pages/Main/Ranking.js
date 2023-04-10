import { useState } from 'react';

import styled from 'styled-components';
import List from './List';

const Ranking = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <WrapTitle>
        <ClickedButton>무비차트</ClickedButton> | 상영예정작
        <List />
      </WrapTitle>
    </>
  );
};

const WrapTitle = styled.div`
  font-size: 23px;
  color: #666;
  font-weight: 400;
  width: 1000px;
  margin: 0 auto;
`;

const ClickedButton = styled.button``;

export default Ranking;
