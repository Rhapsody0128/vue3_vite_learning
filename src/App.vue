<template lang="pug">
#app
  img(src="./assets/logo.png")
  selfComponent(msg='selfComponent')
  p Store.Name = {{name}}
  router-link(to='/') Home | 
  router-link(to='/about')  About
  router-view

</template>
<script>
import selfComponent from "./components/selfComponent.vue";
export default {
  components: { selfComponent },
  data() {
    return {
      name: "None",
    };
  },
  mounted() {
    console.log(selfComponent);
    this.name = this.$store.state.name;
  },
};
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
</style>
