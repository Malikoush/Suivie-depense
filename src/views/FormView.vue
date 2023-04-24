<template>
  <div class="conteiner">

    <Form :categories="categories" v-on:new-transaction="onSubmit" />
    <RouterLink to="/" class="cancel-btn">Annuler</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import Form from '@/components/Form.vue'
import { useRouter } from 'vue-router'
import type { Category } from '@/entities/category';
const router = useRouter();


// const addTransaction = inject<{ addTransaction: (new_date: string, description: string, amount: number, category: Category) => void }>('transaction')!.addTransaction;
// const categories = inject<{ categories: Ref<Category[]> }>('category')!.categories;

const categories = ref<Category[]>([

])



fetch("http://localhost:3000/categories")
  .then(response => response.json())
  .then(data => {
    categories.value = data;
  })
  .catch(error => console.error(error));

function onSubmit(new_date: string, description: string, amount: number, categoryId: Category) {
  const transaction = { date: new_date, description, amount, categoryId };

  fetch("http://localhost:3000/transactions", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction)
  })
    .then(response => { router.push("/") })
}

</script>

<style >
.conteiner {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
}

.cancel-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #eee;
  color: #333;
  border: none;
  border-radius: 5px;

}

.cancel-btn:hover {
  background-color: #ddd;
}
</style>