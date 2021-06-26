<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Thanks for signing up!"
      subtitle="You'll receive an email when the beta version of GymBet is ready to try."
      image="/uploads/gymhome.jpeg"
    ></site-hero>
    <main-section theme="one-column">
      <about-section />
    </main-section>
  </div>
</template>
<script>
import AboutSection from '~/components/AboutSection'
// import QuoteCard from '~/components/cards/QuoteCard'
// export default {
//   head() {
//     return {
//       title: `About | ${this.$siteConfig.siteName}`
//     }
//   },
//   components: { QuoteCard }
// }
//
export default {
  head() {
    return {
      title: `Thanks | ${this.$siteConfig.siteName}`
    }
  },
  components: { AboutSection }
}
</script>
