
import type { Category } from '@/entities/category';
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {

  const categories = ref<Category[]>([

  ])

  function addCategory(name: string): void {
    categories.value.push({
      id: 1,
      name: name
    }


    );


  };

})