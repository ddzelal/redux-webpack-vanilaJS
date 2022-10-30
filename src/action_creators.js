import * as actionTypes from "./actionTypes"

export const START = () => {
    return {
        type: actionTypes.START
    }
}

export const FETCH_ACCOUNTS = () => {
  return function(dispatch){
    dispatch(FETCH_USERS_REQUEST());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      dispatch(FETCH_USERS_SUCCESS(data))
    })
    .catch(err => {
      dispatch(FETCH_USERS_ERROR(err))
    })
  }
}

export const FETCH_USERS_ERROR = (err) => {
  return {
    type: actionTypes.FETCH_USERS_ERROR,
    payload: {
      err : err
    }
    
  }
}

export const FETCH_USERS_REQUEST = () => {
  return {
    type: actionTypes.FETCH_USERS_REQUEST
  }
}

export const FETCH_USERS_SUCCESS = (accounts) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: {
      accounts: accounts
    }
  }
}



export const DISPLAY_ACCOUNTS_ACTION = () => {
    return{
        type: actionTypes.DISPLAY_ACCOUNTS_ACTION
    }
}

export const DISPLAY_ADD_ACCOUNT_ACTION = () => {
    return {
        type: actionTypes.DISPLAY_ADD_ACCOUNTS_ACTION
    }
}

export const ADD_NEW_ACCOUNT = (newAccount) => {
    newAccount['id'] = Math.floor(Math.random() * 100);
    return {
        type: actionTypes.ADD_NEW_ACCOUNT,
        payload: {
            newAccount: newAccount
        }
    }
}


export const DELETE_ACCOUNT_ACTION = (uId) => {
    return {
      type: actionTypes.DELETE_ACCOUNT,
      payload: {
        userId: uId,
      },
    };
  };

export const UPDATE_ACCOUNT = (account) => {
    console.log(account,"cao")
    return {
      type: actionTypes.UPDATE_ACCOUNT,
      payload: {
        editedAccount: account,
      },
    };
  };