<template>
  <main style="max-width: 720px; margin: 2rem auto; font-family: Arial">
    <h1>Nuxt + Node.js Products</h1>
    <form @submit.prevent="createProduct">
      <input v-model="name" placeholder="Name" required />
      <input v-model.number="price" type="number" placeholder="Price" required />
      <button>Create</button>
    </form>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }} - ${{ p.price }}</li>
    </ul>
  </main>
</template>

<script setup>
const products = ref([]);
const name = ref('');
const price = ref(0);

const load = async () => {
  products.value = await $fetch('/api/products');
};

const createProduct = async () => {
  await $fetch('/api/products', { method: 'POST', body: { name: name.value, price: price.value } });
  name.value = '';
  price.value = 0;
  await load();
};

await load();
</script>
