import { defineStore } from "pinia";

export const useLoginStore = defineStore("Login", {
  actions: {
    LoginUser(Account) {
      this.user.push(Account)
    },
    LogoutUser(){
      user = { user: [] }
    }
  },
  persist: true,
  state: () => ({ user: [] })
})
