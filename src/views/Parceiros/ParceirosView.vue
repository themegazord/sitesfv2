<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
</script>
<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <div class="container">
      <div class="container-left">
        <h3>Parceiros</h3>
        <p>
          Na <b>SF Sistemas</b>, nossa missão vai além de fornecer softwares de gestão. Acreditamos
          em construir parcerias sólidas e duradouras com nossos clientes, impulsionando o
          crescimento e o sucesso mútuo.
        </p>
        <p>
          Ao longo da nossa jornada, tivemos a honra de atender a empresas de diversos portes e
          segmentos, construindo uma carteira de clientes sólida e diversificada. Mais do que
          simplesmente fornecer um software, buscamos entender as necessidades específicas de cada
          negócio, criando soluções personalizadas que geram resultados concretos.
        </p>
        <p>
          <b>
            Entre em contato conosco hoje mesmo e descubra como podemos impulsionar o seu negócio!
          </b>
        </p>
        <v-btn rounded="lg" elevation="8" variant="tonal">Clique aqui e fale com nosso time</v-btn>
      </div>
      <div class="container-right">
        <img src="@/assets/images/Parceiros/ParceirosImagem.png" alt="" />
      </div>
    </div>
    <div class="parceiros">
      <img src="@/assets/images/Parceiros/PaxNacional.png" alt="" />
      <img src="@/assets/images/Parceiros/StAntonio.png" alt="" />
      <img src="@/assets/images/Parceiros/Obrativa.png" alt="" />
      <img src="@/assets/images/Parceiros/HeT.png" alt="" />
      <img src="@/assets/images/Parceiros/Mafisa.png" alt="" />
      <img src="@/assets/images/Parceiros/DeckCafeBar.png" alt="" />
      <img src="@/assets/images/Parceiros/Lagoa.png" alt="" />
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
  display: flex;
  flex-direction: column;
}

.parceiros {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
}

.parceiros img {
  height: 100px;
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
    height: calc(525px * 2560 / 1920);
    width: calc(630px * 2560 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 2560 / 1920);
    top: calc(120px * 2560 / 1920);
  }

  .container-right img {
    height: calc(400px * 2560 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(350px * 2560 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 2560 / 1920);
  }

  .parceiros img {
    height: calc(100px * 2560 / 1920);
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
    height: calc(525px * 1920 / 1920);
    width: calc(630px * 1920 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1920 / 1920);
    top: calc(120px * 1920 / 1920);
  }

  .container-right img {
    height: calc(400px * 1920 / 1920);
    position: absolute;
    right: 0;
    bottom: 300px;
    z-index: 1;
  }

  .parceiros {
    margin-top: 6rem;
  }

  .parceiros img {
    height: 100px;
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
    height: calc(525px * 1600 / 1920);
    width: calc(630px * 1600 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1600 / 1920);
    top: calc(120px * 1600 / 1920);
  }

  .container-right img {
    height: calc(400px * 1600 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(300px * 1600 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 1600 / 1920);
  }

  .parceiros img {
    height: calc(100px * 1600 / 1920);
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
    height: calc(525px * 1440 / 1920);
    width: calc(630px * 1440 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1440 / 1920);
    top: calc(120px * 1440 / 1920);
  }

  .container-right img {
    height: calc(400px * 1440 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(380px * 1440 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 1440 / 1920);
  }

  .parceiros img {
    height: calc(100px * 1440 / 1920);
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
    height: calc(525px * 1366 / 1920);
    width: calc(630px * 1366 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1366 / 1920);
    top: calc(120px * 1366 / 1920);
  }

  .container-right img {
    height: calc(400px * 1366 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(250px * 1366 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 1366 / 1920);
  }

  .parceiros img {
    height: calc(100px * 1366 / 1920);
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
    height: 86vh;
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
    height: calc(525px * 1280 / 1920);
    width: calc(630px * 1280 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1280 / 1920);
    top: calc(120px * 1280 / 1920);
  }

  .container-right img {
    height: calc(400px * 1280 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(350px * 1280 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 1280 / 1920);
  }

  .parceiros img {
    height: calc(100px * 1280 / 1920);
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
    height: 89vh;
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
    height: calc(525px * 1024 / 1920);
    width: calc(630px * 1024 / 1920);
    position: absolute;
    z-index: 0;
    left: calc(1450px * 1024 / 1920);
    top: calc(120px * 1024 / 1920);
  }

  .container-right img {
    height: calc(400px * 1024 / 1920);
    position: absolute;
    right: 0;
    bottom: calc(550px * 1024 / 1920);
    z-index: 1;
  }

  .parceiros {
    margin-top: calc(6rem * 1024 / 1920);
  }

  .parceiros img {
    height: calc(100px * 1024 / 1920);
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