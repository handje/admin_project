import { json } from "react-router-dom";

import { Auth, AdminInfo } from "./types";

export const fetchAuth = async (authData: Auth) => {
  const response = await fetch("/data/login.json");
  const allLoginInfo: { admin: AdminInfo[] } = await response.json();

  const isAuth = allLoginInfo?.admin.filter((info) => {
    return info.email === authData.email && info.password === authData.password;
  });

  if (isAuth.length > 0) {
    const info = {
      role: isAuth[0].role,
      name: isAuth[0].name,
      depart: isAuth[0].depart,
      num: isAuth[0].num,
      email: isAuth[0].email,
    };
    return json({ message: "Login Success", token: info }, { status: 200 });
  }
  return json({ message: "Login Failed" }, { status: 401 });
};
