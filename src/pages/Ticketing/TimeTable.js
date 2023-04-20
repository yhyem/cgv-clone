import styled from 'styled-components';

const TimeTable = props => {
  return <WrapRegion>{props.data}</WrapRegion>;
};

const WrapRegion = styled.button`
  display: block;
  width: 150px;
  background-color: #e9ecf1;
  border-radius: 5px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`;

export default TimeTable;
