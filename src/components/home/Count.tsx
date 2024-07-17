import styled from "styled-components";

const Count = ({ children }: { children: React.ReactNode }) => {
  return <CountBox>{children}</CountBox>;
};

export default Count;

const CountBox = styled.div`
  width: 45%;
  height: 100px;
  border: 2px solid var(--line-blue-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: x-large;
`;
