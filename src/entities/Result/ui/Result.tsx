import { Typography } from "antd";
import { ResultContainer, ResultItem, ResultWrapper } from "./Result.styled.ts";
import { useLocation } from "react-router";
import { TLocationResult } from "./interfaces/TLocationResult.ts";

const Result = () => {
  const location = useLocation();
  const { state } = location as TLocationResult;
  return (
    <ResultContainer>
      <Typography.Title level={3}>Результат</Typography.Title>
      <ResultWrapper>
        {Object.keys(state).map((el) => (
          <ResultItem>
            <Typography>{el}</Typography>:
            <Typography>{String(state[el])}</Typography>
          </ResultItem>
        ))}
      </ResultWrapper>
    </ResultContainer>
  );
};

export default Result;
