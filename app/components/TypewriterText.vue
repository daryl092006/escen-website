<template>
  <span class="typewriter-container">
    <span ref="textElement" class="typewriter-text" :class="{ 'has-cursor': showCursor }">
      {{ displayedText }}
    </span>
    <span v-if="showCursor && !isComplete" class="typing-cursor" :style="{ animationDelay: cursorDelay + 'ms' }"></span>
  </span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  },
  speed: {
    type: Number,
    default: 50 // vitesse en ms par caractère
  },
  showCursor: {
    type: Boolean,
    default: true
  },
  cursorDelay: {
    type: Number,
    default: 500
  }
})

const displayedText = ref('')
const isComplete = ref(false)
let timeoutId = null
let intervalId = null

const startTyping = () => {
  // Attendre le délai initial
  timeoutId = setTimeout(() => {
    let index = 0
    displayedText.value = ''
    
    // Commencer à écrire caractère par caractère
    intervalId = setInterval(() => {
      if (index < props.text.length) {
        displayedText.value += props.text.charAt(index)
        index++
      } else {
        clearInterval(intervalId)
        isComplete.value = true
      }
    }, props.speed)
  }, props.delay)
}

const resetTyping = () => {
  // Nettoyer les anciens timers
  if (timeoutId) clearTimeout(timeoutId)
  if (intervalId) clearInterval(intervalId)
  
  displayedText.value = ''
  isComplete.value = false
  
  // Redémarrer le typing
  startTyping()
}

onMounted(() => {
  startTyping()
})

// Réagir aux changements de texte (quand le slide change)
watch(() => props.text, () => {
  resetTyping()
})
</script>

<style scoped>
.typewriter-container {
  display: inline-block;
  position: relative;
}

.typewriter-text {
  display: inline;
  white-space: pre-wrap;
  word-break: break-word;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: currentColor;
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>