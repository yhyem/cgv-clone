import styled from 'styled-components';
import MovieInfo from './MovieInfo';
import MovieContent from './MovieContent';
import MockupImage from '../../assets/images/mokup_image2.jpeg';

const MovieDetail = () => {
  const MovieData = {
    title: '슈퍼 마리오 브라더스',
    subtitle: 'The Super Mario Bros. Movie',
    image: MockupImage,
    rate: '21.5%',
    percent: '99%',
    director: '아론 호바스 ,  마이클 제레닉',
    actor:
      '크리스 프랫 ,  안야 테일러 조이 ,  잭 블랙 ,  세스 로건 ,  찰리 데이 ,  키건 마이클 키 ,  프레드 아미센 ,  세바스찬 매니스캘코 ,  찰스 마티넷 ,  케빈 마이클 리처드슨',
    genre: '애니메이션, 코미디',
    basic: 'All, 92분, 미국',
    date: '2023.04.26',
    content:
      "따단-딴-따단-딴 ?\n전 세계를 열광시킬 올 타임 슈퍼 어드벤처의 등장!\n\n뉴욕의 평범한 배관공 형제 '마리오'와 ‘루이지’는\n배수관 고장으로 위기에 빠진 도시를 구하려다\n 미스터리한 초록색 파이프 안으로 빨려 들어가게 된다.\n\n파이프를 통해 새로운 세상으로 차원 이동하게 된 형제.\n형 '마리오'는 뛰어난 리더십을 지닌 '피치'가 통치하는 버섯왕국에 도착하지만\n동생 '루이지'는 빌런 '쿠파'가 있는 다크랜드로 떨어지며 납치를 당하고\n‘마리오’는 동생을 구하기 위해 ‘피치’와 ‘키노피오’의 도움을 받아 '쿠파'에 맞서기로 결심한다.\n\n그러나 슈퍼스타로 세상을 지배하려는 그의 강력한 힘 앞에\n이들은 예기치 못한 위험에 빠지게 되는데...!\n\n동생을 구하기 위해! 세상을 지키기 위해!\n'슈퍼 마리오'로 레벨업 하기 위한 '마리오'의 스펙터클한 스테이지가 시작된다!",
  };
  return (
    <>
      <WrapMovieDetail>
        <MovieInfo info={MovieData} />
        <MovieContent content={MovieData.content} />
      </WrapMovieDetail>
    </>
  );
};

const WrapMovieDetail = styled.div`
  width: 1000px;
  margin: 30px auto;
`;

export default MovieDetail;
