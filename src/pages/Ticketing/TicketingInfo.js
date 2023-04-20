import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import RegionList from './RegionList';

import 'react-calendar/dist/Calendar.css'; // css import
import Data from './TicketingData.json';
import TimeTable from './TimeTable';

const TicketingInfo = () => {
  const [value, onChange] = useState(new Date());
  console.log(value.toLocaleDateString());
  return (
    <>
      <CalendarBlock>
        <WrapSelection>
          <Number>STEP1</Number>
          <Title>지역/영화관 선택 </Title>
          <WrapRegionList>
            {Data.region.map((data, index) => (
              <RegionList data={data} key={index} />
            ))}
          </WrapRegionList>
        </WrapSelection>
        <WrapCalender>
          <Number>STEP2</Number>
          <Title>날짜 선택</Title>
          <Calendar onChange={onChange} value={value} />
        </WrapCalender>
        <WrapSelection>
          <Number>STEP3</Number>
          <Title>시간 선택</Title>
          <LineBlock />
          {Data.time.map((data, index) => (
            <TimeTable data={data} key={index} />
          ))}
        </WrapSelection>
      </CalendarBlock>
    </>
  );
};

const CalendarBlock = styled.div`
  width: 900px;
  display: flex;
  margin: 50px auto;
  box-shadow: 1px 4px 4px 4px #d3d4d4;
  border-radius: 3px;
`;

const WrapSelection = styled.div`
  display: block;
  padding: 30px;
  background: #f2f7f7;
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

  .react-calendar {
    border: none;
  }
`;

const WrapRegionList = styled.div`
  overflow: scroll;
  height: 280px;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const LineBlock = styled.div`
  height: 1px;
  background: #e9ecf0;
  margin: 15px 0;
`;

export default TicketingInfo;
