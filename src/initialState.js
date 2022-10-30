export const initialState = {
    accounts: [
        {
            id:1,
            name: "Dzelal",
            phone: "4249024",
            email: "dzelal@gmail.com"
        }
    ],
    display:1,
    currentId: 2,
}


export const accountsState = {
    loading: false,
    accounts: [],
    error : ""
}


export const displayState = {
    display:1
}


export default initialState;
