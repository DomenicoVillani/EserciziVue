<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const valuenotifiche = ref(0);

const show = () => {
    toast.add({ severity: 'info', summary: 'Notifica', detail: 'Hai ricevuto una notifica', life: 3000 });
    console.log(toast);
    valuenotifiche.value++;
}
</script>

<template>
    <div>
        <Button label="Inviami una notifica" @click="show()"/>
        <p>Notifiche ricevuto: {{ valuenotifiche }}</p>
    </div>
</template>

<style scoped>

</style>