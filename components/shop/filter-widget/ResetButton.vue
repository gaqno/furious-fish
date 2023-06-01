<template>
  <div class="reset-button mt-20 mb-30">
    <button class="os-btn os-btn-black" @click="state.handleResetFilter">
      Limpar filtros
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGraphQLStore } from "~~/store/useGraphQL";

export default defineComponent({
  setup() {
    const state = useGraphQLStore();
    return { state };
  },
});
</script>

