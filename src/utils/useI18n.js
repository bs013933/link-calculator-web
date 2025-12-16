import { ref, computed } from 'vue'
import translations from './i18n'

// 当前语言（响应式）
const currentLocale = ref('zh')

// 初始化语言设置
const initLanguage = () => {
    // 从localStorage读取保存的语言偏好
    const savedLocale = localStorage.getItem('locale')

    if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
        currentLocale.value = savedLocale
    } else {
        // 检测浏览器语言
        const browserLang = navigator.language || navigator.userLanguage
        currentLocale.value = browserLang.startsWith('zh') ? 'zh' : 'en'
    }
}

// 切换语言
const setLocale = (locale) => {
    if (locale === 'zh' || locale === 'en') {
        currentLocale.value = locale
        localStorage.setItem('locale', locale)
    }
}

// 获取翻译文本的辅助函数
const getNestedProperty = (obj, path) => {
    return path.split('.').reduce((prev, curr) => prev?.[curr], obj)
}

// useI18n composable
export const useI18n = () => {
    const t = (key) => {
        const translation = getNestedProperty(translations[currentLocale.value], key)
        return translation || key
    }

    const locale = computed(() => currentLocale.value)

    return {
        t,
        locale,
        setLocale,
        initLanguage
    }
}

export default useI18n
