import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { styled } from "styled-components";

import { Product } from "../../util/interfaces";
import { Page } from "../common";
import FormInput from "./FormInput";
import { fetchAllCategory } from "../../util/fetchData";

type Method = "post" | "patch";

const ProductForm = ({
  product,
  method,
}: {
  product?: Product;
  method: Method;
}) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await fetchAllCategory();
        setCategoryList(list);
      } catch (err) {
        throw new Error();
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCategory(product?.category || "");
    setImgUrl(product?.image || "");
  }, [product]);

  return (
    <Page id={product?.id}>
      <StyledForm method={method}>
        <FormInput
          id="name"
          name="title"
          type="text"
          defaultValue={product?.title ?? ""}
        />
        <Container>
          <Image>
            <ImageBox>
              <img src={imgUrl} alt="image preview" />
            </ImageBox>
            <FormInput
              id="image"
              name="image"
              defaultValue={product?.image ?? ""}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Image>
          <Content>
            <FormInput id="category" name="category">
              <select
                name="category"
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="1">Select Categroy</option>
                {categoryList?.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
                <option value="2">second</option>
              </select>
            </FormInput>
            <FormInput
              id="price"
              name="price"
              type="number"
              defaultValue={product?.price}
              step={0.1}
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
