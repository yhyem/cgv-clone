import styled from 'styled-components';

const TicketingButton = props => {
  return (
    <TicketingButtonBlock color={props.color} onClick={props.submit}>
      예매하기
    </TicketingButtonBlock>
  );
};

const TicketingButtonBlock = styled.div`
  margin: 50px auto;
  color: white;
  width: 100px;
  background: linear-gradient(45deg, ${props => props.color});
  border-radius: 100px;
  padding: 13px;
  text-align: center;
  font-weight: bold;
  box-shadow: 1px 1px 1px 1px #00000030;
  cursor: pointer;
`;

export default TicketingButton;
