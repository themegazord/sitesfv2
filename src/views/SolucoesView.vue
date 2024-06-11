<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <div class="container">
      <div class="container-left">
        <h3>Serviços e Soluções</h3>
        <p>
          No dinamismo do mercado atual, a personalização é o diferencial que impulsiona o sucesso.
          Nossas soluções são cuidadosamente desenhadas para se alinhar com as necessidades
          específicas de cada segmento. Clique sobre o segmento para conhecer mais:
        </p>
        <div class="lista-servicos">
          <RouterLink :to="{ name: 'barrestaurante' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Bares e Restaurantes</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'supermerc' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Supermecados e Mercearias</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'roupacalcado' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Lojas de Roupa e Calçados</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'autoelecoficina' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Auto Elétrica e Oficinas</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'discconv' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Distribuidores e Conveniencias</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'fabpeqporte' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Fábricas de Pequeno Porte</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'confeccoes' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Confecções</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'eventos' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Eventos</b></p>
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'licitacoes' }">
            <span>
              <img src="@/assets/images/Servicos/VerificadoSolucao.png" alt="" />
              <p>Para <b>Licitações</b></p>
            </span>
          </RouterLink>
        </div>
      </div>
      <div class="container-right">
        <img src="@/assets/images/Servicos/ImagemSolucaoRight.png" alt="" />
      </div>
    </div>
  </main>
  <div class="footer">
    <FooterComponent />
  </div>
</template>
<style scoped>
main {
  background-color: #fff;
  height: 87vh;
}

.container {
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
}

.container-left {
  margin-left: 10rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  background-color: var(--azul-principal);
}

.container-right img {
  height: 600px;
  z-index: 1;
}

.container-left > p {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 0.9375rem;
  color: #4f4f50;
  text-align: justify;
  width: 61%;
}

.container-left h3 {
  font-family: Be Vietnam Pro, sans-serif;
  font-size: 2.1875rem;
  color: #686868;
}

.lista-servicos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lista-servicos a span img {
  width: 2rem;
  height: 2rem;
}

.lista-servicos a span {
  font-size: 1.125rem;
  font-family: Be Vietnam Pro, sans-serif;
  color: #4f4f50;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lista-servicos a span p b {
  text-decoration: underline;
}

.lista-servicos a {
  width: 40%;
  text-decoration: none;
}

@media screen and (max-width: 2560px) {
  main {
    height: 87vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 2560 / 1920);
    margin-top: calc(3rem * 2560 / 1920);
    gap: calc(2rem * 2560 / 1920);
  }

  .container-right::after {
    height: calc(700px * 2560 / 1920);
    width: calc(700px * 2560 / 1920);
    left: calc(1350px * 2560 / 1920);
    top: calc(120px * 2560 / 1920);
  }

  .container-right img {
    height: calc(600px * 2560 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 2560 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 2560 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 2560 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 2560 / 1920);
    height: calc(2rem * 2560 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 2560 / 1920);
    gap: calc(1rem * 2560 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1920px) {
  main {
    height: 87vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1920 / 1920);
    margin-top: calc(3rem * 1920 / 1920);
    gap: calc(2rem * 1920 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1920 / 1920);
    width: calc(700px * 1920 / 1920);
    left: calc(1350px * 1920 / 1920);
    top: calc(120px * 1920 / 1920);
  }

  .container-right img {
    height: calc(600px * 1920 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1920 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1920 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1920 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1920 / 1920);
    height: calc(2rem * 1920 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1920 / 1920);
    gap: calc(1rem * 1920 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1600px) {
  main {
    height: 86vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1600 / 1920);
    margin-top: calc(3rem * 1600 / 1920);
    gap: calc(2rem * 1600 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1600 / 1920);
    width: calc(700px * 1600 / 1920);
    left: calc(1350px * 1600 / 1920);
    top: calc(120px * 1600 / 1920);
  }

  .container-right img {
    height: calc(600px * 1600 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1600 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1600 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1600 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1600 / 1920);
    height: calc(2rem * 1600 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1600 / 1920);
    gap: calc(1rem * 1600 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1440px) {
  main {
    height: 87vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1440 / 1920);
    margin-top: calc(3rem * 1440 / 1920);
    gap: calc(2rem * 1440 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1440 / 1920);
    width: calc(700px * 1440 / 1920);
    left: calc(1350px * 1440 / 1920);
    top: calc(120px * 1440 / 1920);
  }

  .container-right img {
    height: calc(600px * 1440 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1440 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1440 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1440 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1440 / 1920);
    height: calc(2rem * 1440 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1440 / 1920);
    gap: calc(1rem * 1440 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1366px) {
  main {
    height: 85vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1366 / 1920);
    margin-top: calc(3rem * 1366 / 1920);
    gap: calc(2rem * 1366 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1366 / 1920);
    width: calc(700px * 1366 / 1920);
    left: calc(1350px * 1366 / 1920);
    top: calc(120px * 1366 / 1920);
  }

  .container-right img {
    height: calc(600px * 1366 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1366 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1366 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1366 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1366 / 1920);
    height: calc(2rem * 1366 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1366 / 1920);
    gap: calc(1rem * 1366 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1280px) {
  main {
    height: 85vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1280 / 1920);
    margin-top: calc(3rem * 1280 / 1920);
    gap: calc(2rem * 1280 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1280 / 1920);
    width: calc(700px * 1280 / 1920);
    left: calc(1350px * 1280 / 1920);
    top: calc(120px * 1280 / 1920);
  }

  .container-right img {
    height: calc(600px * 1280 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1280 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1280 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1280 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1280 / 1920);
    height: calc(2rem * 1280 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1280 / 1920);
    gap: calc(1rem * 1280 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}

@media screen and (max-width: 1024px) {
  main {
    height: 88vh;
  }

  .container {
    grid-template-columns: 60% 40%;
    height: 100%;
  }

  .container-left {
    margin-left: calc(10rem * 1024 / 1920);
    margin-top: calc(3rem * 1024 / 1920);
    gap: calc(2rem * 1024 / 1920);
  }

  .container-right::after {
    height: calc(700px * 1024 / 1920);
    width: calc(700px * 1024 / 1920);
    left: calc(1350px * 1024 / 1920);
    top: calc(120px * 1024 / 1920);
  }

  .container-right img {
    height: calc(600px * 1024 / 1920);
  }

  .container-left > p {
    font-size: calc(0.9375rem * 1024 / 1920);
    width: 61%;
  }

  .container-left h3 {
    font-size: calc(2.1875rem * 1024 / 1920);
  }

  .lista-servicos {
    gap: calc(1rem * 1024 / 1920);
  }

  .lista-servicos a span img {
    width: calc(2rem * 1024 / 1920);
    height: calc(2rem * 1024 / 1920);
  }

  .lista-servicos a span {
    font-size: calc(1.125rem * 1024 / 1920);
    gap: calc(1rem * 1024 / 1920);
  }

  .lista-servicos a {
    width: 40%;
  }
}
</style>