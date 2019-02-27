<template>
  <div>
    <app-title appHeadlineValue="ABOUT MY BUSINESS"></app-title>
    
        <app-text></app-text>
        <br>
        <app-tabs></app-tabs>

   
    </div>
</template>

<script>
import AppHeaderTitle from "./AppHeaderTitle.vue";
import AppAboutText from "./appAboutText.vue";
import AppAboutTabs from "./appAboutTabs.vue";

export default {
    components: {
        appTitle:AppHeaderTitle,
        appText:AppAboutText,
        appTabs:AppAboutTabs
    },
    
};
</script>

<style>

</style>
