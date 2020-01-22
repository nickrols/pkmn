<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-navbar-brand href="#">

        <router-link to='/'>
          <img    class="imgLogo"
                  src="https://i.pinimg.com/originals/f7/b4/1b/f7b41b0b170d8765d7f6684497c7763a.png" alt="PokéBall">
        </router-link>

      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>

          <b-nav-item href="#">
            <router-link to='/List/favorite'>
              Favoris
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to='/Booster'>
              Booster
            </router-link>
          </b-nav-item>

          <b-nav-item href="#">
            <router-link to='/List/ex'>
              Pokémon EX
            </router-link>
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

    <div style="padding: 10px">
      <router-view />
    </div>

  </div>
</template>

<script>

  import Vue from 'vue';
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);

  export default {



  }

</script>

<style>

  .imgLogo {
    width: 30px;
    height: 30px;
  }


</style>
