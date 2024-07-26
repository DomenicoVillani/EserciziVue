<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

let id = 0;
const lista = ref([]);
const oggetto = ref('');

function addTodo() {
    if (oggetto.value.trim() !== '') {
        lista.value.push({ id: id++, text: oggetto.value, done: false, quantita: 0 });
        oggetto.value = ''; // Svuota l'input dopo l'aggiunta
    }
}

function RemoveTodo(ogg) {
    lista.value = lista.value.filter(t => t.id !== ogg.id);
}

function addQuantita(ogg) {
    ogg.quantita++;
}

function removeQuantita(ogg) {
    if (ogg.quantita === 0) {
        toast.add({ severity: 'info', summary: 'IMPOSSIBILE', detail: 'IMPOSSIBILE INSERIRE UN NUMERO NEGATIVO', life: 3000 });
    } else {
        ogg.quantita--;
    }
}
</script>

<template>
    <div>
        <div>
            <h1>Carrello spesa</h1>
        </div>
        
        <div>
            <form @submit.prevent="addTodo">
                <input v-model="oggetto" required>
                <button>Add</button>
            </form>
        </div>
        <div>
            <ul>
                <li v-for="o in lista" :key="o.id">
                    <input type="checkbox" v-model="o.done">
                    <span :class="{ done: o.done }">{{ o.text }}</span>
                    <button @click="RemoveTodo(o)">❌</button>
                    <span>Quantità: {{ o.quantita }}</span>
                    <button @click="addQuantita(o)">➕</button>
                    <button @click="removeQuantita(o)">➖</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style>
