import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import RegionList from './RegionList';
import Region from './Region';

import 'react-calendar/dist/Calendar.css'; // css import
import Data from './TicketingData.json';

const TicketingInfo = () => {
  const [value, onChange] = useState(new Date());
  console.log(value.toLocaleDateString());
  return (
    <>
      <CalendarBlock>
        <WrapCalender>
          <Number>STEP1</Number>
          <Title>지역/영화관 선택 </Title>
          <WrapRegionList>
            {Data.region.map((data, index) => (
              <RegionList data={data} key={index} />
            ))}
          </WrapRegionList>
        </WrapCalender>
        <WrapCalender>
          <Number>STEP2</Number>
          <Title>날짜 선택</Title>
          <Calendar onChange={onChange} value={value} />
        </WrapCalender>
        <WrapCalender>
          <Number>STEP3</Number>
          <Title>시간 선택</Title>
          <WrapRegion>
            {Data.time.map((data, index) => (
              <Region data={data} key={index} />
            ))}
          </WrapRegion>
        </WrapCalender>
      </CalendarBlock>
    </>
  );
};

const CalendarBlock = styled.div`
  width: 800px;
  display: flex;
  margin: 50px auto;
  box-shadow: 1px 4px 4px 4px #d3d4d4;
  border-radius: 3px;
`;

const Number = styled.div`
  color: #ec5870;
  font-weight: 600;
  font-size: 17px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0;
`;

const WrapCalender = styled.div`
  display: block;
  margin: 20px auto;
`;

const WrapRegionList = styled.div`
  overflow: scroll;
  height: 280px;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const WrapRegion = styled.div`
  width: 200px;
  background-color: #e9ecf1;
  border-radius: 5px;
  text-align: center;
  width: 98px;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
`;

export default TicketingInfo;
