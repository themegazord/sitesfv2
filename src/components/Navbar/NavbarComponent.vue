<script setup>
// import LogoSFAzul from '@/assets/icons/LogoSFAzul.vue'
import axios from 'axios'
import { RouterLink, useRoute } from 'vue-router'
import { computed, reactive, ref, watch } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

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

const { mobile } = useDisplay()

const isMobile = computed(() => mobile.value)

const drawer = ref(false)
const group = ref(null)

function envio() {
  const mensagem = encodeURI(
    `Olá 😊.$Fiquei interessado no seu sistema, poderia me contar um pouco mais sobre?`
  )

  window.open(
    `https://api.whatsapp.com/send?phone=5567999832455&text=${mensagem.replaceAll('$', '%0D')}`
  )
}

const download = async () => {
  try {
    const response = await axios({
      url: 'https://apidownload.jelastic.saveincloud.net/api/downloadAPK',
      method: 'GET',
      responseType: 'blob' // Importante para indicar que estamos esperando um blob de arquivo
    })

    const blob = new Blob([response.data], { type: response.data.type })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'safimobile.apk' // Nome do arquivo que será baixado
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Erro ao baixar o arquivo:', error)
  }
}

const items = reactive([
  { title: 'Inicio', value: 'inicio', route: '/', fn: null },
  { title: 'Módulos', value: 'modulos', route: '/modulos', fn: null },
  { title: 'Quem somos', value: 'quemsomos', route: '/quemsomos', fn: null },
  { title: 'Serviços e Soluções', value: 'sersol', route: '/solucoes', fn: null },
  { title: 'Parceiros', value: 'parceiros', route: '/parceiros', fn: null },
  { title: 'Baixe nosso app', value: 'download', route: null, fn: download },
  { title: 'Fale conosco', value: 'contato', route: null, fn: envio }
])

watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <nav :class="rotaAlternativa ? 'rotaalternativa' : ''" v-if="!isMobile">
    <img v-if="rotaAlternativa" src="@/assets/images/LogoAzul.png" alt="" class="logo" />
    <img v-else src="@/assets/images/Logo.png" alt="" class="logo" />
    <div class="navlinks">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/modulos">Módulos</RouterLink>
      <RouterLink to="/quemsomos">Quem somos</RouterLink>
      <RouterLink to="/solucoes">Serviços e Soluções</RouterLink>
      <RouterLink to="/parceiros">Parceiros</RouterLink>
      <v-btn @click="download">Baixe nosso app</v-btn>
      <v-btn @click="envio">Fale Conosco</v-btn>
    </div>
  </nav>
  <v-app-bar :elevation="0" v-if="isMobile" color="#1E1E1E">
    <template v-slot:append>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <img
          class="mx-2"
          src="@/assets/images/HamburguerMobile.png"
          style="height: 60%; width: 60%"
        />
      </v-app-bar-nav-icon>
    </template>

    <img class="mx-2" src="@/assets/images/Logo.png" style="height: 60%" />
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="lateral-navbar"
    v-if="isMobile"
  >
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <a :href="item.route" v-if="item.route != null" class="link-mobile">{{ item.title }}</a>
        <v-btn variant="tonal" @click="item.fn" v-if="item.fn != null" class="button-mobile">
          {{ item.title }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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

@media screen and (max-width: 820px) {
  .lateral-navbar {
    padding: 0;
  }

  .link-mobile {
    font-size: calc(1rem * 820 / 820);
    color: white;
    text-decoration: none;
  }

  .button-mobile {
    font-size: calc(1rem * 820 / 820);
    color: var(--azul-principal);
    background-color: white;
  }
}
@media screen and (max-width: 600px) {
  .link-mobile {
    font-size: calc(1rem * 600 / 820);
    color: white;
    text-decoration: none;
  }

  .button-mobile {
    font-size: calc(1rem * 600 / 820);
    color: var(--azul-principal);
    background-color: white;
  }
}
@media screen and (max-width: 400px) {
  .link-mobile {
    font-size: calc(1rem * 400 / 820);
    color: white;
    text-decoration: none;
  }

  .button-mobile {
    font-size: calc(1rem * 400 / 820);
    color: var(--azul-principal);
    background-color: white;
  }
}
@media screen and (max-width: 300px) {
  .link-mobile {
    font-size: calc(1rem * 300 / 820);
    color: white;
    text-decoration: none;
  }

  .button-mobile {
    font-size: calc(1rem * 300 / 820);
    color: var(--azul-principal);
    background-color: white;
  }
}
</style>