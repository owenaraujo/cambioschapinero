<script setup>
import { ref } from "vue";
import login from "../components/LoginForm.vue";
let logged = ref(false);
</script>
<template>
  <div>
    <login v-if="!logged" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
