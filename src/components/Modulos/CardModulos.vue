<script setup>
// import { require } from 'node'

const props = defineProps({
  tipo: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
})

function getImageUrl() {
  // Usando import.meta.glob para importar a imagem dinamicamente
  const images = import.meta.glob('@/assets/images/Modulos/*', { eager: true })
  const imagePath = `@/assets/images/Modulos/${props.img}`
  return images[imagePath]?.default || ''
}
</script>
<template>
  <div class="card">
    <div :class="props.tipo">
      <img :src="getImageUrl()" alt="" />
    </div>
    <h3>{{ props.titulo }}</h3>
    <p>{{ props.descricao }}</p>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60%;
  gap: 1rem;
  transition: 0.5s ease-in;
  padding: 1rem;
}

.card:hover {
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  box-shadow: 6px 9px 60px 3px rgba(0, 0, 0, 0.21);
}

.card:hover h3 {
  font-family: DM Sans, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c2c2c;
}

.card h3 {
  font-family: DM Sans, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #034d82;
  transition: 0.5s ease-in;
}

.card p {
  font-family: DM Sans, sans-serif;
  font-size: 0.9375rem;
  color: #4f4f50;
}

.cadastro {
  background: linear-gradient(315.55deg, #ef4444 0%, #ff8989 92.87%);
  width: 23%;
  height: 3rem;
}

.cadastro img {
  width: 2.125rem;
  height: 1.875rem;
}

.estoque {
  background: linear-gradient(315.55deg, #3b82f6 0%, #86b4ff 92.87%);
  width: 23%;
  height: 3rem;
}

.estoque img {
  width: 1.625rem;
  height: 1.875rem;
}

.financeiro {
  background: linear-gradient(315.55deg, #f59e0b 0%, #ffd285 92.87%);
  width: 23%;
  height: 3rem;
}

.financeiro img {
  width: 1.75rem;
  height: 1.1625rem;
}

.caixa {
  background: linear-gradient(315.55deg, #14b8a6 0%, #48dfce 92.87%);
  width: 23%;
  height: 3rem;
}

.caixa img {
  width: 2.25rem;
  height: 2.125rem;
}

.card div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 2560px) {
  .card {
    width: 60%;
    gap: calc(1rem * 2560 / 1920);
    padding: calc(1rem * 2560 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 2560 / 1920) calc(9px * 2560 / 1920) calc(60px * 2560 / 1920)
      calc(3px * 2560 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 2560 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 2560 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 2560 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 2560 / 1920);
    height: calc(1.875rem * 2560 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 2560 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 2560 / 1920);
    height: calc(1.875rem * 2560 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 2560 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 2560 / 1920);
    height: calc(1.1625rem * 2560 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 2560 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 2560 / 1920);
    height: calc(2.125rem * 2560 / 1920);
  }
}
@media screen and (max-width: 1920px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1920 / 1920);
    padding: calc(1rem * 1920 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1920 / 1920) calc(9px * 1920 / 1920) calc(60px * 1920 / 1920)
      calc(3px * 1920 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1920 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1920 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1920 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1920 / 1920);
    height: calc(1.875rem * 1920 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1920 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1920 / 1920);
    height: calc(1.875rem * 1920 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1920 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1920 / 1920);
    height: calc(1.1625rem * 1920 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1920 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1920 / 1920);
    height: calc(2.125rem * 1920 / 1920);
  }
}
@media screen and (max-width: 1600px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1600 / 1920);
    padding: calc(1rem * 1600 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1600 / 1920) calc(9px * 1600 / 1920) calc(60px * 1600 / 1920)
      calc(3px * 1600 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1600 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1600 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1600 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1600 / 1920);
    height: calc(1.875rem * 1600 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1600 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1600 / 1920);
    height: calc(1.875rem * 1600 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1600 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1600 / 1920);
    height: calc(1.1625rem * 1600 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1600 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1600 / 1920);
    height: calc(2.125rem * 1600 / 1920);
  }
}
@media screen and (max-width: 1440px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1440 / 1920);
    padding: calc(1rem * 1440 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1440 / 1920) calc(9px * 1440 / 1920) calc(60px * 1440 / 1920)
      calc(3px * 1440 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1440 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1440 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1440 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1440 / 1920);
    height: calc(1.875rem * 1440 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1440 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1440 / 1920);
    height: calc(1.875rem * 1440 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1440 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1440 / 1920);
    height: calc(1.1625rem * 1440 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1440 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1440 / 1920);
    height: calc(2.125rem * 1440 / 1920);
  }
}
@media screen and (max-width: 1366px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1366 / 1920);
    padding: calc(1rem * 1366 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1366 / 1920) calc(9px * 1366 / 1920) calc(60px * 1366 / 1920)
      calc(3px * 1366 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1366 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1366 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1366 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1366 / 1920);
    height: calc(1.875rem * 1366 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1366 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1366 / 1920);
    height: calc(1.875rem * 1366 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1366 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1366 / 1920);
    height: calc(1.1625rem * 1366 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1366 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1366 / 1920);
    height: calc(2.125rem * 1366 / 1920);
  }
}
@media screen and (max-width: 1280px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1280 / 1920);
    padding: calc(1rem * 1280 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1280 / 1920) calc(9px * 1280 / 1920) calc(60px * 1280 / 1920)
      calc(3px * 1280 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1280 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1280 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1280 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1280 / 1920);
    height: calc(1.875rem * 1280 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1280 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1280 / 1920);
    height: calc(1.875rem * 1280 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1280 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1280 / 1920);
    height: calc(1.1625rem * 1280 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1280 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1280 / 1920);
    height: calc(2.125rem * 1280 / 1920);
  }
}
@media screen and (max-width: 1024px) {
  .card {
    width: 60%;
    gap: calc(1rem * 1024 / 1920);
    padding: calc(1rem * 1024 / 1920);
  }

  .card:hover {
    box-shadow: calc(6px * 1024 / 1920) calc(9px * 1024 / 1920) calc(60px * 1024 / 1920)
      calc(3px * 1024 / 1920) rgba(0, 0, 0, 0.21);
  }

  .card h3 {
    font-size: calc(1.25rem * 1024 / 1920);
  }

  .card p {
    font-size: calc(0.9375rem * 1024 / 1920);
  }

  .cadastro {
    width: 23%;
    height: calc(3rem * 1024 / 1920);
  }

  .cadastro img {
    width: calc(2.125rem * 1024 / 1920);
    height: calc(1.875rem * 1024 / 1920);
  }

  .estoque {
    width: 23%;
    height: calc(3rem * 1024 / 1920);
  }

  .estoque img {
    width: calc(1.625rem * 1024 / 1920);
    height: calc(1.875rem * 1024 / 1920);
  }

  .financeiro {
    width: 23%;
    height: calc(3rem * 1024 / 1920);
  }

  .financeiro img {
    width: calc(1.75rem * 1024 / 1920);
    height: calc(1.1625rem * 1024 / 1920);
  }

  .caixa {
    width: 23%;
    height: calc(3rem * 1024 / 1920);
  }

  .caixa img {
    width: calc(2.25rem * 1024 / 1920);
    height: calc(2.125rem * 1024 / 1920);
  }
}
</style>