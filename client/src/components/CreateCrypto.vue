<template>
  <b-form
    @submit="createNewCrypto($event)"
    class="row justify-content-center flex-column align-items-center mt-5"
  >
    <b-form-group
      label="Введите короткое название криптовалюты"
      label-for="input__create-crypto"
    >
      <b-form-input
        id="input__create-crypto"
        type="text"
        required
        placeholder="ETH"
        v-model="cryptoName"
      />
    </b-form-group>
    <b-button variant="primary" type="submit">Добавить криптовалюту</b-button>
  </b-form>
</template>

<script>
import { createNewSocket } from "@/utils/socketHandler";

export default {
  name: "CreateCrypto",
  data() {
    return {
      cryptoName: "",
    };
  },
  methods: {
    createNewCrypto(event) {
      event.preventDefault();
      return createNewSocket(this.cryptoName);
    },
  },
};
</script>

<style scoped></style>
