<template>
    <div>
      <h2>Componente hijo</h2>
      <input v-model="message" />
      <button @click="sendMessage">Send Message to Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
      sendMessage() {
        this.$emit('childMessage', this.message);
        this.message = ''; // Limpiar el campo de entrada después de emitir el evento
      },
    },
  };
  </script>
  