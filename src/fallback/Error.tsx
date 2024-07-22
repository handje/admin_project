import { useRouteError } from "react-router-dom";

interface CustomError {
  status: number;
  data: { message: string };
}

const Error = () => {
  let title = "Error!";
  let message = "Something went wrong!";
  const error = useRouteError() as CustomError;
  console.log(error);

  if (error.status === 404) {
    title = "Page not found";
    message = "The page you are looking for does not exist.";
  }
  if (error.status === 500) {
    title = "Internal server error";
    message = error.data.message;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default Error;
