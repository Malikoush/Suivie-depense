<template>
    <article>
        <article>
            <h2>Nouvelle Catégorie</h2>
        </article>
        <form @submit.prevent="onSubmitTransaction">
            <label>Nom Catégorie :</label>
            <p :class="{ invisible: !err }">Erreur: Date invalide</p>
            <input type="texte" v-model="name">

            <button type="submit">
                Valider
            </button>
        </form>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['newCategory']);

const name = ref<string>("")
const err = ref<boolean>(false)



const onSubmitTransaction = () => {
    if (name.value.length === 0) {
        err.value = true
        return false;
    }
    emit('newCategory', name.value);


}
</script>

<style></style>

