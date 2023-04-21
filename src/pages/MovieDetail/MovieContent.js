import styled from 'styled-components';

const MovieContent = props => {
  return <MovieContentBlock>{props.content}</MovieContentBlock>;
};

const MovieContentBlock = styled.div`
  white-space: pre-wrap;
  margin-top: 60px;
  font-size: 13px;
`;

export default MovieContent;
