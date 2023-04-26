import styled from 'styled-components';

const MovieContent = props => {
  const { overview } = props.info;
  return <MovieContentBlock>{overview}</MovieContentBlock>;
};

const MovieContentBlock = styled.div`
  white-space: pre-wrap;
  margin-top: 60px;
  font-size: 13px;
  width: 500px;
`;

export default MovieContent;
