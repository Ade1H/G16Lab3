import { defineStore } from "pinia";

export const useLoginStore = defineStore("Login", {
  actions :{
    LoginUser(Account){
      this.user.push(Account)
    },
    LogoutUser(){
      localStorage.removeItem("Login")
    }
  },
    persist: true,
  state: () => ({ user: [] })
})

