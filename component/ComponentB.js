import store from "@/store";
import { useHookstate } from "@hookstate/core";
import React from "react";

const ComponentB = () => {
  const mymsg = useHookstate(store.msg);

  return <div>ComponentB - {mymsg.get()}</div>;
};

export default ComponentB;
