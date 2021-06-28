<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      :title="$siteConfig.indexh1"
      :subtitle="subtitle"
      :image="featureImage"
    >
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Sign Up For Early Access
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <about-section />
        <br />
        <contact-form id="contact" />
        <!-- All Posts -->
        <!-- <posts-grid /> -->
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import AboutSection from '../components/AboutSection'
import ContactForm from '~/components/ContactForm'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    AboutSection,
    ContactForm,
    NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
