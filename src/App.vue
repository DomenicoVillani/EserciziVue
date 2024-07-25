<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Button from 'primevue/button';
import Toast from 'primevue/toast';


const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value.toString());
};

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    darkMode.value = savedMode === 'true';
  }
});
</script>

<template>
  <div :class="darkMode ? 'dark-mode' : 'light-mode'">
    <Button @click="toggleDarkMode" severity="info">
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </Button>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/prova">Prova</RouterLink>
          <RouterLink to="/todo">Todo</RouterLink>
          <RouterLink to="/filter">Filter</RouterLink>
          <RouterLink to="/contatti">Contatti</RouterLink>
          <RouterLink to="/fakeRegister">Fake Register</RouterLink>
          <RouterLink to="/fetch">Fetch</RouterLink>
          <RouterLink to="/fetch2">Ricerca Pkmn</RouterLink>
          <RouterLink to="/star">Star Rating</RouterLink>
          <RouterLink to="/toolbar">Toolbar</RouterLink>
          <RouterLink to="/notifiche">Notifiche</RouterLink>
        </nav>
      </div>
    </header>
    
    <RouterView />
    <Toast />
  </div>
</template>

<style scoped>



header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--text-color);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--text-color);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
button {
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
