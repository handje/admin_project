import styled from "styled-components";

interface InputProps {
  title: string;
  id: string;
  name: string;
  type?: string;
  correct: boolean;
}

const Input = ({ title, id, name, type, correct }: InputProps) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <CustomInput
        id={id}
        name={name}
        type={type}
        required
        $correct={correct}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 30px;
  font-size: 30px;
`;

const CustomInput = styled.input<{ $correct: boolean }>`
  outline: none;
  width: 300px;
  height: 50px;
  margin-left: 10px;
  padding: 5px;
  font-size: 25px;
  color:${({ theme }) => theme.colors.textColor}
  border: 3px solid
    ${({ $correct, theme }) =>
      $correct ? theme.colors.input.border : theme.colors.warning};
`;
export default Input;
