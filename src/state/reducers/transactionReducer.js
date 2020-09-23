const initialState = {
data: [
  {
    date: '2020-1-1',
    vendor: 'Costco',
    vendor_code: '87',
    category: 'Household',
    amount: 11.19,
  },
  {
    date: '2020-1-2',
    vendor: 'Gas R Us',
    vendor_code: '48',
    category: 'Personal Care',
    amount: 9.91,
  },
  {
    date: '2020-1-2',
    vendor: 'report',
    vendor_code: '72',
    category: 'Personal Care',
    amount: 41.86,
  },
  {
    date: '2020-1-2',
    vendor: 'sick',
    vendor_code: '93',
    category: 'Dining & Alcohol',
    amount: 7.14,
  },
  {
    date: '2020-1-3',
    vendor: 'fun',
    vendor_code: '3',
    category: 'Healthcare',
    amount: 53.78,
  },
  {
    date: '2020-1-5',
    vendor: 'dribble',
    vendor_code: '12',
    category: 'Rent',
    amount: 44.02,
  },
  {
    date: '2020-1-5',
    vendor: 'conversation',
    vendor_code: '48',
    category: 'Dining & Alcohol',
    amount: 7.76,
  },
  {
    date: '2020-1-6',
    vendor: 'peasant',
    vendor_code: '45',
    category: 'Groceries',
    amount: 15.06,
  },
  {
    date: '2020-1-7',
    vendor: 'posture',
    vendor_code: '63',
    category: 'Dining & Alcohol',
    amount: 13.67,
  },
  {
    date: '2020-1-8',
    vendor: 'voice',
    vendor_code: '96',
    category: 'Utilities',
    amount: 19.61,
  },
  {
    date: '2020-1-9',
    vendor: 'outer',
    vendor_code: '3',
    category: 'Groceries',
    amount: 17.28,
  },
  {
    date: '2020-1-10',
    vendor: 'perforate',
    vendor_code: '21',
    category: 'Dining & Alcohol',
    amount: 33.97,
  },
  {
    date: '2020-1-11',
    vendor: 'fine',
    vendor_code: '0',
    category: 'Entertainment',
    amount: 91,
  },
  {
    date: '2020-1-12',
    vendor: 'breakfast',
    vendor_code: '99',
    category: 'Utilities',
    amount: 36.63,
  },
  {
    date: '2020-1-13',
    vendor: 'dilemma',
    vendor_code: '24',
    category: 'Groceries',
    amount: 60.17,
  },
  {
    date: '2020-1-14',
    vendor: 'book',
    vendor_code: '33',
    category: 'Household',
    amount: 49.98,
  },
  {
    date: '2020-1-15',
    vendor: 'please',
    vendor_code: '51',
    category: 'Gas',
    amount: 69.12,
  },
  {
    date: '2020-1-16',
    vendor: 'electron',
    vendor_code: '75',
    category: 'Healthcare',
    amount: 28.47,
  },
  {
    date: '2020-1-17',
    vendor: 'relation',
    vendor_code: '78',
    category: 'Dining & Alcohol',
    amount: 13.87,
  },
  {
    date: '2020-1-18',
    vendor: 'appendix',
    vendor_code: '72',
    category: 'Shopping',
    amount: 27.71,
  },
  {
    date: '2020-1-19',
    vendor: 'happy',
    vendor_code: '15',
    category: 'Rent',
    amount: 5,
  },
  {
    date: '2020-1-20',
    vendor: 'goal',
    vendor_code: '39',
    category: 'Household',
    amount: 9.36,
  },
  {
    date: '2020-1-21',
    vendor: 'dynamic',
    vendor_code: '9',
    category: 'Groceries',
    amount: 14.4,
  },
  {
    date: '2020-1-22',
    vendor: 'plot',
    vendor_code: '66',
    category: 'Shopping',
    amount: 22.04,
  },
  {
    date: '2020-1-23',
    vendor: 'association',
    vendor_code: '39',
    category: 'Personal Care',
    amount: 25.78,
  },
  {
    date: '2020-1-24',
    vendor: 'daughter',
    vendor_code: '75',
    category: 'Entertainment',
    amount: 41.98,
  },
  {
    date: '2020-1-25',
    vendor: 'money',
    vendor_code: '12',
    category: 'Shopping',
    amount: 30.06,
  },
  {
    date: '2020-1-26',
    vendor: 'eject',
    vendor_code: '81',
    category: 'Rent',
    amount: 46.61,
  },
  {
    date: '2020-1-27',
    vendor: 'photograph',
    vendor_code: '42',
    category: 'Utilities',
    amount: 50.59,
  },
  {
    date: '2020-1-28',
    vendor: 'unlikely',
    vendor_code: '48',
    category: 'Utilities',
    amount: 27.61,
  },
  {
    date: '2020-1-29',
    vendor: 'splurge',
    vendor_code: '45',
    category: 'Healthcare',
    amount: 67.45,
  },
  {
    date: '2020-1-30',
    vendor: 'bottle',
    vendor_code: '33',
    category: 'Entertainment',
    amount: 56.7,
  },
  {
    date: '2020-1-31',
    vendor: 'sit',
    vendor_code: '84',
    category: 'Utilities',
    amount: 0.28,
  },
  {
    date: '2020-2-1',
    vendor: 'Costco',
    vendor_code: '87',
    category: 'Household',
    amount: 91.19,
  },
  {
    date: '2020-2-2',
    vendor: 'Gas R Us',
    vendor_code: '48',
    category: 'Personal Care',
    amount: 19.91,
  },
  {
    date: '2020-2-2',
    vendor: 'report',
    vendor_code: '72',
    category: 'Personal Care',
    amount: 61.86,
  },
  {
    date: '2020-2-2',
    vendor: 'sick',
    vendor_code: '93',
    category: 'Dining & Alcohol',
    amount: 27.14,
  },
  {
    date: '2020-2-3',
    vendor: 'fun',
    vendor_code: '3',
    category: 'Healthcare',
    amount: 43.78,
  },
  {
    date: '2020-2-5',
    vendor: 'dribble',
    vendor_code: '12',
    category: 'Rent',
    amount: 14.02,
  },
  {
    date: '2020-2-5',
    vendor: 'conversation',
    vendor_code: '48',
    category: 'Dining & Alcohol',
    amount: 17.76,
  },
  {
    date: '2020-2-6',
    vendor: 'peasant',
    vendor_code: '45',
    category: 'Groceries',
    amount: 25.06,
  },
  {
    date: '2020-2-7',
    vendor: 'posture',
    vendor_code: '63',
    category: 'Dining & Alcohol',
    amount: 3.67,
  },
  {
    date: '2020-2-8',
    vendor: 'voice',
    vendor_code: '96',
    category: 'Utilities',
    amount: 29.61,
  },
  {
    date: '2020-2-9',
    vendor: 'outer',
    vendor_code: '3',
    category: 'Groceries',
    amount: 37.28,
  },
  {
    date: '2020-2-10',
    vendor: 'perforate',
    vendor_code: '21',
    category: 'Dining & Alcohol',
    amount: 93.97,
  },
  {
    date: '2020-2-11',
    vendor: 'fine',
    vendor_code: '0',
    category: 'Entertainment',
    amount: 11,
  },
  {
    date: '2020-2-12',
    vendor: 'breakfast',
    vendor_code: '99',
    category: 'Utilities',
    amount: 46.63,
  },
  {
    date: '2020-2-13',
    vendor: 'dilemma',
    vendor_code: '24',
    category: 'Groceries',
    amount: 20.17,
  },
  {
    date: '2020-2-14',
    vendor: 'book',
    vendor_code: '33',
    category: 'Household',
    amount: 69.98,
  },
  {
    date: '2020-2-15',
    vendor: 'please',
    vendor_code: '51',
    category: 'Gas',
    amount: 49.12,
  },
  {
    date: '2020-2-16',
    vendor: 'electron',
    vendor_code: '75',
    category: 'Healthcare',
    amount: 18.47,
  },
  {
    date: '2020-2-17',
    vendor: 'relation',
    vendor_code: '78',
    category: 'Dining & Alcohol',
    amount: 23.87,
  },
  {
    date: '2020-2-18',
    vendor: 'appendix',
    vendor_code: '72',
    category: 'Shopping',
    amount: 87.71,
  },
  {
    date: '2020-2-19',
    vendor: 'happy',
    vendor_code: '15',
    category: 'Rent',
    amount: 2,
  },
  {
    date: '2020-2-20',
    vendor: 'goal',
    vendor_code: '39',
    category: 'Household',
    amount: 9.36,
  },
  {
    date: '2020-2-21',
    vendor: 'dynamic',
    vendor_code: '9',
    category: 'Groceries',
    amount: 44.4,
  },
  {
    date: '2020-2-22',
    vendor: 'plot',
    vendor_code: '66',
    category: 'Shopping',
    amount: 72.04,
  },
  {
    date: '2020-2-23',
    vendor: 'association',
    vendor_code: '39',
    category: 'Personal Care',
    amount: 15.78,
  },
  {
    date: '2020-2-24',
    vendor: 'daughter',
    vendor_code: '75',
    category: 'Entertainment',
    amount: 41.98,
  },
  {
    date: '2020-2-25',
    vendor: 'money',
    vendor_code: '12',
    category: 'Shopping',
    amount: 90.06,
  },
  {
    date: '2020-2-26',
    vendor: 'eject',
    vendor_code: '81',
    category: 'Rent',
    amount: 16.61,
  },
  {
    date: '2020-2-27',
    vendor: 'photograph',
    vendor_code: '42',
    category: 'Utilities',
    amount: 30.59,
  },
  {
    date: '2020-2-28',
    vendor: 'unlikely',
    vendor_code: '48',
    category: 'Utilities',
    amount: 77.61,
  },
  {
    date: '2020-2-29',
    vendor: 'splurge',
    vendor_code: '45',
    category: 'Healthcare',
    amount: 37.45,
  },
  {
    date: '2020-2-30',
    vendor: 'bottle',
    vendor_code: '33',
    category: 'Entertainment',
    amount: 26.7,
  },
  {
    date: '2020-2-31',
    vendor: 'sit',
    vendor_code: '84',
    category: 'Utilities',
    amount: 50.28,
  },
],
};

// const initialState = {
//   data: [],
// };

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSACTION_DATA_SUCCESS':
      return {
        ...state,
        data: [
          ...state.data,
          {
            category: action.payload.merchant,
            date: action.payload.date,
            amount: action.payload.amount,
          },
        ],
      };
  }
  return state;
};
