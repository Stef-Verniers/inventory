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
    <div class="title">
      <h1>Hosted Power inventaris</h1>
    </div>
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 100vw;
  background-color: #f9ffff;
}

.title {
  height: 5rem;
  background-color: var(--vt-c-blue);
  color: white;
  display: flex;
  align-items: center;
}
.title h1 {
  margin-left: 2rem;
}
</style>
