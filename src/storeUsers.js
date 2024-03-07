import { defineStore } from "pinia";

export const useAccountsStore = defineStore("accounts", {
  actions :{
    CreateAccounts(Account){
      this.accounts.push(Account)
    }},
    persist: true,
  state: () => ({ accounts: [] })
})