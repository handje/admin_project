import styled from "styled-components";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const Card = ({ title }: { title: string }) => {
  return (
    <CardContainer>
      <ContentContainer>
        <h1>{title}</h1>
      </ContentContainer>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 5px 0px;
  margin: 5px;
`;
const ChartContainer = styled.div`
  height: 90%;
  padding-top: 5px;
`;
const ContentContainer = styled.div`
  height: 10%;
  border-bottom: 1px solid gray;
`;

export default Card;
