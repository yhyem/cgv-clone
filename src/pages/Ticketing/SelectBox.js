import styled from 'styled-components';

const SelectBox = props => {
  const Movies = ['슈퍼마리오', '으어어', '으아아아'];

  return (
    <WrapSelectBox>
      <form action="#">
        <SelectBoxBlock
          name="MovieBox"
          id="MovieBox"
          onChange={e => props.onSelect(e.target.value)}
          value={props.select}
        >
          <option value="" hidden>
            영화 선택하기
          </option>
          {Movies.map((data, index) => (
            <option value={data} key={index}>
              {data}
            </option>
          ))}
        </SelectBoxBlock>
      </form>
    </WrapSelectBox>
  );
};

const WrapSelectBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const SelectBoxBlock = styled.select`
  height: 35px;
  width: 180px;
  color: #7a7a7a;
  font-weight: bold;
  background: none;
  border: 1px solid #d8d8d8;
  padding-left: 3px;
`;

export default SelectBox;
