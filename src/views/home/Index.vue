<template>
  <!-- Landing section -->
  <landingSection/>  

  <!-- SubscribeSection -->
  <SubscribeSection/>
  
  <!-- footer -->
  <Footer/>

</template>
<script>
import landingSection from './components/landingSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from '../../components/Footer';
export default {
  name: "Home",

  components: {
    landingSection,
    SubscribeSection,
    Footer
  },
}
</script>
