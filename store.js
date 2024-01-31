import { hookstate } from "@hookstate/core";

const store = hookstate({
  msg: "Hello World",
});

export default store;
