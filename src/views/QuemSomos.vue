<template>
    <div id="QuemSomos">
        <NavbarPrinc />
        <div class="container-fluid">
            <div class="row">
                <div class="col-12" id="quemSomos">
                    <h1>Quem Somos</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavbarPrinc from '../components/NavbarPrinc'
export default {
    name:'QuemSomos',
    components:{
        NavbarPrinc,
    }
}
</script>
<style scoped>
h1{
    color: #fff;
    text-align: left;
}
#quemSomos{
    background-color:#8cb560;
    padding: 5%;
}
</style>