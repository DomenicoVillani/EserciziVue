<script setup>
import { ref } from 'vue';

const pokemonList = ref([]);
const loading = ref(false);
const error = ref(null);

const api_url = 'https://pokeapi.co/api/v2/pokemon?limit=15';

async function fetchdata(){
    loading.value = true;
    error.value = null;
    console.log('Fetch started');
    try {
        const response = await fetch(api_url);
        console.log('Fetch response received');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        pokemonList.value = data.results; 
        console.log('Pokemon List:', pokemonList.value); 
    } catch (err) {
        console.error('Error fetching data:', err);
        error.value = 'Failed to fetch data: ' + err.message;
    } finally {
        console.log('Fetch process completed');
        loading.value = false;
    }
}
fetchdata()
</script>

<template>
    <div>
        <p v-if="loading">Loading...</p>
        <p v-if="error">{{ error }}</p>
        <ul v-if="!loading && !error && pokemonList.length > 0">
            <li v-for="pokemon in pokemonList" :key="pokemon.name">
                <h1>{{ pokemon.name }}</h1>
                <p>{{ pokemon.url }}</p>
            </li>
        </ul>
    </div>
</template>

<style>
</style>
