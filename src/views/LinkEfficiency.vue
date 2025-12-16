<template>
  <div class="container">
    <div class="header">
      <button class="back-btn" @click="router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        {{ t('common.back') }}
      </button>
      <h1 class="title">{{ t('linkEfficiency.title') }}</h1>
    </div>
    
    <div class="card">
      <h2 class="subtitle">{{ t('linkEfficiency.linkType') }}</h2>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" value="downlink" v-model="linkType" @change="onLinkTypeChange">
          {{ t('linkEfficiency.downlink') }}
        </label>
        <label class="radio-label">
          <input type="radio" value="uplink" v-model="linkType" @change="onLinkTypeChange">
          {{ t('linkEfficiency.uplink') }}
        </label>
      </div>
    </div>
    
    <div class="card">
      <h2 class="subtitle">{{ t('linkEfficiency.calcMode') }}</h2>
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" value="datarate" v-model="calcType" @change="onCalcTypeChange">
          {{ t('linkEfficiency.inputDataRate') }}
        </label>
        <label class="radio-label">
          <input type="radio" value="symbolrate" v-model="calcType" @change="onCalcTypeChange">
          {{ t('linkEfficiency.inputSymbolRate') }}
        </label>
      </div>
    </div>
    
    <div class="card">
      <h2 class="subtitle">{{ t('linkEfficiency.modcodSelect') }}</h2>
      <select v-model="selectedModcod" class="select-input" @change="showResult = false">
        <option v-for="modcod in currentModcods" :key="modcod" :value="modcod">
          {{ modcod }}
        </option>
      </select>
    </div>
    
    <div class="card" v-if="calcType === 'datarate'">
      <h2 class="subtitle">{{ t('linkEfficiency.inputDataRate') }}</h2>
      <div class="input-group">
        <label class="input-label">{{ t('linkEfficiency.dataRateLabel') }}</label>
        <input 
          class="input" 
          type="number" 
          v-model.number="inputDataRate" 
          :placeholder="t('linkEfficiency.dataRatePlaceholder')"
          @input="showResult = false"
        />
      </div>
    </div>
    
    <div class="card" v-if="calcType === 'symbolrate'">
      <h2 class="subtitle">{{ t('linkEfficiency.inputSymbolRate') }}</h2>
      <div class="input-group">
        <label class="input-label">{{ t('linkEfficiency.symbolRateLabel') }}</label>
        <input 
          class="input" 
          type="number" 
          v-model.number="inputSymbolRate" 
          :placeholder="t('linkEfficiency.symbolRatePlaceholder')"
          @input="showResult = false"
        />
      </div>
    </div>
    
    <button class="btn-primary" @click="calculate">{{ t('common.calculate') }}</button>
    
    <div class="card" v-if="showResult">
      <h2 class="subtitle">{{ t('linkEfficiency.results') }}</h2>
      <div class="result-group">
        <div class="result-item">
          <span class="result-label">{{ t('linkEfficiency.dataRate') }}</span>
          <span class="result-value">{{ result.dataRate }}</span>
        </div>
        <div class="result-item">
          <span class="result-label">{{ t('linkEfficiency.symbolRate') }}</span>
          <span class="result-value">{{ result.symbolRate }}</span>
        </div>
        <div class="result-item">
          <span class="result-label">{{ t('linkEfficiency.bandwidth') }}</span>
          <span class="result-value">{{ result.bandwidth }}</span>
        </div>
        <div class="result-item">
          <span class="result-label">{{ t('linkEfficiency.efficiency') }}</span>
          <span class="result-value">{{ result.efficiency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import calculator from '../utils/calculator'
import { useI18n } from '../utils/useI18n'

const router = useRouter()
const { t } = useI18n()

const linkType = ref('downlink')
const calcType = ref('datarate')
const selectedModcod = ref('')
const inputDataRate = ref('')
const inputSymbolRate = ref('')
const showResult = ref(false)
const result = ref({
  dataRate: '',
  symbolRate: '',
  bandwidth: '',
  efficiency: ''
})

const rollOffPercentage = calculator.getRollOffPercentage()

const currentModcods = computed(() => {
  return linkType.value === 'downlink' ? calculator.DOWNLINK_MODCODS : calculator.UPLINK_MODCODS
})

// Initialize selectedModcod
onMounted(() => {
  selectedModcod.value = currentModcods.value[0]
})

const onLinkTypeChange = () => {
  selectedModcod.value = currentModcods.value[0]
  showResult.value = false
}

const onCalcTypeChange = () => {
  showResult.value = false
}

const calculate = () => {
  if (calcType.value === 'datarate') {
    if (!inputDataRate.value) {
      alert(t('linkEfficiency.alertDataRate'))
      return
    }
    
    const dataRate = parseFloat(inputDataRate.value)
    const symbolRate = calculator.calculateSymbolRate(dataRate, selectedModcod.value)
    const bandwidth = calculator.calculateBandwidth(symbolRate)
    const efficiency = calculator.calculateEfficiency(dataRate, bandwidth)
    
    result.value = {
      dataRate: dataRate.toFixed(3) + " kbps",
      symbolRate: symbolRate.toFixed(3) + " ksps (-" + rollOffPercentage + "%)",
      bandwidth: bandwidth.toFixed(3) + " kHz (-" + rollOffPercentage + "%)",
      efficiency: efficiency.toFixed(3) + " bps/Hz"
    }
  } else {
    if (!inputSymbolRate.value) {
      alert(t('linkEfficiency.alertSymbolRate'))
      return
    }
    
    const symbolRate = parseFloat(inputSymbolRate.value)
    const dataRate = calculator.calculateDataRate(symbolRate, selectedModcod.value)
    const bandwidth = calculator.calculateBandwidth(symbolRate)
    const efficiency = calculator.calculateEfficiency(dataRate, bandwidth)
    
    result.value = {
      symbolRate: symbolRate.toFixed(3) + " ksps (-" + rollOffPercentage + "%)",
      dataRate: dataRate.toFixed(3) + " kbps",
      bandwidth: bandwidth.toFixed(3) + " kHz (-" + rollOffPercentage + "%)",
      efficiency: efficiency.toFixed(3) + " bps/Hz"
    }
  }
  showResult.value = true
}
</script>

<style scoped>
/* Scoped styles are mostly removed as they are now global in main.css */
</style>
