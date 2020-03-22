<template>
  <div class="home">
    <img class="logo" alt="logo" src="../assets/logo.png" width="99" height="96" />
    <HelloWorld msg="Apiary Monitoring System" />
    <HiveShortCard />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HiveShortCard from "@/components/HiveShortCard.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HiveShortCard
  }
};
</script>
<style scoped lang="scss">
@import "@/styles/_base.module.scss";
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      align-self: center;
    }
  }

</style>