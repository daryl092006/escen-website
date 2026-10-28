<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
    <NuxtLink to="/" aria-label="Accueil ESCEN"><WebsiteLogo /></NuxtLink>
    <h1 class="text-2xl font-bold">Espace étudiant ESCEN</h1>
    <p>Accédez à votre scolarité et à vos documents dans le portail sécurisé.</p>
    <a href="https://portail.escen.university/connexion" class="px-6 py-3 rounded-xl bg-[#01b4d5] text-white font-bold">Ouvrir le portail ESCEN</a>
    <NuxtLink to="/">Revenir au site ESCEN</NuxtLink>
  </main>
</template>
<script setup>
definePageMeta({ layout: false })
</script>
