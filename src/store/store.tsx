import { create } from "zustand";
import React from "react";
import { mountStoreDevtool } from "simple-zustand-devtools";
type Store = {
  count: number;
  inc: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Counter STORE", useStore);
}
export const Counter = () => {
  const { count, inc } = useStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
};
