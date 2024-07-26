<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const valuenotifiche = ref(0);

const show = () => {
    toast.add({ severity: 'info', summary: 'Notifica', detail: 'Hai ricevuto una notifica', life: 3000 });
    valuenotifiche.value++;
    sessionStorage.setItem('notificationsCount', valuenotifiche.value.toString());
};
const loadNotificationsCount = () => {
    const savedCount = sessionStorage.getItem('notificationsCount');
    if (savedCount !== null) {
        valuenotifiche.value = parseInt(savedCount, 10);
    } else {
        valuenotifiche.value = 0;
    }
};
onMounted(() => {
    loadNotificationsCount();
});

</script>

<template>
    <div>
        <Button label="Inviami una notifica" @click="show" />
        <p>Notifiche ricevuto: {{ valuenotifiche }}</p>
    </div>
</template>

<style scoped>
</style>
