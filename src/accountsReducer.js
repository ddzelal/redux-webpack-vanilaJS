import { accountsState}  from "./initialState";
import * as actions from "./actionTypes";

function accountsReducer(state = accountsState, action) {
  switch (action.type) {
    case actions.FETCH_USERS_REQUEST:
      return {...state, loading: true };

    case actions.FETCH_USERS_SUCCESS:
      return {
        loading:false,
        accounts : action.payload.accounts,
        error : ""
      }

    case actions.FETCH_USERS_ERROR:
      return {
        loading:false,
        accounts: [],
        error : action.payload.err
      }

    case actions.ADD_NEW_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload.newAccount],
      };
    case actions.UPDATE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.map((acc) => {
          if (acc.id === action.payload.editedAccount.id) {
            return action.payload.editedAccount;
          }
          return acc;
        }),
        display: 1,
      };
    case actions.DELETE_ACCOUNT:
      let filteredAccount = state.accounts.filter((acc) => {
        return acc.id !== Number(action.payload.userId);
      });
      return { ...state, accounts: filteredAccount };
    default:
      return state;
  }
}

export default accountsReducer;
