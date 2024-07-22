import { json, redirect } from "react-router-dom";

import { fetchAuth } from "./fetchAuth";

interface Auth {
  email: string;
  password: string;
}

export const loginAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  } as Auth;

  const response = await fetchAuth(authData);
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok!) {
    throw json({ messgae: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  localStorage.setItem("token", JSON.stringify(resData.token));

  return redirect("/");
};
