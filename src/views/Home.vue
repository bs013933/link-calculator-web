<template>
  <div class="container">
    <h1 class="title" style="margin-bottom: 30px;">{{ t('home.title') }}</h1>
    
    <div class="card">
      <h2 class="subtitle">{{ t('home.features') }}</h2>
      <div class="button-group">
        <button class="btn-primary" @click="navigateToLinkEfficiency">{{ t('home.linkEfficiency') }}</button>
        <button class="btn-primary" @click="navigateToPowerConverter">{{ t('home.powerConverter') }}</button>
      </div>
    </div>
    
    <div class="card">
      <h2 class="subtitle">{{ t('home.intro') }}</h2>
      <div class="description">
        <p>{{ t('home.introText1') }}</p>
        <p class="mt-2">{{ t('home.introText2') }}</p>
      </div>
    </div>

    <div class="footer-link">
      <a href="https://tierhive.com/r/E09E0C8C39A6" target="_blank" rel="noopener noreferrer">Checkout TierHive for your Hourly VPS</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from '../utils/useI18n'

const router = useRouter()
const { t } = useI18n()

const navigateToLinkEfficiency = () => {
  router.push('/link-efficiency')
}

const navigateToPowerConverter = () => {
  router.push('/power-converter')
}
</script>

<style scoped>
.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.description {
  font-size: 14px;
  color: var(--text-color);
  line-height: 1.6;
}

.mt-2 {
  margin-top: 10px;
}

.footer-link {
  margin-top: auto;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
}

.footer-link a {
  color: var(--primary-color);
  text-decoration: underline;
  transition: opacity 0.3s;
}

.footer-link a:hover {
  opacity: 0.8;
}
</style>
