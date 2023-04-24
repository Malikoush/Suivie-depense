<template>
  <div>
    <h2 id="solde">SOLDE RESTANT : {{ ToEuro(Total) }}</h2>
    <Tab :transactions="transactions" v-bind:categories=categories />
    <RouterLink to="/new-catégorie" class="new-transaction-btn">Catégorie</RouterLink>
    <RouterLink to="/new-transaction" class="new-transaction-btn">Nouvelle transaction</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, ref } from 'vue';
import type { Transaction } from '@/entities/transaction';
import Tab from '@/components/Tab.vue'
import { ToEuro } from '@/utils/ToEuro'
import type { Category } from '@/entities/category';

// import { storeToRefs } from 'pinia';
// import { useTransactionStore } from '@/stores/transaction';


//const transactions = inject<{ transactions: Ref<Transaction[]> }>('transaction')!.transactions;
// const transactionStore = useTransactionStore();
// const transactions = storeToRefs(transactionStore)

const transactions = ref<Transaction[]>([

])
const categories = ref<Category[]>([

])




fetch("http://localhost:3000/transactions")
  .then(response => response.json())
  .then(data => {
    transactions.value = data;
  })
  .catch(error => console.error(error));

fetch("http://localhost:3000/categories")
  .then(response => response.json())
  .then(data => {
    categories.value = data;
  })
  .catch(error => console.error(error));

const Total = computed(() => {
  return transactions.value.reduce((total, transaction) => total + BigInt(transaction.amount), 0n);
});





</script>

<style>
.new-transaction-btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
}

.new-transaction-btn:hover {
  background-color: #444;
}
</style>