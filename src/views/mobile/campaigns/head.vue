<template>
<section>
   <div v-if="greenCash == true" @click="greenCash = false" class="fixed z-10 h-full w-full bg-black opacity-50">
   </div>
   <div v-if="greenCash == true" id="popup" class="z-50">
      <div class="head">
         <h2>The page is about to launch.</h2>
      </div>
      <img src="../../../assets/popup.png" class="popup-bg">
      <div class="foot">
         <input type="text" size="20" name="email" placeholder="Enter Email..."><button>Subscribe</button>
      </div>
   </div>
   <nav id="header" class="w-full z-30 text-white gradient">
      <div class="w-full px-4 mx-auto flex flex-wrap items-center justify-between mt-0 py-2 gradient formHead">
            <div class="flex items-center">
               <img src="../../../assets/logo-white.png" class="h-12 w-12">
               <h1 class="font-bold text-2xl sm:text-3xl text-white mx-2">
               {{companyDetail.companyDetail.name}}
               </h1>
            </div>
         <div class="lg:flex items-center hidden">

                  <router-link to="/home"><p class="px-3 border-r border-white text-white font-bold">
                  Home
                  </p></router-link>
                  <p @click="greenCash = true" class="px-3 border-r border-white text-white font-bold">
                  Green Cash
                  </p>
                  <router-link to="/pangot"><p class="px-3 border-r border-white text-white font-bold">
                  Travel
                  </p></router-link>
                  <router-link to="/blog"><p class="px-3 border-r border-white text-white font-bold">
                  Blog
                  </p></router-link>
                  <router-link to="/about"><p class="px-3 border-r border-white text-white font-bold">
                  About
                  </p></router-link>
                  <router-link to="/login"><p class="px-3 text-white font-bold">
                  Admin
                  </p></router-link>
            <button v-if="$route.path === '/blog'" id="navAction" class="bg-white border border-grey-dark font-bold px-3 py-2 rounded-lg">
            <router-link to="/add-post" class="no-underline hover:text-underline text-blue-dark">
            Create Post
            </router-link>
            </button>
            <button v-else id="navAction" class="bg-white border border-grey-dark font-bold px-3 py-2 rounded-lg">
            <a class="no-underline hover:text-underline text-blue-dark"
               href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank">
            Partner With Us
            </a>
            </button>
         </div>
         <div class="sidebar lg:hidden" style="right:-250px;top:0px;" id="rightMenu">
            	<h2 class="border-b border-white flex font-serif h-16 items-center justify-center w-full">Stone Paper Scissor</h2>
            <div class="flex flex-col">
               <router-link to="/home" class="no-underline"><button class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="fa fa-home"></i> Home</button></router-link>
            <p><button @click="greenCash = true" class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="fas fa-money-bill"></i> Green Cash</button></p>
            <router-link to="/pangot" class="no-underline"><button class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="fa fa-bus"></i> Travel</button></router-link>
            <router-link to="/blog" class="no-underline"><button class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="fas fa-blog"></i> Blog</button></router-link>
            <router-link to="/about" class="no-underline"><button class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="far fa-address-card"></i> About Us</button></router-link>
            <router-link to="/login" class="no-underline"><button class="font-bold font-serif px-4 py-4 text-white cursor-pointer"><i class="fas fa-comments"></i> Admin</button></router-link>
            <button v-if="$route.path === '/blog'" id="navAction" class="bg-white border border-grey-dark font-bold mx-4 my-2 py-2 rounded-lg">
            <router-link to="/add-post" class="no-underline hover:text-underline text-green">
            Create Post
            </router-link>
            </button>
            <button v-else id="navAction" class="bg-white border border-grey-dark font-bold mx-4 my-2 py-2 rounded-lg">
            <a class="no-underline hover:text-underline text-green"
               href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank">
            Partner With Us
            </a>
            </button>
            </div>
        </div>
         <div class="block lg:hidden">
            <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none text-white" @click="openRightMenu()">
               <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
               </svg>
            </button>
         </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
   </nav>
</section>


</template>

<script>
import companyDetail from '../../../assets/json/company.json';

export default {
  name: 'Head',

  data() {
    return {
      companyDetail,
      greenCash: false,
    };
  },
  methods: {
    openForm() {
      window.location.href = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYkHHotitOUdgS9dmBXjeYKNdUIV2fp2BOvzwBDpPS2Q_jtQ/viewform?embedded=true" width="640" height="1089" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
    },
    openRightMenu() {
      document.getElementById('rightMenu').setAttribute('style', 'right: 0px; top: 0px; transition: 1.5s;');
      document.getElementById('full').setAttribute('style', 'opacity: 0.5; position: relative; right: 250px; transition: 1.5s;');
    },

    closeRightMenu() {
      document.getElementById('rightMenu').setAttribute('style', 'right: -250px; top:0px;');
      document.getElementById('full').setAttribute('style', 'opacity: 1; position: relative; right: 0px; transition: 1.5s;');
    },
  },
};
</script>

<style scoped>
.gradient {
    background: linear-gradient(90deg, #33d574 0%, #28b0c5 100%);
}
.header {
    box-shadow: 0px 0px 40px 0px #0000007d;
}
.save {
    box-shadow: 0px 2px 3px 0px #727070;
}
.font-big {
    font-size: 50px;
}
.font-bigger {
    font-size: 80px;
}
.position-btn {
    top:27px;
    right:27px;
}
.sidebar
{
	height:100%;
	width:250px;
    background: linear-gradient(to right, #16cf73 30%, #16cf73 100%);
	position:fixed!important;
	overflow:auto;
	z-index: 31;
	animation: animateright .4s;
    box-shadow: 10px 0px 9px 10px black;
	transition: 1.5s;
}

.close-button
{
width: 100%;
    background-color: #33d575;
    font-family: algerian;
		box-shadow: 0px 0px 40px 0px #0000007d;
		transition: .6s;
    display: flex;
    align-items: center;
}
.close-button h2
{
	font-family: algerian;
	font-size: 36px;
	font-weight: bold;
    color: white;
    padding: 0px 40px;
}
#popup {
    height: 505px;
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid white;
    z-index: 33;
    box-sizing: border-box;
    background-color: #0000007a;
		/* display: none; */
		box-shadow: 0px 0px 30px 0px black;
		border-radius: 20px 0px 20px 0px;
}
.head {
    position: relative;
    width: 100%;
    color: black;
    height: 70px;
    background: linear-gradient(90deg, #28b0c5 0%, #33d574 100%);
		border-radius: 20px 0px 20px 0px;
}
.head h2 {
    text-align: center;
    color: white;
    font-family: algerian;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
}
.popup-bg {
    height: 400px;
    display: block;
    margin: auto;
}
.foot {
    position: relative;
    width: auto;
    height: 30px;
    display: flex;
}
.foot input[type="text"] {
    height: 30px;
    width: 70%;
    background-color: #28b1c4;
    margin-left: 0px;
		padding: 0px 10px;
		border-radius: 20px 0px 0px 0px;
}
.foot button {
    color: white;
    font-family: monospace;
    background: #33d475;
    height: 30px;
    width: 30%;
		margin-right: .5px;
		border-radius: 0px 0px 17px 0px;
}
@media only screen and (max-width: 991px)
{

    .font-big {
        font-size: 40px;
    }
    .font-bigger {
        font-size: 67px;
    }
	#full
	{
		opacity: 1;
		right: 0px;
		position: relative;
		transition: 1.5s;
	}

#popup {
    height: 404px;
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid white;
    z-index: 33;
    box-sizing: border-box;
    background-color: #0000007a;
		/* display: none; */
}
.head {
    position: relative;
    width: 100%;
    color: black;
    height: 56px;
    background: linear-gradient(90deg, #28b0c5 0%, #33d574 100%);
}
.head h2 {
    text-align: center;
    color: white;
    font-family: algerian;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
}
.popup-bg {
    height: 320px;
    display: block;
    margin: auto;
}
.foot {
    position: relative;
    width: auto;
    height: 24px;
    display: flex;
}
.foot input[type="text"] {
    height: 24px;
    width: 70%;
    background-color: #28b1c4;
    margin-left: 1px;
}
.foot button {
    color: white;
    font-family: monospace;
    background: #33d475;
    height: 24px;
    width: 30%;
}
}

@media only screen and (max-width: 700px)
{

.font-big {
    font-size: 26px;
}
.font-bigger {
    font-size: 46px;
}
#popup {
    height: 323px;
    width: 320px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid white;
    z-index: 33;
    box-sizing: border-box;
    background-color: #0000007a;
		/* display: none; */
}
.head {
    position: relative;
    width: 100%;
    color: black;
    height: 45px;
    background: linear-gradient(90deg, #28b0c5 0%, #33d574 100%);
}
.head h2 {
    text-align: center;
    color: white;
		font-size: larger;
    font-family: algerian;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
}
.popup-bg {
    height: 256px;
    display: block;
    margin: auto;
}
.foot {
    position: relative;
    width: auto;
    height: 19px;
    display: flex;
    margin: -2px 0px 0px -1px;
}
.foot input[type="text"] {
    height: 19px;
    width: 70%;
    background-color: #28b1c4;
    margin-left: 1px;
}
.foot button {
    color: white;
    font-family: monospace;
    background: #33d475;
    height: 19px;
    width: 30%;
}
}
@media only screen and (max-width: 500px)
{

.font-big {
    font-size: 20px;
}
.font-bigger {
    font-size: 30px;
}
#popup {
    height: 262px;
    width: 260px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid white;
    z-index: 33;
    box-sizing: border-box;
    background-color: #0000007a;
		/* display: none; */
		box-shadow: 0px 0px 15px 0px black;
}
.head {
    position: relative;
    width: 100%;
    color: black;
    height: 36px;
    background: linear-gradient(90deg, #28b0c5 0%, #33d574 100%);
}
.head h2 {
    text-align: center;
    color: white;
		font-size: medium;
    font-family: algerian;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
}
.popup-bg {
    height: 205px;
    display: block;
    margin: auto;
}
.foot {
    position: relative;
    width: auto;
    height: 15.2px;
    display: flex;
    margin: 1px -.5px 0px 0px;
}
.foot input[type="text"] {
    height: 15.2px;
    width: 70%;
    background-color: #28b1c4;
    margin-left: 1px;
}
.foot button {
    color: white;
    font-family: monospace;
    background: #33d475;
    height: 15.2px;
    width: 30%;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size:smaller;
}
}

@media screen and (max-width: 430px) {
	.small-font
	{
		font-size: 1.2rem;
	}
	.logo
	{
		height: 50px;
		width: 50px;
	}

}
@media screen and (max-width: 360px) {
	.small-font
	{
		font-size: 1rem;
	}
	.logo
	{
		height: 40px;
		width: 40px;
	}

}
</style>
