<template>
    <div class="container-fluid" id="appTitleContainerFluid">
        <div class="container" id="appTitleContainer">
            <div class="row" id="appTitleRow">
                <div class="col-12 title">
                    <h3>{{ appHeadlineValue }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['appHeadlineValue']
}
</script>

<style>
.title h3 {
    font-family: 'Novecento sans wide Light';
    color: white;
}
#appTitleContainerFluid {
    margin-top : 1.4em;
    padding-top: 1.9em;
    padding-bottom: 1.9em;
    background-color: #2ecc71;
}
#appTitleContainer {
    display: flex;
    align-content: center;
    padding-top: 0;
    max-width: 970px;
}

</style>
