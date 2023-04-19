import styled from 'styled-components';
import Region from './Region';

const RegionList = props => {
  const { title, content } = props.data;
  return (
    <>
      {title}
      <WrapRegion>
        {content.map((data, index) => (
          <Region data={data} key={index} />
        ))}
      </WrapRegion>
    </>
  );
};

const WrapRegion = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default RegionList;
