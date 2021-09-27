<template>
<main class="main" id="top">
  <!-- Navbar section -->
  <NavBar/>
  <!-- Landing section -->
  <section class="pb-6">
    <landingSection/>
  </section>  

  <!-- ourproduct section -->
  <section class="pt-4 pt-md-6">
    <OurProduct/>
  </section> 

  <!-- Ourclients section -->
  <section class="py-5 bg-100">
    <OurClients/>
  </section>
  

  <!-- Subscribe section -->
  <section class="py-5 z-index-1" style="margin-bottom: -10rem">
    <Subscribe/>
  </section>
  

  <!-- Footer Section-->
  <Footer/>
</main>
</template>
<script>
import landingSection from './components/landingSection';
import OurProduct from './components/OurProduct';
import OurClients from './components/OurClients';
import Subscribe from './components/Subscribe';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
export default {
  name: "Home",

  components: {
    landingSection,
    OurProduct,
    OurClients,
    Subscribe,
    Footer,
    NavBar,
  },
}
</script>
