<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <!-- the router-view component is a functional component that renders the matched component
  for the given path; it always render the content of the active page-->
  <!-- if we create an "a" tag the page would be refreshed,
  whereas the router-view would change the content of the page;
  in dev tools we can see that the router-view is an "a" tag, but
  it will intercept the click event so that browsers won't try to reload the page.
  Generally, we use the router-link tah for internal link and "a" tag for external links-->

  <!-- 
    - in src folder we write all the code that powers our app
    - the assets directory is where we put all of our assets that need processing (such as images)
    - in public directory we put the static assets that can be served as is
    - in the components directory we can store all of our vue components (except for page components)
    - in the views folder we put all the components that are individual pages (they are often times called views)
    - in the routes directory we have an index.js file in which we can see the router being installed and used
    - 
  -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
