<template>
    <table>
        <thead>
            <tr>
                <th colspan="5">
                    <h1>Historique de transaction</h1>
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <td>
                    <h2 style="white-space: nowrap;">Transaction nº</h2>
                </td>
                <td>
                    <h2>Description</h2>
                </td>
                <td>
                    <h2>Catégorie</h2>
                </td>

                <td>
                    <h2>Date</h2>
                </td>
                <td>
                    <h2>Montant</h2>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr id="historique" v-for="transaction in transactions" :key="transaction.id">
                <td>
                    {{ transaction.id }}
                </td>
                <td>
                    {{ transaction.description }}
                </td>
                <td>
                    {{ Categoryforeignkey(transaction.categoryId) }}
                </td>
                <td style="white-space: nowrap;">
                    {{ transaction.date }}
                </td>
                <td>
                    {{ ToEuro(transaction.amount) }}
                </td>
            </tr>

        </tbody>
    </table>
</template>
  
<script setup lang="ts">
import type { Transaction } from '@/entities/transaction';
import type { Category } from '@/entities/category';

const props = defineProps<{
    transactions: Transaction[],
    categories: Category[]
}>()

const ToDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR').format(date);
}

function Categoryforeignkey(categoryId: number) {
    const category = props.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
}

const ToEuro = (number: bigint) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(number) / 100);
}
</script>
  
<style>
table {
    border-collapse: collapse;

}

th {
    text-align: left;
    background-color: #333;
    color: #fff;
    padding: 10px;
}

#historique {
    text-align: right;
}

td {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>