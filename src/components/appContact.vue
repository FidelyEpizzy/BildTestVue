<template>
    <div>
        <app-title  appHeadlineValue="GOT A QUESTION OR A INQUIRY ?"></app-title>
        <app-contact-map></app-contact-map>
        <app-contact-form></app-contact-form>
    </div>
</template>

<script>
import appContactMap from "./appContactMap.vue";
import appContactForm from "./appContactForm.vue";
import AppHeaderTitle from "./AppHeaderTitle.vue";
export default {
 components: {
     data (){
         return {
         
         }
     },
     appContactMap:appContactMap,
     appTitle:AppHeaderTitle,
     appContactForm:appContactForm
 }
}
</script>

<style>

</style>
