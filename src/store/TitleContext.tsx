import { createContext, useState } from "react";

interface titleContext {
  title: string;
  handleChangeTitle: (title: string) => void;
}

export const TitleContext = createContext<titleContext>({
  title: "",
  handleChangeTitle: () => {},
});

export const TitleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState(localStorage.getItem("title") || "");

  const handleChangeTitle = (selected: string): void => {
    localStorage.setItem("title", selected);
    setTitle(selected);
  };

  return (
    <TitleContext.Provider value={{ title, handleChangeTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
