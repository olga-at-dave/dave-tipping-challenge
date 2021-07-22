
const ADVANCE_AMOUNT = 75;
const TIPS = [
  {
    amount: 5,
    trees: 5
  },
  {
    amount: 10,
    trees: 10
  },
  {
    amount: 15,
    trees: 30
  },
  {
    amount: 20,
    trees: 40
  }
];

export const fetchTips = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve({
            advanceAmount: ADVANCE_AMOUNT,
            tipOptions: TIPS,
        }), 10);
    });
}