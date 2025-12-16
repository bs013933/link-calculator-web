<template>
  <div class="container">
    <div class="header">
      <button class="back-btn" @click="router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        {{ t('common.back') }}
      </button>
      <h1 class="title">{{ t('powerConverter.title') }}</h1>
    </div>
    
    <div class="card">
      <h2 class="subtitle">{{ t('powerConverter.conversionType') }}</h2>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" value="wattsTodBm" v-model="convertType" @change="onConvertTypeChange">
          {{ t('powerConverter.wattsTodBm') }}
        </label>
        <label class="radio-label">
          <input type="radio" value="dBmToWatts" v-model="convertType" @change="onConvertTypeChange">
          {{ t('powerConverter.dBmToWatts') }}
        </label>
      </div>
    </div>
    
    <div class="card" v-if="convertType === 'wattsTodBm'">
      <h2 class="subtitle">{{ t('powerConverter.inputPower') }}</h2>
      <div class="input-group">
        <label class="input-label">{{ t('powerConverter.powerWatts') }}</label>
        <input 
          class="input" 
          type="number" 
          v-model.number="inputWatts" 
          :placeholder="t('powerConverter.placeholder')"
          @input="showResult = false"
        />
      </div>
    </div>
    
    <div class="card" v-if="convertType === 'dBmToWatts'">
      <h2 class="subtitle">{{ t('powerConverter.inputPower') }}</h2>
      <div class="input-group">
        <label class="input-label">{{ t('powerConverter.powerdBm') }}</label>
        <input 
          class="input" 
          type="number" 
          v-model.number="inputDBm" 
          :placeholder="t('powerConverter.placeholder')"
          @input="showResult = false"
        />
      </div>
    </div>
    
    <button class="btn-primary" @click="convert">{{ t('common.convert') }}</button>
    
    <div class="card" v-if="showResult">
      <h2 class="subtitle">{{ t('powerConverter.results') }}</h2>
      <div class="result-group">
        <div class="result-item">
          <span class="result-label">{{ t('powerConverter.bucOutput') }}</span>
          <span class="result-value">{{ result.value }} {{ result.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import calculator from '../utils/calculator'
import { useI18n } from '../utils/useI18n'

const router = useRouter()
const { t } = useI18n()

const convertType = ref('wattsTodBm')
const inputWatts = ref('')
const inputDBm = ref('')
const showResult = ref(false)
const result = ref({
  value: '',
  unit: ''
})

const onConvertTypeChange = () => {
  showResult.value = false
}

const convert = () => {
  if (convertType.value === 'wattsTodBm') {
    if (!inputWatts.value && inputWatts.value !== 0) {
      alert(t('powerConverter.alertWatts'))
      return
    }
    
    const watts = parseFloat(inputWatts.value)
    const dBm = calculator.wattsTodBm(watts)
    
    result.value = {
      value: dBm.toFixed(2),
      unit: "dBm"
    }
  } else {
    if (!inputDBm.value && inputDBm.value !== 0) {
      alert(t('powerConverter.alertdBm'))
      return
    }
    
    const dBm = parseFloat(inputDBm.value)
    const watts = calculator.dBmToWatts(dBm)
    
    result.value = {
      value: watts.toFixed(5),
      unit: "W"
    }
  }
  showResult.value = true
}
</script>

<style scoped>
/* Scoped styles are mostly removed as they are now global in main.css */
</style>
