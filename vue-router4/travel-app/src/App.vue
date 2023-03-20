<template>
  <TheNavigation/>
  <div class="container">
    <router-view></router-view>
  </div>

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

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default {
  components: { TheNavigation }
}
</script>
