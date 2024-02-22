
<template>

      <BNavItemDropdown right>
        <!-- Using 'button-content' slot -->
        <template #button-content>
          <em>User</em>
        </template>
        <div id="LogOut">
          <BDropdownItem href="#">Register</BDropdownItem>
          <BDropdownItem href="#">Sign In</BDropdownItem>
        </div>
        <div id="LogIn">
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </div>
      </BNavItemDropdown>
</template>


<script>
import { RouterLink } from 'vue-router';
</script>


<style scoped>
div{
  height: 10vh;
}
</style>
