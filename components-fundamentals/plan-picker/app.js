Vue.createApp({
    data(){
        return{
            plans:['The Single', 'The Curious', 'The Addict']
        }
    }
})
.component('plan',{
    template:'#plan-template',
    // props: ['name']
    props: {
        name: {type:String, default: 'The Single', required:true},
        price: Number
    }
    // in this way we wil get warning/error if we pass an incorrect type
})
.mount('#app')