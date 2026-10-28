// Candidate authentication belongs to the connected portal.
export default defineNuxtRouteMiddleware(to => {
  if (to.path === '/candidat' || to.path.startsWith('/candidat/')) return navigateTo('/connexion', { redirectCode: 301 });
});
