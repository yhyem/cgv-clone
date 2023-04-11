import { useState } from 'react';

import styled from 'styled-components';
import List from './List';

const Ranking = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RankingBlock>
      <WrapTitle>
        <ClickedButton onClick={() => setIsChecked(false)}>무비차트</ClickedButton>
        <ColumnLine />
        <ClickedButton onClick={() => setIsChecked(true)}>상영예정작</ClickedButton>
      </WrapTitle>
      <List />
    </RankingBlock>
  );
};

const RankingBlock = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ColumnLine = styled.div`
  width: 1px;
  height: 15px;
  margin: 0 5px;
  background: #d8d8d8;
`;

const ClickedButton = styled.button`
  border: none;
  background: none;
  font-size: 25px;
  color: #666;
  font-weight: 400;
  cursor: pointer;
`;

export default Ranking;
