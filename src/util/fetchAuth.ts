import { json } from "react-router-dom";

interface AuthForm {
  email: string;
  password: string;
}

interface AuthInfo {
  email: string;
  password: string;
  role: string;
  name: string;
  depart: string;
  num: string;
}

export const fetchAuth = async (authData: AuthForm) => {
  const response = await fetch("/data/login.json");
  const allLoginInfo: { admin: AuthInfo[] } = await response.json();

  const isAuth = allLoginInfo?.admin?.filter((info) => {
    return info.email === authData.email && info.password === authData.password;
  });

  if (isAuth.length > 0) {
    const info = {
      role: isAuth[0].role,
      name: isAuth[0].name,
      depart: isAuth[0].depart,
      num: isAuth[0].num,
      emial: isAuth[0].email,
    };
    return json({ message: "Login Success", token: info }, { status: 200 });
  }
  return json({ message: "Login Failed" }, { status: 401 });
};

// export const fetchAuthRole = async (token) => {
//   const response = await fetch("/data/role.json");
//   const allRoles = await response.json();
//   console.log(response);
//   return null;
// };
