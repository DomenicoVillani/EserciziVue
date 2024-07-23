<script setup>
import { ref } from 'vue';

const loading = ref(false);
const error = ref(null);
const id = ref('');
const pokemonSingolo = ref('');

async function fetchdata() {
    loading.value = true;
    error.value = null;
    console.log('Fetch started');
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}`);
        console.log('Fetch response received');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        pokemonSingolo.value = data;
        console.log('Pokemon Data:', pokemonSingolo.value);
    } catch (err) {
        console.error('Error fetching data:', err);
        error.value = 'Failed to fetch data: ' + err.message;
    } finally {
        console.log('Fetch process completed');
        loading.value = false;
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="fetchdata">
            <input v-model="id" required type="number" placeholder="Enter Pokémon ID" min="1">
            <button type="submit">Cerca</button>
        </form>
        <div>
            <p v-if="loading">Loading...</p>
            <p v-if="error">{{ error }}</p>
            <div v-if="!loading && !error && pokemonSingolo">
                <h1>{{ pokemonSingolo.name }}</h1>
            </div>
        </div>
    </div>
</template>

<style>
</style>
