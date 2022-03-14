<template>
  <div>
    <LayoutTopo />
    <LayoutConteudo></LayoutConteudo>
  </div>
</template>

<script>
import LayoutConteudo from './components/layouts/LayoutConteudo.vue'
import LayoutTopo from './components/layouts/LayoutTopo.vue'

export default {
  name: 'App',
  components: {
    LayoutConteudo,
    LayoutTopo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
