import { create } from 'zustand'

// Zustand का create function इस्तेमाल करके एक custom store बनाया जा रहा है
export const myCountStore = create((set) => ({
  
  // `count` state को initialize कर रहे हैं, जिसकी initial value 0 है
  count: 859,

  // एक function `increasePopulation` जो state को update करेगा और bears की संख्या 1 से बढ़ाएगा just like action and reducer in redux toolkit
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),


}));

// zudstand ko apne redux devtool me dhekne ke liye 'toofani coder' ki 'zudstand devetools' ki video dhek lo 5:44 minutes ki hia 
