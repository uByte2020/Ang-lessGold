<template>
    <div class="col-lg-4 col-sm-12 col-xl-4 col-md-4 DivImg">
        <figure @click="callDetalhePage()">
        <img
            :src="loadImg(product.foto)"
            class="img-fluid img"
            :alt="product.titulo"
        />
        <figcaption>
            <h6 class="explore-prod">{{product.titulo}}</h6>
            <p class="preco">{{product.origem}}</p>
        </figcaption>
        </figure>
    </div>
</template>

<script>
const productImage = require.context('@/assets/imgs/products/', false, /\.png$|\.jpg$|\.jpeg$/)
const productIcon = require.context('@/assets/svg/', false, /\.png$|\.jpg$|\.svg$/)
export default {
  name: 'top-product-item',
  props: {
    product: Object
  },
    methods: {
    loadImg(imgPath) {
      return productImage('./'+imgPath)
    },
    loadIcon(iconPath) {
      return productIcon('./'+iconPath)
    },
    callDetalhePage(){
      this.$router.push({ name: 'detalhes-produto', params: { _id: String(this.product._id) } })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.preco {
  color: #f8ce00;
  font-family: "JosefiniBold";
  font-size: 1.08rem;
}
.titulo-produto {
  font-family: "JosefiniBold";
  font-weight: 800;
}
a {
  text-decoration: none;
  -moz-text-decoration: none;
  -ms-text-decoration: none;
  -webkit-text-decoration: none;
  background-color: transparent;
  -moz-background-color: transparent;
  -ms-background-color: transparent;
  -webkit-background-color: transparent;
}
.img {
  height: 170px;
  width: 100%;
  object-fit: cover;
  -moz-object-fit: cover;
  -ms-object-fit: cover;
  -webkit-object-fit: cover;
  border-radius: 7px 7px 0 0;
  -moz-border-radius: 7px 7px 0 0;
  -ms-border-radius: 7px 7px 0 0;
  -webkit-border-radius: 7px 7px 0 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.DivImg {
  margin-top: 2%;
  padding-left: 0!important;
  padding-right: 0!important;
}
figure {
  height: 250px;
  -moz-height: 250px;
  -ms-height: 250px;
  -webkit-height: 250px;
  width: 94%;
  -moz-width: 94%;
  -ms-width: 94%;
  -webkit-width: 94%;
  box-shadow: 1px 1px 4px #70707070;
  -moz-box-shadow: 0px 0px 1px gray;
  -ms-box-shadow: 0px 0px 1px gray;
  -webkit-box-shadow: 0px 0px 1px gray;
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
  margin: 1% auto !important;
  -moz-margin: 1% auto !important;
  -ms-margin: 1% auto !important;
  -webkit-margin: 1% auto !important;
  transition: 0.2s ease-out;
  background-color: #fff;
  cursor: pointer;
}
figure:hover {
  transform: scale(1.08);
  transition: 0.3s;
}
figcaption {
  font-family: "Josefin-SemiBold";
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  height: 10%;
  -moz-height: 10%;
  -ms-height: 10%;
  -webkit-height: 10%;
  width: 90%;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  padding: 4%;
  -moz-padding: 4%;
  -ms-padding: 4%;
  -webkit-padding: 4%;
  color: #707070;
  font-size: 0.8rem;
  /* box-shadow: 1px 1px 5px gray; */
}
</style>
