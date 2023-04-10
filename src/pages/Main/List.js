import styled from 'styled-components';

import Movie from './Movie';
import mokupImage from '../../assets/images/mokup_image.jpeg';
const List = () => {
  const MovieList = [
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '존 윅 4', image: mokupImage, percent: '99%', rate: '39.5%' },
    { title: '더 퍼스트 슬램덩크', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '스즈메의 문단속', image: mokupImage, percent: '98%', rate: '30.5%' },
    { title: '옥수역귀신', image: mokupImage, percent: '98%', rate: '30.5%' },
  ];
  return (
    <WrapList>
      {MovieList.map((data, index) => (
        <Movie key={index} data={data} />
      ))}
    </WrapList>
  );
};

const WrapList = styled.div`
  display: flex;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export default List;
