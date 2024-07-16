
<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import LogoSFAzul from '@/assets/icons/LogoSFAzul.vue'
import WhatsappIcon from '@/assets/icons/WhatsappIcon.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import SuculentaHomeIcon from '@/assets/icons/SuculentaHomeIcon.vue'
import TijoloHomeIcon from '@/assets/icons/TijoloHomeIcon.vue'

const alturaTela = ref(window.innerHeight)

const atualizaAlturaTela = () => {
  alturaTela.value = window.innerHeight
}

const { mobile } = useDisplay()

const isMobile = computed(() => mobile.value)

onMounted(() => {
  window.addEventListener('resize', atualizaAlturaTela)
})

onUnmounted(() => {
  window.removeEventListener('resize', atualizaAlturaTela)
})

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
  <NavbarComponent v-if="!isMobile" />
  <main v-if="!isMobile">
    <div class="container">
      <div class="container-left">
        <h1>
          Facilite o <span>processo de gestão</span> da sua empresa com nossa solução de alto padrão
        </h1>
        <h4>
          A SF Sistemas é uma empresa com soluções sistêmicas para facilitar a gestão da sua empresa
          de forma prática, fácil, com ótima relação custo benefício, aliando sempre a qualidade e
          profissionalismo.
        </h4>
        <div class="botoes">
          <v-btn size="large" @click="envio">Fale Conosco</v-btn>
          <RouterLink :to="{ name: 'solucoes' }">
            <v-btn size="large">Saiba Mais</v-btn>
          </RouterLink>
        </div>
      </div>
      <div class="container-right">
        <img src="@/assets/images/HomeImgRight.png" alt="" />
      </div>
    </div>
  </main>
  <div class="footer" v-if="!isMobile">
    <WhatsappIcon class="whatsapp-icon" @click="envio" />
    <div class="subfooter">
      <div class="subfooter-left">
        <LogoSFAzul />
        <p>Soluções sistêmicas de alto padrão para sua empresa!</p>
      </div>
      <div class="subfooter-right">
        <div class="guias">
          <p>Quem somos</p>
          <RouterLink to="/parceiros">Clientes</RouterLink>
          <RouterLink to="/solucoes">Portfólio</RouterLink>
          <p>Politica e Privacidade</p>
        </div>
        <div class="endereco">
          <p>Endereço</p>
          <span><b>R.Mal Candido Mariano, 332</b></span>
          <span><b>1º Andar - Sala 2</b></span>
          <span><b>Campo Grande - MS</b></span>
          <span>(67) 9 9983-2455</span>
        </div>
        <div class="social">
          <v-btn size="x-small" icon="fa-brands fa-facebook-f"></v-btn>
          <v-btn size="x-small" icon="fa-brands fa-instagram"></v-btn>
          <v-btn size="x-small" icon="fa-brands fa-linkedin"></v-btn>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>

  <v-layout v-if="isMobile">
    <NavbarComponent />
    <v-main>
      <div class="container">
        <div class="container-top">
          <SuculentaHomeIcon class="cacto" />
          <TijoloHomeIcon class="tijolo" />
          <h1>
            Facilite o <span>processo de gestão</span> da sua empresa com nossa solução de alto
            padrão
          </h1>
          <h4>
            A SF Sistemas é uma empresa com soluções sistêmicas para facilitar a gestão da sua
            empresa de forma prática, fácil, com ótima relação custo benefício, aliando sempre a
            qualidade e profissionalismo.
          </h4>
          <div class="botoes">
            <button @click="envio">Fale Conosco</button>
            <RouterLink :to="{ name: 'solucoes' }">
              <button>Saiba Mais</button>
            </RouterLink>
          </div>
        </div>
        <img src="@/assets/images/Mobile/Home/Homem.png" alt="" class="homem-home" />
      </div>
      <FooterComponent />
    </v-main>
  </v-layout>
</template>

<style scoped>
main {
  background-color: var(--cinza-principal);
  height: 80vh;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 70vh;
}

.container-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10rem;
  gap: 1rem;
}

.container-left h1 {
  font-size: 2.5rem;
  width: 85%;
  font-family: Be Vietnam Pro, sans-serif;
  font-weight: 700;
  color: white;
}

.container-left h1 span {
  color: var(--azul-principal);
}

.container-left h4 {
  font-size: 1rem;
  width: 80%;
  font-family: Be Vietnam Pro, sans-serif;
  color: white;
}

.botoes {
  display: flex;
  gap: 1rem;
  width: 57%;
}

.botoes button {
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: none;
  color: var(--azul-principal);
  border: 1px solid var(--azul-principal);
  transition: 0.5s ease;
  padding: 0.5rem 2rem;
}

.botoes button:hover {
  color: white;
  border: none;
  background-color: var(--azul-principal);
}

.container-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-right img {
  height: 500px;
}

.footer {
  position: absolute;
  bottom: 0;
  right: 0;
}

.whatsapp-icon {
  position: absolute;
  top: -40px;
  right: 50px;
}

.subfooter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 1rem 1rem 7rem;
  background-color: white;
  border-radius: 30px 30px 0 0;
}

.subfooter-right {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
}

.subfooter-left p {
  width: 25%;
  font-size: 0.875rem;
  font-family: Be Vietnam Pro, sans-serif;
  color: var(--cinza-terceario);
}

.guias,
.endereco {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.guias p,
.endereco p {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--cinza-secundario);
  padding-bottom: 0.5rem;
}

.guias a,
.endereco span {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 0.8125rem;
  text-decoration: none;
  color: var(--cinza-terceario);
}

.social {
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.5rem;
}

.social button {
  color: var(--cinza-secundario);
}

@media screen and (max-width: 2560px) {
  .container {
    height: 70vh;
  }

  .container-left {
    padding-left: calc(10rem * 2560 / 1920);
    gap: calc(1rem * 2560 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 2560 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 2560 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 2560 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 2560 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 2560 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 2560 / 1920) calc(1rem * 2560 / 1920) calc(1rem * 2560 / 1920)
      calc(7rem * 2560 / 1920);
    border-radius: calc(30px * 2560 / 1920) calc(30px * 2560 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 2560 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 2560 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 2560 / 1920);
    padding-bottom: calc(0.5rem * 2560 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 2560 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 2560 / 1920);
  }
}

@media screen and (max-width: 1920px) {
  .container {
    height: 70vh;
  }

  .container-left {
    padding-left: calc(10rem * 1920 / 1920);
    gap: calc(1rem * 1920 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1920 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1920 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1920 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1920 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1920 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1920 / 1920) calc(1rem * 1920 / 1920) calc(1rem * 1920 / 1920)
      calc(7rem * 1920 / 1920);
    border-radius: calc(30px * 1920 / 1920) calc(30px * 1920 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1920 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1920 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1920 / 1920);
    padding-bottom: calc(0.5rem * 1920 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1920 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1920 / 1920);
  }
}

@media screen and (max-width: 1600px) {
  .container {
    height: 70vh;
  }

  .container-left {
    padding-left: calc(10rem * 1600 / 1920);
    gap: calc(1rem * 1600 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1600 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1600 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1600 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1600 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1600 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1600 / 1920) calc(1rem * 1600 / 1920) calc(1rem * 1600 / 1920)
      calc(7rem * 1600 / 1920);
    border-radius: calc(30px * 1600 / 1920) calc(30px * 1600 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1600 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1600 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1600 / 1920);
    padding-bottom: calc(0.5rem * 1600 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1600 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1600 / 1920);
  }
}

@media screen and (max-width: 1440px) {
  .container {
    height: 70vh;
  }

  .container-left {
    padding-left: calc(10rem * 1440 / 1920);
    gap: calc(1rem * 1440 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1440 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1440 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1440 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1440 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1440 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1440 / 1920) calc(1rem * 1440 / 1920) calc(1rem * 1440 / 1920)
      calc(7rem * 1440 / 1920);
    border-radius: calc(30px * 1440 / 1920) calc(30px * 1440 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1440 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1440 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1440 / 1920);
    padding-bottom: calc(0.5rem * 1440 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1440 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1440 / 1920);
  }
}

@media screen and (max-width: 1366px) {
  .container {
    height: 50vh;
  }

  .container-left {
    padding-left: calc(10rem * 1366 / 1920);
    gap: calc(1rem * 1366 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1366 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1366 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1366 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1366 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1366 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1366 / 1920) calc(1rem * 1366 / 1920) calc(1rem * 1366 / 1920)
      calc(7rem * 1366 / 1920);
    border-radius: calc(30px * 1366 / 1920) calc(30px * 1366 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1366 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1366 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1366 / 1920);
    padding-bottom: calc(0.5rem * 1366 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1366 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1366 / 1920);
  }
}

@media screen and (max-width: 1280px) {
  .container {
    height: 50vh;
  }

  .container-left {
    padding-left: calc(10rem * 1280 / 1920);
    gap: calc(1rem * 1280 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1280 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1280 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1280 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1280 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1280 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1280 / 1920) calc(1rem * 1280 / 1920) calc(1rem * 1280 / 1920)
      calc(7rem * 1280 / 1920);
    border-radius: calc(30px * 1280 / 1920) calc(30px * 1280 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1280 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1280 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1280 / 1920);
    padding-bottom: calc(0.5rem * 1280 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1280 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1280 / 1920);
  }
}

@media screen and (max-width: 1024px) {
  .container {
    height: 70vh;
  }

  .container-left {
    padding-left: calc(10rem * 1024 / 1920);
    gap: calc(1rem * 1024 / 1920);
  }

  .container-left h1 {
    font-size: calc(2.5rem * 1024 / 1920);
    width: 85%;
  }

  .container-left h4 {
    font-size: calc(1rem * 1024 / 1920);
    width: 80%;
  }

  .botoes {
    gap: calc(1rem * 1024 / 1920);
    width: 57%;
  }

  .botoes button {
    font-size: calc(1rem * 1024 / 1920);
    padding: 0.5rem 2rem;
  }

  .container-right img {
    height: calc(500px * 1024 / 1920);
  }

  .whatsapp-icon {
    position: absolute;
    top: -40px;
    right: 50px;
  }

  .subfooter {
    padding: calc(1rem * 1024 / 1920) calc(1rem * 1024 / 1920) calc(1rem * 1024 / 1920)
      calc(7rem * 1024 / 1920);
    border-radius: calc(30px * 1024 / 1920) calc(30px * 1024 / 1920) 0 0;
  }

  .subfooter-right {
    column-gap: calc(3rem * 1024 / 1920);
  }

  .subfooter-left p {
    width: 25%;
    font-size: calc(0.875rem * 1024 / 1920);
  }

  .guias p,
  .endereco p {
    font-size: calc(0.875rem * 1024 / 1920);
    padding-bottom: calc(0.5rem * 1024 / 1920);
  }

  .guias a,
  .endereco span {
    font-size: calc(0.8125rem * 1024 / 1920);
  }

  .social {
    height: 100%;
    gap: calc(0.5rem * 1024 / 1920);
  }
}

@media screen and (max-width: 820px) {
  main {
    height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-top {
    padding-top: calc(5rem * 820 / 820);
    padding-left: calc(5rem * 820 / 820);
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: calc(1rem * 820 / 820);
  }

  .container-top h1 {
    font-size: calc(1rem * 820 / 360);
    font-family: Be Vietnam Pro, sans-serif;
    font-weight: 700;
    color: white;
  }

  .container-top h1 span {
    color: var(--azul-principal);
  }

  .container-top h4 {
    font-size: calc(0.8rem * 820 / 820);
    text-align: justify;
    width: 65%;
    font-family: Be Vietnam Pro, sans-serif;
    color: white;
    font-weight: 400;
  }

  .botoes {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .botoes button {
    padding: 0;
    font-size: 1rem;
    width: 100%;
  }

  .tijolo {
    position: absolute;
    right: 0;
    bottom: 450px;
  }

  .homem-home {
    position: absolute;
    height: 400px;
    bottom: 0;
    right: 0;
  }
}
@media screen and (max-width: 600px) {
  main {
    height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-top {
    padding-top: calc(5rem * 600 / 820);
    padding-left: calc(5rem * 600 / 820);
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: calc(1rem * 600 / 820);
  }

  .container-top h1 {
    font-size: 1.8rem;
    font-family: Be Vietnam Pro, sans-serif;
    font-weight: 700;
    color: white;
  }

  .container-top h1 span {
    color: var(--azul-principal);
  }

  .container-top h4 {
    font-size: 0.8;
    text-align: justify;
    width: 65%;
    font-family: Be Vietnam Pro, sans-serif;
    color: white;
    font-weight: 400;
  }

  .botoes button {
    font-size: 0.8rem;
  }

  .tijolo {
    position: absolute;
    right: 0;
    bottom: 450px;
  }

  .homem-home {
    position: absolute;
    height: 400px;
    bottom: 0;
    right: 0;
  }
}
@media screen and (max-width: 400px) {
  main {
    height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-top {
    padding-top: calc(5rem * 400 / 820);
    padding-left: calc(5rem * 400 / 820);
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: calc(1rem * 600 / 820);
  }

  .container-top h1 {
    font-size: 1.8rem;
    font-family: Be Vietnam Pro, sans-serif;
    font-weight: 700;
    color: white;
  }

  .container-top h1 span {
    color: var(--azul-principal);
  }

  .container-top h4 {
    font-size: 0.8;
    text-align: justify;
    width: 65%;
    font-family: Be Vietnam Pro, sans-serif;
    color: white;
    font-weight: 400;
  }

  .botoes button {
    font-size: 0.8rem;
  }

  .tijolo {
    position: absolute;
    right: 0;
    bottom: 450px;
  }

  .homem-home {
    position: absolute;
    height: 400px;
    bottom: 0;
    right: 0;
  }
}
</style>