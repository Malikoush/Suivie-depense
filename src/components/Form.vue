<template>
    <article>
        <article>
            <h2>Nouvelle transaction</h2>
        </article>
        <form @submit.prevent="onSubmit">
            <label>Date :</label>
            <p :class="{ invisible: !err1 }">Erreur: Date invalide</p>
            <input type="date" v-model="new_Date"><br>
            <label>Montant:</label>
            <p :class="{ invisible: !err2 }">Erreur: Veuillez saisir un montant valide </p>
            <input type="number" v-model="new_Montant"><br>
            <label>Description:</label>
            <p :class="{ invisible: !err3 }">Erreur: Veuillez saisir une description</p>
            <input type="text" v-model="new_Description"><br>
            <label>Catégorie:</label>
            <p :class="{ invisible: !err4 }">Erreur: Veuillez choisire une catégorie</p>

            <select v-model="new_Category">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
            <button type="submit">
                Valider
            </button>
        </form>

    </article>
</template>

<script setup lang="ts">

import { ref } from 'vue'

defineProps(['categories'])
const emit = defineEmits(['newTransaction']);


const new_Date = ref<string>("")
const new_Montant = ref<number>(0)
const new_Description = ref<string>("")
const new_Category = ref<string>("")

const err1 = ref<boolean>(false)
const err2 = ref<boolean>(false)
const err3 = ref<boolean>(false)
const err4 = ref<boolean>(false)



const onSubmit = () => {
    if (/\d{4}-\d{2}-\d{2}/.test(new_Date.value) === false) {
        err1.value = true
        return false
    }

    if (typeof new_Montant.value !== "number" || new_Montant.value == 0) {
        err2.value = true
        return false;
    }

    if (new_Description.value.length === 0) {
        err3.value = true
        return false;
    }
    if (new_Category.value.length == 0) {
        err4.value = true
        return false;
    }



    emit('newTransaction', new_Date.value, new_Description.value, new_Montant.value * 100, new_Category.value);

}



</script>

<style>
form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;

}

article h2 {
    max-width: 400px;
    margin: 0 auto;
    font-weight: bold;
    margin-top: 10px;
}

label {
    font-weight: bold;
    margin-top: 10px;

}

.invisible {
    visibility: hidden;

}

p {

    color: #ff0000;
}

input[type="date"],
input[type="number"],
input[type="text"] {
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #333;
    ;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #404040;
    ;
}
</style>