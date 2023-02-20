// local component
let PlanComponent = {
    template:'#plan-template',
    // props: ['name']
    props: {
        name: {type:String, default: 'The Single', required:true},
        price: Number
    }
    // in this way we wil get warning/error if we pass an incorrect type
}

const app = Vue.createApp({
    
})
// global registration -> makes the components globally available in the app
// the problem is, if you are using a build system like Vite, globbally reg means even if you stop using a component, it will still be included in the final bundle
// => unnecessarily increases the amount of Javascript the users have to download

// so, we are creating a variable which will be the childer of this component
// and here we will use the components option to register the plan locally
// now we cannot use the plan component outside the plan-picker's template
.component('plan-picker',{
    components:{plan: PlanComponent},
    template:'#plan-picker-template',
    data(){
        return{
            plans:['The Single', 'The Curious', 'The Addict']
        }
    }
})
.mount('#app')