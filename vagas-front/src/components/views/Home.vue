<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5">

      <div class="col-4">
        <indicador></indicador>
      </div>

      <div class="col-4">
        <indicador></indicador>
      </div>

      <div class="col-4">
        <indicador></indicador>
      </div>

    </div>
  </div>
</template>

<script>
import Indicador from '@/components/comuns/Indicador.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'

  export default {
    name: 'Home',
    components: {
      PesquisarVaga,
      Indicador
    },
    activated() {
      console.log('Componente é ativado')
    },
    deactivated() {
      console.log('Desativado')
    },
    beforeUnmount() {
      console.log('Antes de desmontar/destruir')
    },
    unmounted() {
      console.log('Desmontado/destruido')
    },
    created() {
      console.log('Criado', this.teste)
    },
  }
</script>

<style scoped></style>