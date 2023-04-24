<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import type { Transaction } from '@/entities/transaction';
import type { Category } from '@/entities/category';


const transactions = ref<Transaction[]>([

])

const categories = ref<Category[]>([

])


function addTransaction(new_date: string, description: string, amount: number, new_category: number) {
  var new_id: number
  if (transactions.value.length == 0) {
    new_id = 1
  }
  else {
    new_id = Math.max(...transactions.value.map(t => t.id)) + 1
  }
  transactions.value.push({

    id: new_id,
    description: description,
    date: new Date(new_date),
    amount: BigInt(amount * 100),
    categoryId: new_category
  });

};

provide('transaction', {
  transactions: transactions,
  addTransaction: addTransaction
})

function addCategory(name: string): void {
  var new_id: number
  if (categories.value.length == 0) {
    new_id = 1
  }
  else {
    new_id = Math.max(...categories.value.map(t => t.id)) + 1
  }
  categories.value.push({
    id: new_id,
    name: name
  }


  );


};

provide('category', {
  categories: categories,
  addCategory: addCategory,

})


</script>

<style >
#solde {
  background-color: #333;
  border-bottom: 3px #ffffff solid;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
  padding: 10px;

}
</style>
