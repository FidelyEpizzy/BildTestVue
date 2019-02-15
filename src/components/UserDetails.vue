<template>
    <div class="component">
      <h3>You may view the User Details here</h3>
      <p>Many Details</p>
      <p> User Name : {{ switchName() }} </p>
      <p> User age : {{ userAge }} </p>
      <button @click="resetName">Reset</button>
      <button @click="resetFn">Reset</button>
  </div>
</template>

<script>
import {eventBus} from '../main';
export default {
    props:{
      name: {
      type: String
      },
      resetFn: Function,
      userAge : Number

    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name='Aleksandar';
        this.$emit('nameWasReset', this.name);
      }

    },
    created() {
        eventBus.$on('ageWasChanged', (age)=> {
          this.userAge = age;
        });
    }
}
</script>

<style scoped>
div {
  background-color: salmon;
}

</style>
