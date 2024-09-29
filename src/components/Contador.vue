<template>
    <div>
      <p>Count: {{ count }}</p>
      <button class="incrementar" @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      },
    },
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
    },
  };
  </script>
  