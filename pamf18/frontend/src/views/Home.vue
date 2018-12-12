<template>
  <div class="home">
    <ul>
      <li v-for="route of routes" :key="route.path">
        <a :href="route.path">{{ route.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
  }),
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
};
</script>
