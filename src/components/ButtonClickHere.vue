<template>
    <div>
        <button class ="button">{{appButtonValue}}</button>
    </div>
</template>

<script>
export default {
    props: ["appButtonValue"]

    }
    

</script>

<style>
.button {
 background-color: #2ecc71;
 border:0;
 color:white;
 font-family: 'Novecento sans wide Light';
 padding: 0.5em;
}
</style>
