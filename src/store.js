import { defineStore } from "pinia";

export const usecounterStore = defineStore("counter", {
  actions: {
    increment1() {
      this.value1++
    },
    increment2() {
      this.value2++
    },
    increment3() {
      this.value3++
    },
    increment4() {
      this.value4++
    },
    increment5() {
      this.value5++
    },


  },
  state: () => ({ value1: 0, value2: 0, value3: 0, value4: 0, value5: 0 }) // som data sectionen i vue options Api


})

