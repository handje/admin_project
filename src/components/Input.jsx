const Input = ({ title, ...props }) => {
  return (
    <>
      <h1>{title}</h1>
      <input {...props}></input>
    </>
  );
};
