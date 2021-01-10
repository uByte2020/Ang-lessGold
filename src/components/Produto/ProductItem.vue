<template>
    <div class="col-lg-4 col-md-6 col-xl-3 col-sm-12 ImagemGrelha">
        <figure>
            <img :src="loadImg(product.foto)" class="img-fluid img" />
            <figcaption>
                <h3>{{ product.titulo }}</h3>
                <small> {{ product.descricao }} </small><br />
                <router-link to="#">
                    <small>{{ product.saibaMais }}</small>
                </router-link>
                <img
                :src="loadIcon(product.icon)"
                alt="Portugal"
                class="icon img-fluid"
                />
            </figcaption>
        </figure>
    </div>
</template>

<script>
const productImage = require.context('@/assets/imgs/products/', false, /\.png$|\.jpg$|\.jpeg$/)
const productIcon = require.context('@/assets/svg/', false, /\.png$|\.jpg$|\.svg$/)
export default {
  name: 'ProductItem',
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
  },
}
</script>

<style scoped>
.ProdutoTitulo {
  text-align: left;
  padding: 3%;
  background-color: #8cb560;
  color: #fff;
}
.ProdutoTituloH1 {
  text-align: left;
  margin-left: 4%;
}
.ImagemGrelha {
  text-align: left;
  width: 100%;
  margin: 1% auto;
  padding: 2%;
}
h3 {
  font-size: 20px;
  color: #000;
}
a {
  color: #8cb560;
}
.icon {
  height: 20px;
  margin-left: 150px !important;
  margin-right: 0px !important;
  margin: 0px;
}
figure {
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  width: 300px;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  box-shadow: 1px -1px 5px #70707070;
  -moz-box-shadow: 1px -1px 5px #70707070;
  -ms-box-shadow: 1px -1px 5px #70707070;
  -webkit-box-shadow: 1px -1px 5px #70707070;
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
  margin: 1% auto !important;
  -moz-margin: 1% auto !important;
  -ms-margin: 1% auto !important;
  -webkit-margin: 1% auto !important;
}

figcaption {
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  /* margin-left: 3%; */
  height: 10%;
  -moz-height: 10%;
  -ms-height: 10%;
  -webkit-height: 10%;
  width: 95%;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  padding: 4%;
  -moz-padding: 4%;
  -ms-padding: 4%;
  -webkit-padding: 4%;
  /* box-shadow: 1px 1px 5px gray; */
}
.img {
  width: 100%;
  height: 200px;
  border-radius: 7px;
  object-fit: cover;
}
@media only screen and (max-width: 300px) {
  
figure {
  height: 100%;
  -moz-height: 100%;
  -ms-height: 100%;
  -webkit-height: 100%;
  width: 250px;
  -moz-width: 250px;
  -ms-width: 250px;
  -webkit-width: 250px;
  box-shadow: 1px -1px 5px #70707070;
  -moz-box-shadow: 1px -1px 5px #70707070;
  -ms-box-shadow: 1px -1px 5px #70707070;
  -webkit-box-shadow: 1px -1px 5px #70707070;
  border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  -webkit-border-radius: 7px;
  margin: 1% auto !important;
  -moz-margin: 1% auto !important;
  -ms-margin: 1% auto !important;
  -webkit-margin: 1% auto !important;
}

figcaption {
  margin: 1% auto;
  -moz-margin: 1% auto;
  -ms-margin: 1% auto;
  -webkit-margin: 1% auto;
  /* margin-left: 3%; */
  height: 10%;
  -moz-height: 10%;
  -ms-height: 10%;
  -webkit-height: 10%;
  width: 95%;
  -moz-width: 90%;
  -ms-width: 90%;
  -webkit-width: 90%;
  padding: 4%;
  -moz-padding: 4%;
  -ms-padding: 4%;
  -webkit-padding: 4%;
  /* box-shadow: 1px 1px 5px gray; */
}
.icon {
  height: 20px;
  margin-left: 150px !important;
  margin-right: 0px !important;
  margin-top: -40px;
}
}
</style>
