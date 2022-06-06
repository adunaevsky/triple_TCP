import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  cash: {
    bal: 12345678,
    bet: { l: 1, m: 2, r: 3, all: 4 },
    win: { l: 1, m: 2, r: 3, all: 4 },
    totalwin: 123456,
  },
});

export {useGlobalState, setGlobalState}
