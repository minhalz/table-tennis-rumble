import rules from '@/content/rules'

let voice
if (process.client) {
    window.speechSynthesis.onvoiceschanged = function () {
        const voices = window.speechSynthesis.getVoices()
        voice = voices[2]
    }
}

export function getRandomNumber(min, max) {
    if (max === 0) {
        return Math.round(Math.random())
    }
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRule() {
    const random = getRandomNumber(0, rules.length - 1)
    return rules[random]
}

export function sayLine(line) {
    const utterance = new SpeechSynthesisUtterance(line)
    utterance.voice = voice
    speechSynthesis.speak(utterance)
}
