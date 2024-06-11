<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

function envio() {
  const mensagem = encodeURI(
    `Olá 😊.$Fiquei interessado no módulo para eventos do seu sistema, poderia me contar um pouco mais sobre?`
  )

  window.open(
    `https://api.whatsapp.com/send?phone=5567999832455&text=${mensagem.replaceAll('$', '%0D')}`
  )
}
</script>
<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <div class="container">
      <div class="container-left">
        <h3>Para <b>Eventos</b></h3>
        <p>
          Com <b>SAFI</b>, você terá controle total sobre a venda de ingressos, a gestão do bar e do
          estoque, garantindo um evento impecável do início ao fim.
        </p>
        <p>
          <b>
            Emita tickets de produtos na bilheteria com rapidez e praticidade, utilizando o sistema
            integrado ao caixa.
          </b>
          Ofereça aos seus clientes a comodidade de comprar seus produtos com antecedência e evitar
          filas.
        </p>
        <p>
          Monitore o nível de estoque de todos os produtos em tempo real, diretamente do sistema.
          Receba alertas automáticos quando os níveis de estoque estiverem baixos, garantindo que
          você sempre tenha produtos disponíveis para atender seus clientes e fazer a festa!
        </p>
        <p>
          Tudo isso com uma interface intuitiva e fácil de usar, mesmo para quem não tem
          familiaridade com tecnologia e sistemas. Isso significa que seus funcionários podem
          começar a usar o sistema rapidamente, após o treinamento.
        </p>
        <v-btn rounded="lg" elevation="8" variant="tonal" @click="envio"
          >Clique aqui e fale com nosso time</v-btn
        >
      </div>
      <div class="container-right">
        <img src="@/assets/images/Servicos/EventosImagem.png" alt="" />
        <div class="chips">
          <div class="chips-top">
            <v-chip color="white" size="small" variant="outlined">Bares</v-chip>
            <v-chip color="white" size="small" variant="outlined">Festivais</v-chip>
            <v-chip color="white" size="small" variant="outlined">Shows</v-chip>
          </div>
          <div class="chips-down">
            <v-chip color="white" size="small" variant="outlined">Parques</v-chip>
            <v-chip color="white" size="small" variant="outlined">Festas</v-chip>
            <v-chip color="white" size="small" variant="outlined">Festas Benificentes</v-chip>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="footer">
    <FooterComponent />
  </div>
</template>
<style scoped>
main {
  height: 87vh;
  background-color: #fff;
}

.container {
  display: grid;
  grid-template-columns: 60% 40%;
}

.container-left {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: 10rem;
  gap: 2rem;
}

.container-left h3 {
  font-size: 2rem;
  font-family: Be Vietnam Pro, sans-serif;
  color: #4f4f50;
}

.container-left h3 b {
  color: #2985b8;
  text-decoration: underline;
}

.container-left p {
  font-size: 0.9375rem;
  font-family: Be Vietnam Pro, sans-serif;
  color: #4f4f50;
  text-align: justify;
  width: 70%;
  line-height: 30px;
}

.container-left button {
  width: 40%;
  margin-left: 9rem;
  background-color: #63c7f5;
  color: white;
}

.container-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-right::after {
  content: '';
  height: 725px;
  width: 830px;
  position: absolute;
  z-index: 0;
  left: 1250px;
  top: 120px;
  border-radius: 100%;
  background-color: var(--azul-principal);
}

.container-right img {
  height: 400px;
  z-index: 1;
}

.chips {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  bottom: 180px;
  right: 120px;
  z-index: 1;
}

.chips-top {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.chips-down {
  display: flex;
  gap: 0.5rem;
}

@media screen and (max-width: 2560px) {
  main {
    height: 87vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 2560 / 1920);
    margin-left: calc(10rem * 2560 / 1920);
    gap: calc(2rem * 2560 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 2560 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 2560 / 1920);
    width: 70%;
    line-height: calc(30px * 2560 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 2560 / 1920);
    font-size: calc(1rem * 2560 / 1920);
    height: calc(2.5rem * 2560 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(725px * 2560 / 1920);
    width: calc(830px * 2560 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 2560 / 1920);
    top: calc(120px * 2560 / 1920);
  }

  .container-right img {
    height: calc(500px * 2560 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(200px * 2560 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 2560 / 1920);
    bottom: calc(150px * 2560 / 1920);
    right: calc(70px * 2560 / 1920);
    z-index: 1;
  }

  .chips-top {
    gap: calc(0.5rem * 2560 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 2560 / 1920);
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: 1rem;
    --v-chip-height: 26px;
    font-size: 1rem;
    padding: 0 10px;
  }
}

@media screen and (max-width: 1920px) {
  main {
    height: 87vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1920 / 1920);
    margin-left: calc(10rem * 1920 / 1920);
    gap: calc(2rem * 1920 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1920 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1920 / 1920);
    width: 70%;
    line-height: calc(30px * 1920 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1920 / 1920);
    font-size: calc(1rem * 1920 / 1920);
    height: calc(2.5rem * 1920 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(725px * 1920 / 1920);
    width: calc(830px * 1920 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 1920 / 1920);
    top: calc(120px * 1920 / 1920);
  }

  .container-right img {
    height: calc(500px * 1920 / 1920);
    position: absolute;
    right: 0;
    bottom: 200px;
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1920 / 1920);
    bottom: calc(120px * 1920 / 1920);
    right: calc(80px * 1920 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1920 / 2560);
    --v-chip-height: calc(26px * 1920 / 2560);
    font-size: calc(1rem * 1920 / 2560);
    padding: 0 calc(10px * 1920 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1920 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1920 / 1920);
  }
}

@media screen and (max-width: 1600px) {
  main {
    height: 86vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1600 / 1920);
    margin-left: calc(10rem * 1600 / 1920);
    gap: calc(1.5rem * 1600 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1600 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1600 / 1920);
    width: 70%;
    line-height: calc(30px * 1600 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1600 / 1920);
    font-size: calc(1rem * 1600 / 1920);
    height: calc(2.5rem * 1600 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(725px * 1600 / 1920);
    width: calc(830px * 1600 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 1600 / 1920);
    top: calc(120px * 1600 / 1920);
  }

  .container-right img {
    height: calc(500px * 1600 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(180px * 1600 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1600 / 1920);
    bottom: calc(120px * 1600 / 1920);
    right: calc(80px * 1600 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1600 / 2560);
    --v-chip-height: calc(26px * 1600 / 2560);
    font-size: calc(1rem * 1600 / 2560);
    padding: 0 calc(10px * 1600 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1600 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1600 / 1920);
  }
}

@media screen and (max-width: 1440px) {
  main {
    height: 86vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1440 / 1920);
    margin-left: calc(10rem * 1440 / 1920);
    gap: calc(1.5rem * 1440 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1440 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1440 / 1920);
    width: 70%;
    line-height: calc(30px * 1440 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1440 / 1920);
    font-size: calc(1rem * 1440 / 1920);
    height: calc(2.5rem * 1440 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(725px * 1440 / 1920);
    width: calc(830px * 1440 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 1440 / 1920);
    top: calc(120px * 1440 / 1920);
  }

  .container-right img {
    height: calc(500px * 1440 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(250px * 1440 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1440 / 1920);
    bottom: calc(180px * 1440 / 1920);
    right: calc(80px * 1440 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1440 / 2560);
    --v-chip-height: calc(26px * 1440 / 2560);
    font-size: calc(1rem * 1440 / 2560);
    padding: 0 calc(10px * 1440 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1440 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1440 / 1920);
  }
}

@media screen and (max-width: 1366px) {
  main {
    height: 85vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1366 / 1920);
    margin-left: calc(10rem * 1366 / 1920);
    gap: calc(1.5rem * 1366 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1366 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1366 / 1920);
    width: 70%;
    line-height: calc(30px * 1366 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1366 / 1920);
    font-size: calc(1rem * 1366 / 1920);
    height: calc(2.5rem * 1366 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(635px * 1366 / 1920);
    width: calc(690px * 1366 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1300px * 1366 / 1920);
    top: calc(120px * 1366 / 1920);
  }

  .container-right img {
    height: calc(500px * 1366 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(200px * 1366 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1366 / 1920);
    bottom: calc(140px * 1366 / 1920);
    right: calc(60px * 1366 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1366 / 2560);
    --v-chip-height: calc(26px * 1366 / 2560);
    font-size: calc(1rem * 1366 / 2560);
    padding: 0 calc(10px * 1366 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1366 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1366 / 1920);
  }
}

@media screen and (max-width: 1280px) {
  main {
    height: 82vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1280 / 1920);
    margin-left: calc(10rem * 1280 / 1920);
    gap: calc(1.5rem * 1280 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1280 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1280 / 1920);
    width: 70%;
    line-height: calc(30px * 1280 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1280 / 1920);
    font-size: calc(1rem * 1280 / 1920);
    height: calc(2.5rem * 1280 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(635px * 1280 / 1920);
    width: calc(690px * 1280 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1300px * 1280 / 1920);
    top: calc(120px * 1280 / 1920);
  }

  .container-right img {
    height: calc(500px * 1280 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(320px * 1280 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1280 / 1920);
    bottom: calc(250px * 1280 / 1920);
    right: calc(70px * 1280 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1280 / 2560);
    --v-chip-height: calc(26px * 1280 / 2560);
    font-size: calc(1rem * 1280 / 2560);
    padding: 0 calc(10px * 1280 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1280 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1280 / 1920);
  }
}

@media screen and (max-width: 1024px) {
  main {
    height: 93vh;
  }

  .container {
    grid-template-columns: 60% 40%;
  }

  .container-left {
    margin-top: calc(3rem * 1024 / 1920);
    margin-left: calc(10rem * 1024 / 1920);
    gap: calc(1.5rem * 1024 / 1920);
  }

  .container-left h3 {
    font-size: calc(2rem * 1024 / 1920);
  }

  .container-left h3 b {
    color: #2985b8;
  }

  .container-left p {
    font-size: calc(0.9375rem * 1024 / 1920);
    width: 70%;
    line-height: calc(30px * 1024 / 1920);
  }

  .container-left button {
    width: 40%;
    margin-left: calc(9rem * 1024 / 1920);
    font-size: calc(1rem * 1024 / 1920);
    height: calc(2.5rem * 1024 / 1920);
  }

  .container-right::after {
    content: '';
    height: calc(835px * 1024 / 1920);
    width: calc(890px * 1024 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1300px * 1024 / 1920);
    top: calc(120px * 1024 / 1920);
  }

  .container-right img {
    height: calc(500px * 1024 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(420px * 1024 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1024 / 1920);
    bottom: calc(250px * 1024 / 1920);
    right: calc(70px * 1024 / 1920);
    z-index: 1;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: calc(1rem * 1024 / 2560);
    --v-chip-height: calc(26px * 1024 / 2560);
    font-size: calc(1rem * 1024 / 2560);
    padding: 0 calc(10px * 1024 / 2560);
  }

  .chips-top {
    gap: calc(0.5rem * 1024 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1024 / 1920);
  }
}
</style>