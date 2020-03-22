<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Головна</router-link> |
      <router-link to="/about">Про проект</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/_base.module.scss";
#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-text-color;
  font-size: $font-size;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $accent-color;

    &.router-link-exact-active {
      color: $main-text-color;
    }
  }
}
</style>
