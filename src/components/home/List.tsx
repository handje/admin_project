import { Table } from "../../components/common";

const List = ({ title }: { title: string }) => {
  const header = ["Num", "Name", "UserName", "Phone"];
  const renderRow = () => {
    return <></>;
  };
  return (
    <>
      <h2>{title}</h2>
      <Table header={header} data={[]} renderRow={renderRow} />
    </>
  );
};

export default List;
