<template>
    <div>
        <app-contact-map></app-contact-map>
        <app-contact-form></app-contact-form>
    </div>
</template>

<script>
import appContactMap from "./appContactMap.vue";
import appContactForm from "./appContactForm.vue";
export default {
 components: {
     appContactMap:appContactMap,

     appContactForm:appContactForm
 }
}
</script>

<style>

</style>
