import { store1, store2 } from "@/store";
import { useHookstate } from "@hookstate/core";

const ComponentB = () => {
  const data1 = useHookstate(store1.msg);
  const data2 = useHookstate(store2.msg);

  return (
    <div>
      ComponentA - {data1.get()}- {data2.get()}
    </div>
  );
};

export default ComponentB;
