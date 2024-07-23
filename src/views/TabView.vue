<script setup>
  import { defineProps, reactive } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  });
  
  const state = reactive({
    isActive: false
  });
  
  defineExpose({ state });
  </script>


<template>
    <div v-show="isActive">
      <slot></slot>
    </div>
  </template>
  
  
  