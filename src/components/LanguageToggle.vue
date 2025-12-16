<template>
  <button class="language-toggle" @click="toggleLanguage" :aria-label="t('common.language.switch')">
    <span class="language-text">{{ locale === 'zh' ? 'EN' : '中' }}</span>
  </button>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from '../utils/useI18n'

const { t, locale, setLocale, initLanguage } = useI18n()

onMounted(() => {
  initLanguage()
})

const toggleLanguage = () => {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}
</script>

<style scoped>
.language-toggle {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px var(--shadow-color);
  transition: all 0.3s ease;
  z-index: 1000;
  color: var(--text-color);
  font-weight: bold;
  font-size: 14px;
}

.language-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px var(--shadow-color);
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.language-toggle:active {
  transform: scale(0.95);
}

.language-text {
  transition: transform 0.3s ease;
  user-select: none;
}

.language-toggle:hover .language-text {
  transform: scale(1.1);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .language-toggle {
    top: 64px;
    right: 10px;
    width: 44px;
    height: 44px;
    font-size: 13px;
  }
}
</style>
