<template>
  <div class="col-12 produto-detalhe-item">
        <div class="row">
        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 imagem">
            <img
            :src="loadImg(product.foto)"
            class="img"
            alt="Bacalhau Posta"
            />
        </div>
        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 Texto">
            <h1 class="Bacalhau">{{product.titulo}}</h1>
            <ul>
                <li><label>Quantidade:</label> <span>{{product.quantidade}}</span></li>
                <li><label>Características:</label> <span>{{product.caracteristica}}</span></li>
                <li class="BacalhauH4">
                    <label>Origem: </label> <span class="mr-3">{{product.origem}}</span>
                    <img
                        :src="loadIcon(product.icon)"
                        alt="Portugal"
                        class="icon img-fluid"
                    />
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
const productImage = require.context('@/assets/imgs/products/', false, /\.png$|\.jpg$|\.jpeg$/)
const productIcon = require.context('@/assets/svg/', false, /\.png$|\.jpg$|\.svg$/)
export default {
  name: 'detalhe-produto-item',
  props: {
    product:{
        type:Object,
        required: true,
        default:()=>{
            return {
                titulo: 'Produto',
                foto:'img1.jpeg',
                icon: 'ao.svg',
                quantidade:'',
                caracteristica:''
            }
        }
    }
  },
  methods: {
    loadImg(imgPath) {
      return productImage('./'+imgPath)
    },
    loadIcon(iconPath) {
      return productIcon('./'+iconPath)
    },
    getOrigem(icon){
        return icon.startWith('ao') ? 'Angola':'Portugal';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul{
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin-left: 0.67em;
}

ul li label{
    font-size: 1.6rem;
    color: #707070;
}

ul li span{
    font-size: 1.6rem;
    font-weight: bold;
    font-family: Josefin;
    /* font-style: italic; */
}
.produto-detalhe-item{
    margin-bottom: 1%;
    margin-top: 1%;
}

a:hover {
  text-decoration: none;
}

.img:hover{
  filter:brightness(80%);
  transition: 0.3s;
  transform: scale(1.02);
}

.img {
  cursor: pointer;
  height: 100% !important;
  width: 70%;
  border-radius: 5px;
  /* box-shadow: 2px 2px 8px #707070; */
  object-fit: cover !important;
   transition: 0.3s ease-out;
}
.imagem {
    height: 350px;
    margin-left: -2%;
}
.Texto {
  text-align: left;
  margin-left: -6%;
  font-family: Josefin;
}
.Bacalhau {
  font-size: 50px;
  color: #000;
}
.BacalhauTexto {
  width: 90%;
  margin: 5% 0% !important;
  line-height: 3;
  font-size: 20px;
  color: #70707070;
}
.icon {
  height: 30px;
}
#AlimentoBacalhau {
  position: relative;
}
#AlimentoBacalhau::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  background: url("../../assets/imgs/img4.jpg") no-repeat center center;
  background-size: 100% 120%;
  -moz-background-size: 100% 120%;
  -ms-background-size: 100% 120%;
  -webkit-background-size: 100% 150%;
  filter: opacity(0.1);
  -moz-filter: opacity(0.1);
  -ms-filter: opacity(0.1);
  -webkit-filter: opacity(0.1);
}
@font-face {
  font-family: "Josefin";
  src: local("Fonts"),
    url(../../assets/Fonts/josefin-sans.bold.ttf) format("truetype");
}
@media only screen and (max-width: 600px) {
  .Texto {
    text-align: left;
    margin-left: 1%;
    font-family: Josefin;
  }
  .img {
    height: 100% !important;
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #707070;
    object-fit: fill !important;
  }
  .BacalhauTexto {
    width: 100%;
    margin: 5% 0% !important;
    line-height: 2;
    font-size: 20px;
    color: #70707070;
  }
  .Bacalhau{
    font-size: 35px;
    margin-top: 2%;
  }
  ul li label{
    font-size: 1.3rem;
    color: #707070;
}
ul li span{
    font-size: 1.3rem;
    font-weight: bold;
    font-family: Josefin;
    /* font-style: italic; */
}
}
</style>
