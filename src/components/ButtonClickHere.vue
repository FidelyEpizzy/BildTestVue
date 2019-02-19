<template>
    <div>
        <button class ="button">{{buttons[0]}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttons: ['CLICK HERE TO FIND OUT','BROWSE PORTFOLIO','SEND MESSAGE']
        }
    }
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
