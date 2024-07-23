<script setup>
  import { ref, onMounted } from 'vue';
  
  const tabs = ref([]);
  
  onMounted(() => {
    tabs.value = Array.from(document.querySelectorAll('[data-v-component=Tab]')).map(el => el.__vueParentComponent.proxy);
    tabs.value[0].state.isActive = true;
  });
  
  function selectTab(selectedTab) {
    tabs.value.forEach(tab => {
      tab.state.isActive = (tab === selectedTab);
    });
  }
  </script>


<template>
    <div>
      <div class="tabs">
        <ul>
          <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.state.isActive }">
            <a @click="selectTab(tab)">{{ tab.title }}</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .tabs ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  .tabs li {
    margin: 0 5px;
  }
  .tabs a {
    padding: 10px;
    cursor: pointer;
  }
  .tabs .is-active a {
    font-weight: bold;
  }
  </style>
  