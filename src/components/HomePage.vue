<template>
  <div>
    <Navbar />
    <Intro />
    <Features />
    <Stats />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./HomePageComponents/Navbar";
import Intro from "./HomePageComponents/Intro";
import Features from "./HomePageComponents/Features";
import Stats from "./HomePageComponents/Stats";
import Footer from "./HomePageComponents/Footer";

export default {
  name: "HomePage",

  components: {
    Navbar,
    Intro,
    Features,
    Stats,
    Footer
  },

  data: () => ({})
};
</script>
