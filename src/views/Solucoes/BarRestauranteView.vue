<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

function envio() {
  const mensagem = encodeURI(
    `Olá 😊.$Fiquei interessado no módulo para bares e restaurantes do seu sistema, poderia me contar um pouco mais sobre?`
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
        <h3>Para <b>Bares e Restaurantes</b></h3>
        <p>
          Chega de pedidos anotados em papel amassado, pedidos perdidos e clientes insatisfeitos.
          Com o SAFI Mobile, seus garçons e atendentes anotam pedidos diretamente no celular, com
          rapidez e precisão. Personalizações, acompanhamentos, observações e até o couvert são
          registrados em um piscar de olhos, eliminando o risco de erros e garantindo que cada
          pedido seja preparado exatamente como o cliente deseja.
        </p>
        <p>
          Com o SAFI Mobile, seus garçons e atendentes passam menos tempo anotando pedidos e mais
          tempo interagindo com os clientes, oferecendo um atendimento impecável e criando
          experiências memoráveis. Clientes satisfeitos voltam sempre e recomendam seu bar ou
          restaurante para os amigos, impulsionando seu negócio e aumentando seus lucros.
        </p>
        <p>
          Além da versão mobile disponível para Android, o SAFI oferece uma versão desktop completa
          para ser utilizada no balcão e caixa do seu estabelecimento.
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
        <img src="@/assets/images/Servicos/BarRestauranteImagem.png" alt="" />
        <div class="chips">
          <div class="chips-top">
            <v-chip color="white" size="small" variant="outlined">Bares</v-chip>
            <v-chip color="white" size="small" variant="outlined">Lanchonetes</v-chip>
            <v-chip color="white" size="small" variant="outlined">Pizzarias</v-chip>
          </div>
          <div class="chips-down">
            <v-chip color="white" size="small" variant="outlined">Marmitarias</v-chip>
            <v-chip color="white" size="small" variant="outlined">Sobarias</v-chip>
            <v-chip color="white" size="small" variant="outlined">Restaurantes em Geral</v-chip>
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
    height: calc(400px * 2560 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 2560 / 1920);
    bottom: calc(180px * 2560 / 1920);
    right: calc(120px * 2560 / 1920);
    z-index: 1;
  }

  .chips-top {
    gap: calc(0.5rem * 2560 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 2560 / 1920);
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
    height: calc(400px * 1920 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1920 / 1920);
    bottom: calc(180px * 1920 / 1920);
    right: calc(120px * 1920 / 1920);
    z-index: 1;
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
    height: calc(400px * 1600 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1600 / 1920);
    bottom: calc(130px * 1600 / 1920);
    right: calc(120px * 1600 / 1920);
    z-index: 1;
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
    height: calc(400px * 1440 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1440 / 1920);
    bottom: calc(240px * 1440 / 1920);
    right: calc(120px * 1440 / 1920);
    z-index: 1;
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
    width: calc(730px * 1366 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 1366 / 1920);
    top: calc(120px * 1366 / 1920);
  }

  .container-right img {
    height: calc(400px * 1366 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1366 / 1920);
    bottom: calc(130px * 1366 / 1920);
    right: calc(120px * 1366 / 1920);
    z-index: 1;
  }

  .chips-top {
    gap: calc(0.5rem * 1366 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1366 / 1920);
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: 0.55rem;
    --v-chip-height: 22px;
    font-size: 0.55rem;
    padding: 0 5px;
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
    height: calc(655px * 1280 / 1920);
    width: calc(730px * 1280 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1250px * 1280 / 1920);
    top: calc(120px * 1280 / 1920);
  }

  .container-right img {
    height: calc(400px * 1280 / 1920);
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1280 / 1920);
    bottom: calc(225px * 1280 / 1920);
    right: calc(120px * 1280 / 1920);
    z-index: 1;
  }

  .chips-top {
    gap: calc(0.5rem * 1280 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1280 / 1920);
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: 0.55rem;
    --v-chip-height: 22px;
    font-size: 0.55rem;
    padding: 0 5px;
  }
}

@media screen and (max-width: 1024px) {
  main {
    height: 82vh;
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
    height: calc(755px * 1024 / 1920);
    width: calc(830px * 1024 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1150px * 1024 / 1920);
    top: calc(120px * 1024 / 1920);
  }

  .container-right img {
    height: calc(400px * 1024 / 1920);
    margin-right: 10rem;
    z-index: 1;
  }

  .chips {
    gap: calc(0.5rem * 1024 / 1920);
    bottom: calc(325px * 1024 / 1920);
    right: calc(120px * 1024 / 1920);
    z-index: 1;
  }

  .chips-top {
    gap: calc(0.5rem * 1024 / 1920);
  }

  .chips-down {
    gap: calc(0.5rem * 1024 / 1920);
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: 0.55rem;
    --v-chip-height: 22px;
    font-size: 0.55rem;
    padding: 0 5px;
  }
}
</style>