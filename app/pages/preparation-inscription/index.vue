<template>
  <div><NuxtLink to="/inscription">Accéder au formulaire d’inscription</NuxtLink></div>
</template>

<script setup>
definePageMeta({
  middleware: () => navigateTo('/inscription', { redirectCode: 301 }),
})
</script>
