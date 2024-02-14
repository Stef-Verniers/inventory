<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<template>
  <main>
    <h1>We're building</h1>
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}
</style>
