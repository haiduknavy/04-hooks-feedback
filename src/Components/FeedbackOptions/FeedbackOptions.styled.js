import styled from "@emotion/styled";

export const Btn = styled.button`
  padding: 5px 10px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 15px;
  border: 1px solid silver;
  :hover {
    background-color: #3240bd;
    color: #fff;
  }
`;

export const FeedbackList = styled.ul`
  list-style: none;
  display: flex;
`;

export const FeedbacItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
