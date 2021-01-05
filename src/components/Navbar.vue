<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="navitem">Home</b-nav-item>
          <b-nav-item href="#">Sobre Nós</b-nav-item>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Produtos</b-nav-item>
          <b-nav-item href="#">Contactos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="css">
.navbar {
  background-color: #424F4B !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}
</style>