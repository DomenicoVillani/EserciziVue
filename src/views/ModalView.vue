<script setup>
import { ref } from "vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const visible = ref(false);
</script>

<template>
    <div class="card flex justify-center">
        <Button label="spawna la modale" @click="visible = true" />
        <Dialog v-model:visible="visible" maximizable modal header="Titolo modale" :style="{ width: '10rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

