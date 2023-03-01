Vue.createApp({

})
.component('todo-item',{
    /* in order to display the content that is passed in the slot, we have to assign a template */
    template: '#todo-item-template',
    data(){
        return{
            done: false
        }
    }
})
.mount('#app')