// import initialState from "./initialState";
// import * as actions from "./actionTypes";

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     // case actions.START:
//     //     return state;
//     case actions.DISPLAY_ACCOUNTS_ACTION:
//       return { ...state, display: 1 };
//     case actions.DISPLAY_ADD_ACCOUNTS_ACTION:
//       return { ...state, display: 2 };
//     case actions.ADD_NEW_ACCOUNT:
//       return {
//         ...state,
//         accounts: [...state.accounts, action.payload.newAccount],
//       };
//     case actions.UPDATE_ACCOUNT:
//       return {
//         ...state,
//         accounts: state.accounts.map((acc) => {
//           if (acc.id === action.payload.editedAccount.id) {
//             return action.payload.editedAccount;
//           }
//           return acc;
//         }),
//         display: 1,
//       };
//     case actions.DELETE_ACCOUNT:
//       let filteredAccount = state.accounts.filter((acc) => {
//         return acc.id !== Number(action.payload.userId);
//       });
//       return { ...state, accounts: filteredAccount };
//     default:
//       return state;
//   }
// }

// export default reducer;
