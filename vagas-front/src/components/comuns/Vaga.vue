<template>
    <div class="card">
          <div class="card-header bg-dark text-white">{{ tituloVagaTeste }}</div>
          <div class="card-body">
            <p>{{ descricaoVaga }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo: {{ tipo }} | Publicação: {{ publicacao }}</small>
          </div>
        </div>
</template>

<script>
    export default {
        name: 'Vaga',
        props: ['tituloVagaTeste', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao']
    }
</script>
