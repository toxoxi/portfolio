<template>
  <div class="container-top">
    <div class="section-wrapper">
      <hero-section />
      <about-section />
      <accounts-section />
      <public-works-section />
      <contact-section />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>© 2023 plant</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection'
import AboutSection from '~/components/AboutSection'
import AccountsSection from '~/components/AccountsSection'
import PublicWorksSection from '~/components/PublicWorksSection'
import ContactSection from '~/components/ContactSection'

export default {
  components: {
    HeroSection,
    AboutSection,
    AccountsSection,
    PublicWorksSection,
    ContactSection
  },
}
</script>

<style lang="scss" scoped>
.container-top {
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-flex-direction: column;
  flex-direction: column;
  
  .section-wrapper {
    max-width: 768px;
  }

  .section {
    padding-bottom: 2rem;
  }
}

.title {
  text-align: left;
}

.footer {
  width: 100%;
  padding: 7px 10px;
  background-color: #fff;
}
</style>
