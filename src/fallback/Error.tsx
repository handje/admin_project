import { useRouteError } from "react-router-dom";
import styled from "styled-components";

import notFound from "../assets/notFound.jpg";
import forbidden from "../assets/forbidden.jpg";

interface CustomError {
  status: number;
  data: { message: string };
}

const Error = () => {
  let title = "Error!";
  let message = "Something went wrong!";
  let imgSrc;
  const error = useRouteError() as CustomError;
  console.error(error);

  if (error.status === 404) {
    title = "404 Page not found";
    imgSrc = notFound;
    message = "The page you are looking for does not exist.";
  }
  if (error.status === 500) {
    title = "500 Internal server error";
    message = error.data.message;
  }

  if (error.status === 403) {
    //등록권한없음(인증 자격은 있지만 접근권한이 없음)
    title = "403 Forbidden";
    imgSrc = forbidden;
    message =
      "Due to security reasons, you cannot access this page at this time. Please try again later.";
  }
  return (
    <Container>
      {imgSrc ? <Image src={imgSrc} alt="ERROR CODE" /> : <h1>{title}</h1>}
      <p>{message}</p>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;
