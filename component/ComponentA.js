import store from "@/store";
import { useHookstate } from "@hookstate/core";
import React from "react";

const ComponentA = () => {
  const data = useHookstate(store.msg);

  return <div>ComponentA - {data.get()}</div>;
};

export default ComponentA;
