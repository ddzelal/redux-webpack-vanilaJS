import store from "./store";
import * as action_creators from "./action_creators";

let tbody = document.querySelector("tbody");
let accountsBtn = document.querySelector("#accountsBtn");
let addAccountsBtn = document.querySelector("#addAccountsBtn");
let accountsView = document.querySelector("#accountsView");
let addAccountsView = document.querySelector("#addAccountView");
let saveBtn = document.querySelector("#saveBtn");
let editBtn = document.querySelector("#editBtn");

window.addEventListener("load", () => {
  store.dispatch(action_creators.FETCH_ACCOUNTS())
  store.dispatch(action_creators.START());
});

store.subscribe(function () {
  displayAccountsTable();
  changeView();
});

// function deleteAccount(userId) {
//   console.log(userId)
//   store.dispatch(action_creators(userId));
// }

// function editAccount(userId) {
//   console.log(store.getState,"dwadwa")
//   const accToEdit = store.getState().accounts.find((el) => el.id === userId);
//   console.log(accToEdit);
//   document.querySelector("#saveBtn").style.display = "none";
//   document.querySelector("#editBtn").style.display = "block";

//   let accName = document.querySelector("#account_name");
//   let accPhone = document.querySelector("#account_phone");
//   let accEmail = document.querySelector("#account_email");
//   let accId = document.querySelector("#accId");

//   accName.value = accToEdit.name;
//   accPhone.value = accToEdit.phone;
//   accEmail.value = accToEdit.email;
//   accId.value = accToEdit.id;

//   store.dispatch(action_creators.DISPLAY_ADD_ACCOUNT_ACTION());
// }



accountsBtn.addEventListener("click", () => {
  store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION());
});

addAccountsBtn.addEventListener("click", () => {
  document.querySelector("#account_name").value = "";
  document.querySelector("#account_phone").value = "";
  document.querySelector("#account_email").value = "";
  document.querySelector("#accId").value = "";

  document.querySelector("#saveBtn").style.display = "block";
  document.querySelector("#editBtn").style.display = "none";

  store.dispatch(action_creators.DISPLAY_ADD_ACCOUNT_ACTION());
});

saveBtn.addEventListener("click", () => {
  let accName = document.querySelector("#account_name");
  let accPhone = document.querySelector("#account_phone");
  let accEmail = document.querySelector("#account_email");

  store.dispatch(
    action_creators.ADD_NEW_ACCOUNT({
      name: accName.value,
      phone: accPhone.value,
      email: accEmail.value,
    }),
    store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
  );

  accName.value = "";
  accPhone.value = "";
  accEmail.value = "";
});

editBtn.addEventListener("click", () => {
  let accName = document.querySelector("#account_name");
  let accPhone = document.querySelector("#account_phone");
  let accEmail = document.querySelector("#account_email");
  let accId = document.querySelector("#accId");

  store.dispatch(
    action_creators.UPDATE_ACCOUNT({
      id: Number(accId.value),
      name: accName.value,
      phone: accPhone.value,
      email: accEmail.value,
    })
  );

  accName.value = "";
  accPhone.value = "";
  accEmail.value = "";
  accId.value = "";

  document.querySelector("#saveBtn").style.display = "block";
  document.querySelector("#editBtn").style.display = "none";
});

function changeView() {
  let view = store.getState().displayData.display;
  if (view === 1) {
    accountsView.style.display = "block";
    addAccountsView.style.display = "none";
  } else {
    accountsView.style.display = "none";
    addAccountsView.style.display = "block";
  }
}

function displayAccountsTable() {
  let accounts = store.getState().accountsData.accounts;
  let text = "";
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    text += `<tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.phone}</td>
        <td>${account.email}</td>
        <td>
        <button  data-id="${account.id}"  class="btn btn-warning edit">Edit</button>
          <button id="deleteButton"  data-id="${account.id}" class="btn btn-danger delete">Delete</button>
        </td>
        </tr>
        `;
  }

  tbody.innerHTML = text;
  let allDeleteBtns = document.querySelectorAll(".delete");
  let allEditBtns = document.querySelectorAll('.edit')

  console.log(allEditBtns)

  for (let i = 0; i < allDeleteBtns.length; i++) {
    const btn = allDeleteBtns[i];
    btn.addEventListener("click", deleteAccount);
  }

  for (let i = 0; i < allEditBtns.length; i++) {
    const btnEdit = allEditBtns[i];
    btnEdit.addEventListener("click", editAccount);
  }

}

function deleteAccount() {
  let id = this.getAttribute("data-id");
  store.dispatch(action_creators.DELETE_ACCOUNT_ACTION(id));
}


function editAccount(){
  let id = this.getAttribute('data-id');
  const accToEdit = store.getState().accountsData.accounts.find((el) => el.id === Number(id));
 
  document.querySelector("#saveBtn").style.display = "none";
  document.querySelector("#editBtn").style.display = "block";

  let accName = document.querySelector("#account_name");
  let accPhone = document.querySelector("#account_phone");
  let accEmail = document.querySelector("#account_email");
  let accId = document.querySelector("#accId");

  accName.value = accToEdit.name;
  accPhone.value = accToEdit.phone;
  accEmail.value = accToEdit.email;
  accId.value = accToEdit.id;

  store.dispatch(action_creators.UPDATE_ACCOUNT(id))
}