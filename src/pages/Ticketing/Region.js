import styled from 'styled-components';

const Region = props => {
  return <WrapRegion>{props.data}</WrapRegion>;
};

const WrapRegion = styled.button`
  margin: 2px;
  background-color: #e9ecf1;
  border: none;
  border-radius: 5px;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;

  &:hover {
    opacity: 0.6;
  }
`;

export default Region;
