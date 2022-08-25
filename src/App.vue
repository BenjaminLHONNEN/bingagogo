<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/core/documentation">Documentation</router-link>
    </nav>
    <div v-if="tabs">
      <tabs-component :tabs="tabs"></tabs-component>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TabModel } from './components/core/TabModel';
import TabsComponent from './components/core/TabsComponent.vue';

export default defineComponent({
  name: 'app-component',
  components: { TabsComponent },
  data() : {tabs: TabModel[]} {
    console.log('data');
    return {
      tabs: [
        {
          name: 'Bingo',
          action: () => {
            console.log('go to Bingo');
            this.$router.push('/');
          },
        },
        {
          name: 'Propals',
          action: () => {
            console.log('go to Propals');
            this.$router.push('/login');
          },
        },
        {
          name: 'Stats',
          action: () => {
            console.log('go to Stats');
            this.$router.push('/login');
          },
        },
      ],
    };
  },
  mounted() {
    console.log('mounted');
  },
});
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.f {
  display: flex;
  &.jcc {
    justify-content: center;
  }
  &.aic {
    align-items: center;
  }
  .f1 {
    flex: 1;
  }
}
</style>
