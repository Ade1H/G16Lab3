<template>
  <BNavItemDropdown right>
    <template #button-content>
      <em>User</em>
    </template>
    <div id="LogOut">
      <BDropdownItem href="#"
        ><RouterLink class="nav-link" to="/Register"
          >Register</RouterLink
        ></BDropdownItem
      >
      <BDropdownItem href="#"
        ><RouterLink class="nav-link" to="/Login"
          >Sign In</RouterLink
        ></BDropdownItem
      >
    </div>
    <div id="LogIn">
      <BDropdownItem href="#"
        ><RouterLink class="nav-link" to="/Register"
          >Profile</RouterLink
        ></BDropdownItem
      >
      <BDropdownItem href="#"
        ><RouterLink class="nav-link" to="/Register"
          >Sign Out</RouterLink
        ></BDropdownItem
      >
    </div>
  </BNavItemDropdown>
</template>

<style scoped>
div {
  height: 100px;
}
</style>
