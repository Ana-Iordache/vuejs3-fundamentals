Vue.createApp({

})
.component('click-counter', {
    template:'#click-counter-template', //'<button @click="count++">{{count}}</button>',
    data(){
        return {
            count: 0
        }
    }
})
.mount('#app')
// components are made to be reusable and thus, they are not bound to the markup
// the data is not an object, a component's data must be a function that returns an object =>
// each instance of the component can maintain an independent copy of the returned data object

// instead of having a template -> string, we can add a script in html file; and here we'll use a css selector