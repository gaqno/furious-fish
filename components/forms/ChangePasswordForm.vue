<template>
  <form action="#">
      <div class="password__input">
        <p>Senha antiga</p>
        <input type="password" placeholder="Digite a ANTIGA senha">
      </div>
      <div class="password__input">
        <p>Nova senha</p>
        <input type="password" placeholder="Digite a NOVA senha">
      </div>
      <div class="password__input">
        <p>Confirmar senha</p>
        <input type="password" placeholder="Confirme a senha">
      </div>
      <div class="password__input">
        <button type="submit" class="os-btn os-btn-black">Atualizar senha</button>
      </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
