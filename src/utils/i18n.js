// 中文翻译
export const zh = {
    // 通用
    common: {
        back: '返回',
        calculate: '计算',
        convert: '转换',
        theme: {
            light: '切换到浅色模式',
            dark: '切换到暗色模式'
        },
        language: {
            switch: '切换语言',
            zh: '中文',
            en: 'English'
        }
    },

    // 首页
    home: {
        title: '链路参数计算器',
        features: '主要功能',
        linkEfficiency: '链路效率计算',
        powerConverter: '功放功率换算',
        intro: '功能介绍',
        introText1: '1. 链路效率计算：根据不同链路类型（上行/下行）计算数据速率、符号速率、占用带宽及利用效率。',
        introText2: '2. 功放功率换算：在 Watts 和 dBm 两种单位之间进行功率值转换。'
    },

    // 链路效率计算
    linkEfficiency: {
        title: '链路效率计算',
        linkType: '链路类型',
        downlink: '下行链路',
        uplink: '上行链路',
        calcMode: '计算方式',
        inputDataRate: '输入数据速率',
        inputSymbolRate: '输入符号速率',
        modcodSelect: 'MODCOD 选择',
        dataRateLabel: '数据速率 (kbps)',
        dataRatePlaceholder: '请输入数据速率',
        symbolRateLabel: '符号速率 (ksps)',
        symbolRatePlaceholder: '请输入符号速率',
        results: '计算结果',
        dataRate: '数据速率 (datarate)：',
        symbolRate: '符号速率 (symbolrate)：',
        bandwidth: '占用带宽 (bandwidth)：',
        efficiency: '链路效率 (efficiency)：',
        alertDataRate: '请输入数据速率',
        alertSymbolRate: '请输入符号速率'
    },

    // 功放功率换算
    powerConverter: {
        title: '功放功率换算',
        conversionType: '转换类型',
        wattsTodBm: 'Watts 转 dBm',
        dBmToWatts: 'dBm 转 Watts',
        inputPower: '输入功率',
        powerWatts: '功率 (W)',
        powerdBm: '功率 (dBm)',
        placeholder: '请输入功率值',
        results: '转换结果',
        bucOutput: 'BUC 输出功率为：',
        alertWatts: '请输入功率(W)',
        alertdBm: '请输入功率(dBm)'
    }
}

// 英文翻译
export const en = {
    // Common
    common: {
        back: 'Back',
        calculate: 'Calculate',
        convert: 'Convert',
        theme: {
            light: 'Switch to Light Mode',
            dark: 'Switch to Dark Mode'
        },
        language: {
            switch: 'Switch Language',
            zh: '中文',
            en: 'English'
        }
    },

    // Home
    home: {
        title: 'Link Parameter Calculator',
        features: 'Main Features',
        linkEfficiency: 'Link Efficiency Calculator',
        powerConverter: 'Power Amplifier Converter',
        intro: 'Features',
        introText1: '1. Link Efficiency Calculator: Calculate data rate, symbol rate, bandwidth and efficiency based on different link types (uplink/downlink).',
        introText2: '2. Power Amplifier Converter: Convert power values between Watts and dBm units.'
    },

    // Link Efficiency
    linkEfficiency: {
        title: 'Link Efficiency Calculator',
        linkType: 'Link Type',
        downlink: 'Downlink',
        uplink: 'Uplink',
        calcMode: 'Calculation Mode',
        inputDataRate: 'Input Data Rate',
        inputSymbolRate: 'Input Symbol Rate',
        modcodSelect: 'MODCOD Selection',
        dataRateLabel: 'Data Rate (kbps)',
        dataRatePlaceholder: 'Enter data rate',
        symbolRateLabel: 'Symbol Rate (ksps)',
        symbolRatePlaceholder: 'Enter symbol rate',
        results: 'Results',
        dataRate: 'Data Rate:',
        symbolRate: 'Symbol Rate:',
        bandwidth: 'Bandwidth:',
        efficiency: 'Efficiency:',
        alertDataRate: 'Please enter data rate',
        alertSymbolRate: 'Please enter symbol rate'
    },

    // Power Converter
    powerConverter: {
        title: 'Power Amplifier Converter',
        conversionType: 'Conversion Type',
        wattsTodBm: 'Watts to dBm',
        dBmToWatts: 'dBm to Watts',
        inputPower: 'Input Power',
        powerWatts: 'Power (W)',
        powerdBm: 'Power (dBm)',
        placeholder: 'Enter power value',
        results: 'Results',
        bucOutput: 'BUC Output Power:',
        alertWatts: 'Please enter power (W)',
        alertdBm: 'Please enter power (dBm)'
    }
}

export default { zh, en }
