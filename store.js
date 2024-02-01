import { hookstate } from "@hookstate/core";

const store1 = hookstate({
  msg: "Hello",
});

const store2 = hookstate({
  msg: "Hello World",
});

export { store1, store2 };
