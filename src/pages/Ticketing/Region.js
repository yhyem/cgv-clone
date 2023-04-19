import styled from 'styled-components';

const Region = props => {
  return <WrapRegion>{props.data}</WrapRegion>;
};

const WrapRegion = styled.div`
  background-color: #e9ecf1;
  border-radius: 5px;
  text-align: center;
  width: 98px;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
`;

export default Region;
