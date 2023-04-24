import type { Transaction } from '@/entities/transaction';
import { ref } from 'vue'
import type { Category } from '@/entities/category';
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', () => {

    const transactions = ref<Transaction[]>([

    ])

    function addTransaction(new_date: string, description: string, amount: number, new_category: Category) {
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
    return { addTransaction, transactions }

})