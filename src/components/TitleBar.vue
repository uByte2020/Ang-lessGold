<template>
    <div class="col-12 title-bar" :class="pageClass">
        <h1 style="margin-left: 4%">{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: String,
    pageClass: {
        type: String,
        default:'page-default'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title-bar {
  background-color: rgb(139, 180, 95, 0.6)!important;
  color: #fff;
  padding: 2%;
  font-family: "Gotham";
  text-align: left;
  position: relative;
}
.title-bar::before{
    content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left: 0;
  filter: brightness(.3);
  z-index: -1;
}
/* Pages START*/
.produto-page::before{
    background-image: url('../assets/imgs/img36.jpg');
    background-position: center;
    background-size: cover;
}

.contacto-page::before{
    background-image: url('../assets/imgs/img35.jpg');
    background-position: center;
    background-size: cover;
}

.quem-somos-page::before{
    background-image: url('../assets/imgs/img34.jpg');
    background-position: center;
    background-size: cover;
}
/* Pages END*/
h1{
    text-transform: uppercase;
}
</style>
