let BlogPostComponent = {
    props :['id'], // we assume that we get de id of the post in a prop
    data(){//and we want to fetch the actual post from the API to set it to the date
        return{
            blogPost: null,
        }
    },
    // to run the code when the component is created
   async  created(){
        const id = this.id;
        const response = await axois.get('api/post/${id}')
        // to get the response we make the created hook async
        // and await the return of the call made by axios
        // adn set the response to a variable
        this.blogPost = response.data
    }
}
// the hooks are functions like the data
// inside the hooks we have access to the component's instance through "this"