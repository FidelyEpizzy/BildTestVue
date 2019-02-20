<template>
    <div class="container-fluid" id="appFooterTwo">
        <div class="container" id="appFooterTwoContainer">
            <div class="row" id="appFooterTwoRow">
                <div class="col-6">
                   <p> COPYRIGHT 2013 DISPLAY. ALL RIGHTS RESERVED </p>
                </div>
                <div class="col-6 appFooterNavigation">
                    HOME / ABOUT / WORK / CONTACT
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#appFooterTwo {
    background-color:#efefef;
    font-size: 0.7rem;
    font-family: 'Novecento sans wide Light';
    color:#afafaf;
}
#appFooterTwoContainer {
    padding-top: 0;
    max-width: 970px;
}
#appFooterTwoRow {
    align-content: center;  
    margin-top:2em;
    margin-bottom:0.5em;

}
.appFooterNavigation {
    display: flex;
    justify-content:flex-end;
}
</style>
