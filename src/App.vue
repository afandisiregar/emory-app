<template>
  <div id="app">
    <!-- <Navbar/> -->
    <div class="container-user mx-auto">
      <router-view />
    </div>
    <!-- <Menu /> -->
  </div>
</template>

<script>
// import Menu from './components/Menu/Menu.vue'

export default {
  name: 'App',
  components: {
    // Navbar,
  }
}
</script>

<style src='../node_modules/izitoast/dist/css/iziToast.min.css'></style> 
