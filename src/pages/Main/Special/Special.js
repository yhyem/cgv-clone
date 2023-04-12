import styled from 'styled-components';

const Special = props => {
  const { title, hashtag } = props.data;
  return (
    <>
      <WrapContent>
        <Title>{title}</Title>
        <HashTag>{hashtag}</HashTag>
      </WrapContent>
    </>
  );
};

const WrapContent = styled.div`
  display: flex;
  width: 450px;
  height: 70px;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 16px;
  line-height: 35px;
`;

const HashTag = styled.div`
  height: 35px;
  margin-left: auto;
  margin-right: 30px;
  font-size: 14px;
  color: #676767;
  font-weight: bold;
  background: #f6f6f6;
  border-radius: 10px;
  margin-top: 16px;
  line-height: 35px;
  padding: 0 7px;
`;

export default Special;
