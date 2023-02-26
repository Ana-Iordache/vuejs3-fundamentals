// local component
let PlanComponent = {
    template:'#plan-template',
    // props: ['name']
    props: {
        name: {type:String, required: true},
        selected: {type: Boolean, defaulf: false}, // for the parent can tell the plan if it's selected or not
    },
    // in this way we wil get warning/error if we pass an incorrect type
    // data(){
    //     return{
    //         selected: false, //define if the plan is selected or not

    //     }
    // },
    methods: {
        // to update the selected data
        // we're calling it when the use click on the plan --> @click in html
        select(){
            // this.selected = true; 
            this.$emit('select', this.name);
            // the first argument is the name of the event we want to emit-> it can have any name
            // we inspect all the emitted events inside of the timeline tab (vue devtools)
            // the second argument is the data that we want to pass along with the event (it's optional)
            // we'll transmit the name of the current plan selected for the parent to know which plan got selected
            // the event data is often called the payload (this.name in this case)
        }
    }
}

// now that we've transformed both components in local comp, we won't need the global registration
let PlanPickerComponent = {
    components:{plan: PlanComponent},
    template:'#plan-picker-template',
    data(){
        return{
            plans:['The Single', 'The Curious', 'The Addict'],
            selectedPlan: null //also, we add the selectPlan method that will receive the plan coming from the event's payload
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        }
    }
}

const app = Vue.createApp({
    components: {PlanPicker: PlanPickerComponent}
})
// global registration -> makes the components globally available in the app
// the problem is, if you are using a build system like Vite, globbally reg means even if you stop using a component, it will still be included in the final bundle
// => unnecessarily increases the amount of Javascript the users have to download

// so, we are creating a variable which will be the children of this component
// and here we will use the components option to register the plan locally
// now we cannot use the plan component outside the plan-picker's template
// .component('plan-picker',{
//     // components:{plan: PlanComponent},
// })
.mount('#app')

// Passing data between child and parent
// - we can pass data to child components using props
//