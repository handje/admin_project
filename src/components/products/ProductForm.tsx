import { Form } from "react-router-dom";
import { styled } from "styled-components";

import { Product } from "../../util/interfaces";
import { Page } from "../common";
import FormInput from "./FormInput";

const allCategory = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const ProductForm = ({ product }: { product?: Product }) => {
  return (
    <Page id={product?.id}>
      <StyledForm>
        <FormInput
          id="name"
          name="name"
          type="text"
          defaultValue={product?.title ?? ""}
        />
        <Container>
          <Image>
            <ImageBox>
              <img src={product?.image} alt="image preview" />
            </ImageBox>
            <FormInput
              id="image"
              name="image"
              defaultValue={product?.image ?? ""}
            />
          </Image>
          <Content>
            <FormInput
              id="category"
              name="category"
              defaultValue={product?.category ?? ""}
            >
              <select
                name="category"
                id="category"
                required
                defaultValue={product?.category ?? ""}
              >
                {allCategory.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </FormInput>
            <FormInput
              id="price"
              name="price"
              type="number"
              defaultValue={product?.price ?? ""}
            />
            <Wrapper>
              <label htmlFor="description">DESCRIPTION</label>
              <textarea
                name="description"
                id="description"
                required
                defaultValue={product?.description ?? ""}
              />
            </Wrapper>
          </Content>
        </Container>
        <ButtonContainer>
          <CustomButton>OK</CustomButton>
        </ButtonContainer>
      </StyledForm>
    </Page>
  );
};

export default ProductForm;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
`;
const ImageBox = styled.div`
  width: 95%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.border300};
  margin-bottom: 5px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 100%;
  & > div > input {
    width: fit-content;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  & > textarea {
    width: 100%;
    height: 200px;
    border: 2px solid ${({ theme }) => theme.colors.border300};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 30px;
`;

const CustomButton = styled.button`
  padding: 10px 20px;
  border-radius: 50%;
  ${({ theme }) => {
    return `background-color:${theme.colors.button.bgColor};
    color:${theme.colors.button.textColor}`;
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;
