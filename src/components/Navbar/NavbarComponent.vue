<script setup>
// import LogoSFAzul from '@/assets/icons/LogoSFAzul.vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const rotasNavbarAlternativo = [
  'solucoes',
  'barrestaurante',
  'supermerc',
  'roupacalcado',
  'autoelecoficina',
  'discconv',
  'fabpeqporte',
  'confeccoes',
  'eventos',
  'licitacoes',
  'parceiros'
]
const rotaAlternativa = rotasNavbarAlternativo.includes(route.name)

function envio() {
  const mensagem = encodeURI(
    `Olá 😊.$Fiquei interessado no seu sistema, poderia me contar um pouco mais sobre?`
  )

  window.open(
    `https://api.whatsapp.com/send?phone=5567999832455&text=${mensagem.replaceAll('$', '%0D')}`
  )
}
</script>

<template>
  <nav :class="rotaAlternativa ? 'rotaalternativa' : ''">
    <img v-if="rotaAlternativa" src="@/assets/images/LogoAzul.png" alt="" class="logo" />
    <img v-else src="@/assets/images/Logo.png" alt="" class="logo" />
    <div class="navlinks">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/modulos">Módulos</RouterLink>
      <RouterLink to="/quemsomos">Quem somos</RouterLink>
      <RouterLink to="/solucoes">Serviços e Soluções</RouterLink>
      <RouterLink to="/parceiros">Parceiros</RouterLink>
      <v-btn @click="envio">Fale Conosco</v-btn>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: #1e1e1e;
}

.navlinks {
  display: flex;
  align-items: center;
}

.navlinks a {
  color: white;
  text-decoration: none;
  font-family: Nunito, sans-serif;
}

nav .linkativo {
  text-decoration: underline;
}

nav .linkativo::before {
  content: '';
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  background-color: var(--azul-principal);
  border-radius: 50%;
}

.navlinks button {
  color: var(--azul-principal);
  font-family: Nunito, sans-serif;
  font-weight: 700;
}

.navlinks button:hover {
  cursor: pointer;
}

.navlinks a:hover {
  text-decoration: underline;
}

.rotaalternativa {
  background-color: #fff;
}

.rotaalternativa .navlinks a {
  color: #4f4f50;
  font-weight: 600;
}

.rotaalternativa .navlinks button {
  background-color: var(--azul-principal);
  color: white;
}

@media screen and (max-width: 2560px) {
  nav {
    padding: calc(1rem * 2560 / 1440) calc(5rem * 2560 / 1440);
  }

  .logo {
    width: calc(4.5rem * 2560 / 1920);
    height: calc(3.5rem * 2560 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 2560 / 1440);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 2560 / 1920);
    margin-right: calc(5px * 2560 / 1920);
    width: calc(10px * 2560 / 1920);
    height: calc(10px * 2560 / 1920);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 2560 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 2560 / 1440);
    height: calc(2.25rem * 2560 / 1920);
  }
}
@media screen and (max-width: 1920px) {
  nav {
    padding: calc(1rem * 1920 / 1440) calc(5rem * 1920 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1920 / 1920);
    height: calc(3.5rem * 1920 / 1920);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1920 / 1920);
    margin-right: calc(5px * 1920 / 1920);
    width: calc(10px * 1920 / 1920);
    height: calc(10px * 1920 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1920 / 1440);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1920 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 1920 / 1440);
    height: calc(2.25rem * 1920 / 1920);
  }
}
@media screen and (max-width: 1600px) {
  nav {
    padding: calc(1rem * 1600 / 1440) calc(5rem * 1600 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1600 / 1920);
    height: calc(3.5rem * 1600 / 1920);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1600 / 1920);
    margin-right: calc(5px * 1600 / 1920);
    width: calc(10px * 1600 / 1920);
    height: calc(10px * 1600 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1600 / 1440);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1600 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 1600 / 1440);
    height: calc(2.25rem * 1600 / 1920);
  }
}
@media screen and (max-width: 1440px) {
  nav {
    padding: calc(1rem * 1440 / 1440) calc(5rem * 1440 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1440 / 1920);
    height: calc(3.5rem * 1440 / 1920);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1440 / 1920);
    margin-right: calc(5px * 1440 / 1920);
    width: calc(10px * 1440 / 1920);
    height: calc(10px * 1440 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1440 / 1440);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1440 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 1440 / 1440);
    height: calc(2.25rem * 1440 / 1920);
  }
}
@media screen and (max-width: 1366px) {
  nav {
    padding: calc(1rem * 1366 / 1440) calc(5rem * 1366 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1366 / 1920);
    height: calc(3.5rem * 1366 / 1920);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1366 / 1920);
    margin-right: calc(5px * 1366 / 1920);
    width: calc(10px * 1366 / 1920);
    height: calc(10px * 1366 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1366 / 1440);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1366 / 1920);
  }

  .navlinks button {
    height: calc(2.25rem * 1366 / 1920);
    padding: 0 calc(3rem * 1366 / 1440);
  }
}
@media screen and (max-width: 1280px) {
  nav {
    padding: calc(1rem * 1280 / 1440) calc(5rem * 1280 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1280 / 1920);
    height: calc(3.5rem * 1280 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1280 / 1440);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1280 / 1920);
    margin-right: calc(5px * 1280 / 1920);
    width: calc(10px * 1280 / 1920);
    height: calc(10px * 1280 / 1920);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1280 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 1280 / 1440);
    height: calc(2.25rem * 1280 / 1920);
  }
}
@media screen and (max-width: 1024px) {
  nav {
    padding: calc(1rem * 1024 / 1440) calc(5rem * 1024 / 1440);
  }

  .logo {
    width: calc(4.5rem * 1024 / 1920);
    height: calc(3.5rem * 1024 / 1920);
  }

  nav .linkativo::before {
    margin-bottom: calc(10px * 1024 / 1920);
    margin-right: calc(5px * 1024 / 1920);
    width: calc(10px * 1024 / 1920);
    height: calc(10px * 1024 / 1920);
  }

  .navlinks {
    gap: calc(2rem * 1024 / 1440);
  }

  .navlinks a,
  .navlinks button {
    font-size: calc(1rem * 1024 / 1920);
  }

  .navlinks button {
    padding: 0 calc(3rem * 1024 / 1440);
    height: calc(2.25rem * 1024 / 1920);
  }
}
</style>