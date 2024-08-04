import { json, redirect } from "react-router-dom";

import { postProduct } from "./fetchData";
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

export const formAction = async ({
  request,
  params,
}: {
  request: Request;
  params: { id: number };
}) => {
  const data = await request.formData();

  const title = data.get("title");
  const image = data.get("image");
  const category = data.get("category");
  const price = data.get("price");
  const description = data.get("description");

  if (!title || !image || !category || !price || !description) {
    return json({ message: "Please fill all fields" }, { status: 400 });
  } else {
    const productData = {
      title: title as string,
      image: image as string,
      category: category as string,
      price: Number(price),
      description: description as string,
    };

    const response = await postProduct(productData, request.method, params.id);
    if (response.status === 422 || response.status === 400) {
      return response;
    }

    if (params.id) {
      return redirect(`/products/${params.id}`);
    }
    return redirect("/products");
  }
};
