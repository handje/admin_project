import styled from "styled-components";

interface InputProps {
  title: string;
  id: string;
  name: string;
  type?: string;
}
const Input = ({ title, id, name, type }: InputProps) => {
  return (
    <CustomInput>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type={type} required />
    </CustomInput>
  );
};

const CustomInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30px;
  font-size: 30px;
  & > input {
    outline: none;
    width: 300px;
    height: 50px;
    margin-left: 10px;
    padding: 5px;
    border: 3px solid var(--line-blue-color);
    font-size: 25px;
  }
`;

export default Input;
