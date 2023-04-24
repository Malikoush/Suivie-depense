<template>
    <div class="category-form-container">
        <CategoryForm v-on:new-category="onNewCategory" />
        <RouterLink to="/" class="cancel-btn">Annuler</RouterLink>
    </div>
</template>
  
<script setup lang="ts">
import { inject } from 'vue';
import CategoryForm from '@/components/CategoryForm.vue';
import { useRouter } from 'vue-router'
const router = useRouter();

// const addCategory = inject<{ addCategory: (name: string) => void }>('category')!.addCategory;

function onNewCategory(name: string) {
    const categories = { name: name };

    fetch("http://localhost:3000/categories", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categories)
    })
        .then(response => { router.push("/") })
}



</script>
  
<style>
.category-form-container {
    max-width: 400px;
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