<script setup>
import { ref, computed } from 'vue'

	// two-way data binding = wheteher we're getting or setting the value of msg
  // everywhere is being use, msg will always stay in sync
const header = ref('Shopping List App') // reactive ref

// computed prop
//const characterCount = computed(() => {
//  return newItem.value.length
//})

const reversedItems = computed(() =>{
  return [...items.value].reverse()
})

const editing = ref(false)
const items = ref([
  {id:1, label:"10 party hats", purchased: true, highPriority:false},
  {id:2, label:"2 board games", purchased: true, highPriority:false},
  {id:3, label:"20 cups", purchased: false, highPriority:true}
  
  // item-1,2,3 are not indexes; these are the object keys
  /*{'item-1': {id:1, label:"10 party hats"},
  'item-2': {id:2, label:"2 board games"},
  'item-3': {id:3, label:"20 cups"}}*/
])
const newItem = ref("")
const newItemHighPriority = ref(false)
const iceCreamFlavours = ref([]) //an array
const saveItem = () => {
  items.value.push(
    {
      id: items.value.length + 1, 
      label: newItem.value,
      highPriority: newItemHighPriority.value
    })
  newItem.value = ""
  newItemHighPriority.value = ""
}
// we have to use .value, because vue uses proxies in order to create reactive data; this works great for data structures such as arrays and objects; however, that's not the case for primitve types such as string, numbers and booleans;
// so, we use .value when we're referencing reactive ref
const doEdit = (e) =>{
  editing.value = e
  newItem.value = ""
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}
</script>

<!-- v-model directive makes it easy to bind reactive data to a form input
modifiers can alter the behaviour of v-model -->

<template>
  <!-- we can evaluate one expression at a time; so we can not write ";msg=""
and cannot declare variables or return
but we can use ternary statement -->
  <div class="header">
  	<h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
     <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add item
    </button>
  </div>
  
  <!--<a v-bind:href="newItem">Dynamic link</a>-->
  <form class="add-item-form"
        v-if="editing" 
        @submit.prevent="saveItem"
        >
    <input
           v-model.trim="newItem" 
           type="text" 
           placeholder="Add an item">
    <!-- v-if toggles the existence of the element on the page-->
    <!-- we use vue's key modifiers to explicity target the enter key
 v-on:keyup.enter=...
but we've added form tag so we'll use the submit event
we also use .prevent to prevent the page from refreshing-->
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      High priority
    </label>
   <button 
      :disabled="newItem.length < 5"
      class="btn btn-primary"
    >
      Save Item
    </button> 
  </form>
  <!--p class="counter">
    {{characterCount}}/200
  </p-->
  <!--<label>
    Priority:
    <select v-model="newItemPriority">
      <option value="low">Low</option> 
      <option value="high">High</option>
    </select>
  </label>-->
  <!--<label>
  	<input type="radio" v-model="newItemPriority" value="low">
    Low
  </label>
   <label>
  	<input type="radio" v-model="newItemPriority" value="high">
     High
  </label>-->
  <br/>
  <!--<label>
    <input type="checkbox" value="vanilla"
           v-model="iceCreamFlavours">Vanilla
  </label>
  <label>
    <input type="checkbox" value="chocolate"
           v-model="iceCreamFlavours">Chocolate
  </label>
  <label>
    <input type="checkbox" value="strawberry"
           v-model="iceCreamFlavours">Strawberry
  </label>-->
  <ul>
    <!-- object syntax -->
    <li v-for="(item, index) in reversedItems" 
        @click="togglePurchased(item)"
        :key="item.id"
        class="static-class"
        :class="{
                strikeout: item.purchased,
                priority: item.highPriority
                }"
        >
      <!--{{index}}-->
      {{item.label}}
    </li>
    
    <!--li v-for="({id, label, purchased, highPriority}, index) in items" 
        @click="togglePurchased(items[index])"
        :key="id"
        class="static-class"
        :class="{
                strikeout: purchased,
                priority: highPriority
                }"
        -->
    <!-- array syntax -->
    <!--<li v-for="({id, label, purchased}, index) in items" 
        :key="id"
        class="static-class"
        :class="[purchased ? 'strikeout text-gray' : 'underlined',
                highPriority ? 'priority' : '']">
     -- provides another class(underline) when purchased is false
      {{label}}
    </li>-->
    <p v-if="!items.length">
      Nothing
    </p>
    <!-- we have to add ":" before "key", because we added the id
 and this is called attribute binding -->
    <!-- ID IS NOT THE SAME AS INDEX; if we want to display the object keys in the page we add ({...}, index)-->
  </ul>
</template>