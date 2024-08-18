"use client";

import { foo } from "./actions";

export const Test = () => {
  return (
    <div>
      GG
      <button onClick={() => console.log(foo())}>test</button>
    </div>
  );
};
