import { useMemo, useState } from "react";
import Button from "./Button";

const Counter_1 = {
  id: 1,
  text: "+ 1",
  type: "normal",
};
const Counter_2 = {
  id: 1,
  text: "- 1",
  type: "normal",
};
const Counter = () => {
  let CounterFuncAdd, CounterFuncMinus;
  const [count, setCount] = useState(0);

  useMemo(() => {
    CounterFuncAdd = () => {
      setCount((count) => (count = count + 1));
    };
  }, [count]);

  useMemo(() => {
    CounterFuncAdd = () => {
      setCount((count) => {
        if (count >= 0) {
          count = count + 1;
        }
        return count;
      });
    };
  }, [count]);

  useMemo(() => {
    CounterFuncMinus = () => {
      setCount((count) => {
        if (count > 0) {
          count = count - 1;
        }
        return count;
      });
    };
  }, [count]);

  return (
    <div className="Counter">
      <Button btnText={Counter_1} onClickFunc={CounterFuncAdd} />
      <h3>{count}</h3>
      <Button btnText={Counter_2} onClickFunc={CounterFuncMinus} />
    </div>
  );
};

export default Counter;
