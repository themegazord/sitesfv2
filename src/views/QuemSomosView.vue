<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { mobile } = useDisplay()

const isMobile = computed(() => mobile.value)

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
        <h3>Quem somos</h3>
        <p>
          Na <b>SF SISTEMAS</b>, desenvolvemos soluções tecnológicas inovadoras para impulsionar o
          crescimento de negócios nos setores de
          <b>Comércio Varejista, Prestação de Serviços e Pequenas Indústrias</b>. Nossa plataforma é
          projetada para ser intuitiva, com uma interface padronizada que facilita a operação e
          reduz significativamente o tempo necessário para treinamento, permitindo que sua equipe
          alcance resultados excepcionais com rapidez.
        </p>
        <p>
          Nosso sistema garante a emissão de documentos eletrônicos com total conformidade, aderindo
          estritamente às normativas das Secretarias de Fazenda e mantendo-se constantemente
          atualizado frente às mudanças legislativas.
        </p>
        <p>
          Equipado com ferramentas avançadas de análise gerencial, o <b>SAFI</b> oferece aos
          gestores uma visão holística do ciclo de atendimento ao cliente. Isso não só facilita a
          tomada de decisões informadas, mas também consolida todas as informações comerciais,
          financeiras e produtivas em um único ponto de acesso,
          <b>otimizando o processo decisório e impulsionando a lucratividade do seu negócio.</b>
        </p>
        <p>
          Escolha o <b>SAFI</b> para elevar a eficiência operacional da sua empresa, ganhando
          agilidade e competitividade no mercado, reduzindo tempos de execução e elevando a
          produtividade do seu time.
        </p>
      </div>
      <div class="container-right">
        <img src="@/assets/images/QuemSomosImgRight.png" alt="" />
        <v-btn rounded="lg" elevation="8" variant="tonal" @click="envio"
          >Clique aqui e fale com nosso time</v-btn
        >
      </div>
    </div>
  </main>
  <div class="footer" v-if="!isMobile">
    <FooterComponent />
  </div>

  <v-layout v-if="isMobile">
    <NavbarComponent />
    <v-main>
      <div class="container">
        <h3>Quem somos</h3>
        <p>
          Na <b>SF SISTEMAS</b>, desenvolvemos soluções tecnológicas inovadoras para impulsionar o
          crescimento de negócios nos setores de
          <b>Comércio Varejista, Prestação de Serviços e Pequenas Indústrias</b>. Nossa plataforma é
          projetada para ser intuitiva, com uma interface padronizada que facilita a operação e
          reduz significativamente o tempo necessário para treinamento, permitindo que sua equipe
          alcance resultados excepcionais com rapidez.
        </p>
        <p>
          Nosso sistema garante a emissão de documentos eletrônicos com total conformidade, aderindo
          estritamente às normativas das Secretarias de Fazenda e mantendo-se constantemente
          atualizado frente às mudanças legislativas.
        </p>
        <div class="container-imagem">
          <img src="@/assets/images/QuemSomosImgRight.png" alt="" />
          <button @click="envio">Clique aqui e fale com nosso time</button>
        </div>
        <p>
          Equipado com ferramentas avançadas de análise gerencial, o <b>SAFI</b> oferece aos
          gestores uma visão holística do ciclo de atendimento ao cliente. Isso não só facilita a
          tomada de decisões informadas, mas também consolida todas as informações comerciais,
          financeiras e produtivas em um único ponto de acesso,
          <b>otimizando o processo decisório e impulsionando a lucratividade do seu negócio.</b>
        </p>
        <p>
          Escolha o <b>SAFI</b> para elevar a eficiência operacional da sua empresa, ganhando
          agilidade e competitividade no mercado, reduzindo tempos de execução e elevando a
          produtividade do seu time.
        </p>
      </div>
      <FooterComponent />
    </v-main>
  </v-layout>
</template>
<style scoped>
main {
  background-color: var(--cinza-principal);
  height: 89vh;
}
footer {
  position: fixed;
  bottom: 0;
  right: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  height: 80vh;
}

.container-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10rem;
  gap: 3rem;
}

.container-left h3 {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 2.375rem;
  font-weight: 700;
  color: #d2d2d2;
}

.container-left p {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 1rem;
  color: #d2d2d2;
  width: 75%;
  text-align: justify;
}

.container-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-right::after {
  content: '';
  height: 700px;
  width: 700px;
  position: absolute;
  z-index: 0;
  left: 1350px;
  top: 120px;
  border-radius: 100%;
  background-color: rgba(237, 237, 237, 0.23);
}

.container-right img {
  height: 450px;
  z-index: 1;
}

.container-right button {
  font-family: Be Vietnam Pro, sans-serif;
  position: absolute;
  right: 175px;
  bottom: 150px;
  z-index: 1;
  background-color: var(--azul-principal);
  color: white;
  text-decoration: underline;
}

@media screen and (max-width: 2560px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 2560 / 1920);
    gap: calc(3rem * 2560 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 2560 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 2560 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 2560 / 1920);
    width: calc(700px * 2560 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 2560 / 1920);
    top: calc(120px * 2560 / 1920);
  }

  .container-right img {
    height: calc(450px * 2560 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 2560 / 1920);
    height: calc(2.5rem * 2560 / 1920);
    width: calc(27rem * 2560 / 1920);
    right: calc(175px * 2560 / 1920);
    bottom: calc(150px * 2560 / 1920);
    z-index: 1;
  }
}
@media screen and (max-width: 1920px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1920 / 1920);
    gap: calc(3rem * 1920 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1920 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1920 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 1920 / 1920);
    width: calc(700px * 1920 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1920 / 1920);
    top: calc(120px * 1920 / 1920);
  }

  .container-right img {
    height: calc(450px * 1920 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1920 / 1920);
    width: calc(27rem * 1920 / 1920);
    height: calc(2.5rem * 1920 / 1920);
    right: calc(175px * 1920 / 1920);
    bottom: calc(150px * 1920 / 1920);
    z-index: 1;
  }
}
@media screen and (max-width: 1600px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1600 / 1920);
    gap: calc(3rem * 1600 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1600 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1600 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 1600 / 1920);
    width: calc(700px * 1600 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1600 / 1920);
    top: calc(120px * 1600 / 1920);
  }

  .container-right img {
    height: calc(450px * 1600 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1600 / 1920);
    height: calc(2.5rem * 1600 / 1920);
    width: calc(27rem * 1600 / 1920);
    right: calc(175px * 1600 / 1920);
    bottom: calc(150px * 1600 / 1920);
    z-index: 1;
  }
}
@media screen and (max-width: 1440px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1440 / 1920);
    gap: calc(3rem * 1440 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1440 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1440 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 1440 / 1920);
    width: calc(700px * 1440 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1440 / 1920);
    top: calc(120px * 1440 / 1920);
  }

  .container-right img {
    height: calc(450px * 1440 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1440 / 1920);
    height: calc(2.5rem * 1440 / 1920);
    width: calc(27rem * 1440 / 1920);
    right: calc(175px * 1440 / 1920);
    bottom: calc(150px * 1440 / 1920);
    z-index: 1;
  }
}
@media screen and (max-width: 1366px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1366 / 1920);
    gap: calc(3rem * 1366 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1366 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1366 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(460px * 1366 / 1366);
    width: calc(460px * 1366 / 1366);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1366 / 1920);
    top: calc(120px * 1366 / 1920);
  }

  .container-right img {
    height: calc(450px * 1366 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1366 / 1920);
    height: calc(2.5rem * 1366 / 1920);
    width: calc(27rem * 1366 / 1920);
    right: calc(175px * 1366 / 1920);
    bottom: calc(70px * 1366 / 1366);
    z-index: 1;
  }
}
@media screen and (max-width: 1280px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1280 / 1920);
    gap: calc(3rem * 1280 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1280 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1280 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 1280 / 1920);
    width: calc(700px * 1280 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1280 / 1920);
    top: calc(120px * 1280 / 1920);
  }

  .container-right img {
    height: calc(450px * 1280 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1280 / 1920);
    height: calc(2.5rem * 1280 / 1920);
    width: calc(27rem * 1280 / 1920);
    right: calc(175px * 1280 / 1920);
    bottom: calc(150px * 1280 / 1920);
    z-index: 1;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    height: 80vh;
  }

  .container-left {
    padding: calc(10rem * 1024 / 1920);
    gap: calc(3rem * 1024 / 1920);
  }

  .container-left h3 {
    font-size: calc(2.375rem * 1024 / 1920);
  }

  .container-left p {
    font-size: calc(1rem * 1024 / 1920);
    width: 75%;
  }

  .container-right::after {
    height: calc(700px * 1024 / 1920);
    width: calc(700px * 1024 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1350px * 1024 / 1920);
    top: calc(220px * 1024 / 1920);
  }

  .container-right img {
    height: calc(450px * 1024 / 1920);
    z-index: 1;
  }

  .container-right button {
    font-size: calc(1rem * 1024 / 1920);
    height: calc(2.5rem * 1024 / 1920);
    width: calc(27rem * 1024 / 1920);
    right: calc(175px * 1024 / 1920);
    bottom: calc(120px * 1024 / 1024);
    z-index: 1;
  }
}

@media screen and (max-width: 820px) {
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .container h3 {
    font-family: Be Vietnam Pro, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #d2d2d2;
  }

  .container p {
    font-family: Be Vietnam Pro, sans-serif;
    font-size: 1rem;
    color: #d2d2d2;
    width: 75%;
    text-align: justify;
  }

  footer {
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 0;
  }

  .container-imagem::after {
    content: '';
    height: 600px;
    width: 600px;
    position: absolute;
    right: 5%;
    z-index: 0;
    border-radius: 100%;
    background-color: rgba(237, 237, 237, 0.23);
  }

  .container-imagem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
  }

  .container-imagem img {
    z-index: 1;
    width: 80%;
  }

  .container-imagem button {
    z-index: 1;
    font-family: Be Vietnam Pro, sans-serif;
    width: 50%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: var(--azul-principal);
    color: white;
    text-decoration: underline;
  }
}
@media screen and (max-width: 700px) {
  .container-imagem::after {
    height: calc(600px * 700 / 820);
    width: calc(600px * 700 / 820);
  }

  .container-imagem {
    margin: calc(3rem * 700 / 820) 0;
  }
}
@media screen and (max-width: 600px) {
  .container-imagem::after {
    content: '';
    height: calc(600px * 600 / 820);
    width: calc(600px * 600 / 820);
    position: absolute;
    right: 5%;
    z-index: 0;
    border-radius: 100%;
    background-color: rgba(237, 237, 237, 0.23);
  }

  .container-imagem {
    margin: calc(3rem * 600 / 820) 0;
  }
}
@media screen and (max-width: 500px) {
  .container-imagem::after {
    content: '';
    height: calc(600px * 500 / 820);
    width: calc(600px * 500 / 820);
    position: absolute;
    right: 5%;
    z-index: 0;
    border-radius: 100%;
    background-color: rgba(237, 237, 237, 0.23);
  }

  .container-imagem {
    margin: calc(3rem * 500 / 820) 0;
  }
}
@media screen and (max-width: 400px) {
  .container-imagem::after {
    content: '';
    height: calc(600px * 400 / 820);
    width: calc(600px * 400 / 820);
    position: absolute;
    right: 5%;
    z-index: 0;
    border-radius: 100%;
    background-color: rgba(237, 237, 237, 0.23);
  }
  .container-imagem {
    margin: calc(3rem * 400 / 820) 0;
  }
}
@media screen and (max-width: 300px) {
  .container-imagem::after {
    content: '';
    height: calc(600px * 300 / 820);
    width: calc(600px * 300 / 820);
    position: absolute;
    right: 5%;
    z-index: 0;
    border-radius: 100%;
    background-color: rgba(237, 237, 237, 0.23);
  }

  .container-imagem {
    margin: calc(3rem * 300 / 820) 0;
  }

  .container h3 {
    font-size: 1rem;
  }

  .container p {
    font-size: 0.7rem;
  }

  .container-imagem button {
    width: 80%;
    font-size: 0.7rem;
  }
}
</style>  