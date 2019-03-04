<template>
  <div>
    <app-title appHeadlineValue="CHECK OUT WHAT I CAN DO"></app-title>
    <app-work-filters></app-work-filters>
    
  </div>
</template>

<script>
import appWorkFilters from "./appWorkFilters.vue";
import AppHeaderTitle from "./AppHeaderTitle.vue";

export default {
  components: {
    appTitle: AppHeaderTitle,
    appWorkFilters: appWorkFilters
 
  }
};
</script>

<style>
</style>
