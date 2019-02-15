<template>
  <div class="component">
    
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>my name is {{ name }}</p>
        <p>age : {{ age }} </p>
        <hr>
   
    <b-row>
        <b-col col="6"><user-details 
        :name="name" @nameWasReset="name=$event"
        :resetFn="resetName"
        :userAge="age"
        ></user-details></b-col> 

        <b-col col="6"><user-edit 
        :userAge="age"
        @ageWasEdited="age=$event"
        ></user-edit></b-col>
    </b-row>
  </div>
</template>

<script>
import UserDetails from './UserDetails.vue';
import UserEdit from './UserEdit.vue';

export default {
    data : function() {
        return {
            name: 'Aleksandar',
            age: '23'
        };
    },
    methods: {
        changeName() {
            this.name = 'Anna';
        },
        resetName(){
            this.name='Aleksandar'
        }
    },
  components: {
    "user-details": UserDetails,
    "user-edit": UserEdit
  }
}
</script>

<style>
    div {
        background-color: lightblue;
    }
</style>
