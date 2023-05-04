import { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import RegionList from './RegionList';

import 'react-calendar/dist/Calendar.css'; // css import
import Data from './TicketingData.json';
import TimeTable from './TimeTable';

const TicketingInfo = props => {
  const [region, setRegion] = useState('');
  const [value, onChange] = useState('');
  const [timeline, setTimeline] = useState('');

  const clickOption = () => {
    props.onSetTicket({
      region: region,
      time: value,
      timeline: timeline,
    });
  };

  //console.log(value.toLocaleDateString());

  return (
    <>
      <CalendarBlock>
        <WrapSelection>
          <Number>STEP1</Number>
          <Title>지역/영화관 선택 </Title>
          <WrapRegionList>
            {props.select.title !== '영화를 선택해주세요.' ? (
              Data.region.map((data, index) => (
                <RegionList data={data} key={index} select={setRegion} region={region} />
              ))
            ) : (
              <DateSelect>🎬 영화를 먼저 선택해주세요.</DateSelect>
            )}
          </WrapRegionList>
        </WrapSelection>
        <WrapCalender>
          <Number>STEP2</Number>
          <Title>날짜 선택</Title>
          {region ? (
            <Calendar onChange={onChange} value={value} />
          ) : (
            <FirstSelect>🍿 영화관을 먼저 선택해주세요.</FirstSelect>
          )}
        </WrapCalender>
        <WrapSelection>
          <Number>STEP3</Number>
          <Title>시간 선택</Title>
          {value ? (
            <>
              <LineBlock />
              {Data.time.map((data, index) => (
                <TimeTable data={data} key={index} timeline={timeline} select={setTimeline} />
              ))}
            </>
          ) : (
            <DateSelect>📌 날짜를 먼저 선택해주세요.</DateSelect>
          )}
        </WrapSelection>
      </CalendarBlock>
    </>
  );
};

const CalendarBlock = styled.div`
  width: 930px;
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
  padding: 30px;

  .react-calendar {
    border: none;
  }
`;

const FirstSelect = styled.div`
  text-align: center;
  width: 350px;
  font-weight: bold;
  font-size: 15px;
  line-height: 250px;
`;

const DateSelect = styled.div`
  text-align: center;
  width: 200px;
  font-weight: bold;
  font-size: 15px;
  line-height: 250px;
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
