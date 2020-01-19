<template>
    <section>
        <div class="sidebar lg:hidden" style="right:-250px;top:0px;" id="rightMenu">
            <button class="close-button px-4 md:py-1 py-2">
                <img src="../../../assets/logo-white.png" class="h-10 md:h-16">
            <h2>SPS</h2>
            </button>

            <router-link to="/" class="no-underline"><button class="side-button"><i class="fa fa-home"></i> Home</button></router-link>
            <router-link to="" class="no-underline"><button class="side-button"><i class="far fa-address-card"></i> About Us</button></router-link>
            <router-link to="" class="no-underline"><button class="side-button"><i class="fas fa-comments"></i> Product</button></router-link>
            <router-link to="" class="no-underline"><button class="side-button"><i class="fas fa-blog"></i> Blog</button></router-link>
            <router-link to="" @click="openForm()" class="no-underline"><button class="side-button"><i class="fa fa-bus"></i> Travel</button></router-link>
            <router-link to="" class="no-underline" @click="openPopup()"><button class="side-button"><i class="fas fa-money-bill"></i> Green Cash</button></router-link>
            <button id="navAction" class="side-button-partner mx-2 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-10 shadow opacity-75">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank" class="no-underline hover:text-gray-800 hover:text-underline">
                    <i class="fa fa-handshake"></i>	Partner With Us
                </a>
            </button>
        </div>
        <div class="bg-white flex items-center justify-between md:px-8 px-4 lg:py-5 py-3 relative z-10 header">
            <div class="flex items-center">
                <img src="../../../assets/logo-about.png" class="sm:h-12 h-8" />
                <h1 class="font-bolder font-sans sm:text-3xl text-2xl text-green pl-4">Stone Paper Scissor</h1>
            </div>
            <div class="lg:flex hidden items-center">
                <p class="font-sans font-medium text-green pr-2 pl-6">Home</p>
                <div class="flex flex-col items-center ml-6 relative">
                    <p class="font-medium font-sans px-2 text-green">About</p>
                    <span class="absolute bg-green-light h-2 w-full" style="bottom: -35px;"></span>
                </div>
                <p class="font-sans font-medium text-green pl-6 pr-2">Products</p>
                <p class="font-sans font-medium text-green pl-6 pr-2">Blog</p>
                <p class="font-sans font-medium text-white bg-green ml-6 py-1 px-2">Partner With Us</p>

            </div>
            <button id="nav-toggle" class="lg:hidden block sm:px-3 sm:py-2 px-2 py-1 border rounded text-green-dark border-green-dark hover:text-green hover:border-green appearance-none focus:outline-none z-20" @click="openRightMenu()">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
    <section @click="closeRightMenu()">
        <div class="flex h-auto items-center relative w-auto">
            <div class="absolute font-sans w-1/2 text-left ml-10">
                <h1 class="text-green font-big">Let's save the</h1>
                <h1 class="text-black font-bigger">Environment</h1>
                <h1 class="text-green font-big">Together</h1>
                <button class="bg-green font-sans font-semibold md:px-6 md:py-3 sm:mt-8 mt-3 px-2 py-1 rounded-full save sm:leading-none sm:px-4 sm:py-2 text-lg text-white">Save Now</button>
            </div>
            <img src="../../../assets/banner.png" />
        </div>

        <div class="text-black font-medium font-sans text-center lg:px-24 sm:px-12 sm:py-8 px-8 py-5 lg:py-16">
            <h2 class="md:mb-10 sm:mb-8 mb-5 font-bold underline tracking-wide">About Us</h2>
            <p class="mb-8 leading-tight md:text-lg sm:text-base text-sm">We at Stone Paper Scissors are on a mission to save the environment before it’s too late. We work towards the environment and encourage you to join us. We believe in actions that showing concern towards climate change, thus we came up with Stone Paper Scissors.</p>
            <p class="md:text-lg sm:text-base text-sm leading-tight">Pollution is taking all over the globe, while we are making environment friendly products to counter that. Importance of eco friendly products is what we have to understand and adapt them in our everyday routine. We are now giving alternatives to all the climate saviours so they can switch and start contributing to save the earth.</p>
        </div>

        <div class="text-black font-medium font-sans text-center md:px-16 px-8 md:py-6 py-3">
            <h2 class="md:mb-10 sm:mb-8 mb-5 font-bold underline tracking-wide">Switch For A Better Future</h2>
            <div class="flex flex-wrap justify-between">
                <div class="md:w-1/4 w-4/5 mx-auto md:my-0 my-3 h-64 bg-green">
                </div>
                <div class="md:w-1/4 w-4/5 mx-auto md:my-0 my-3 h-64 bg-green">
                </div>
                <div class="md:w-1/4 w-4/5 mx-auto md:my-0 my-3 h-64 bg-green">
                </div>
            </div>
        </div>
        </section>
    </section>
</template>
<script>
export default {
    name: 'AboutPage',
    data() {
    },
    methods: {
        	openPopup() {
	document.getElementById("popup").setAttribute("style", "display:block; transition: 1s;");
	document.getElementById("full").setAttribute("style", "opacity: 0.5; transition: 1s;");
  document.getElementById("rightMenu").setAttribute("style", "right: -250px; top:0px;");
	},

	closePopup() {
	document.getElementById("popup").setAttribute("style", "opacity: 0.5; position: relative; right: 250px; transition: 1.5s;");
	document.getElementById("full").setAttribute("style", "opacity: 1; transition: 1s;");
	},
	openForm() {
		window.location.href = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYkHHotitOUdgS9dmBXjeYKNdUIV2fp2BOvzwBDpPS2Q_jtQ/viewform?embedded=true" width="640" height="1089" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
	},
	openRightMenu() {
	document.getElementById("rightMenu").setAttribute("style", "right: 0px; top: 0px; transition: 1.5s;");
	document.getElementById("full").setAttribute("style", "opacity: 0.5; position: relative; right: 250px; transition: 1.5s;");
},

closeRightMenu() {
  document.getElementById("rightMenu").setAttribute("style", "right: -250px; top:0px;");
	document.getElementById("full").setAttribute("style", "opacity: 1; position: relative; right: 0px; transition: 1.5s;");
},
    }
}
</script>
<style scoped>
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
.close-button:focus, .side-button:focus, .side-button-partner:focus
{
	outline: none;
}

.side-button {
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    width: -webkit-fill-available;
    text-align: left;
    font-size: 20px;
		font-family: algerian;
    font-weight: 600;
    margin: 10px;
    border-radius: 5px;
}
.side-button-partner 
{
	box-shadow: inset 0 0 5px #000000;
}
.side-button-partner a
{
	color: #2bbaae!important;
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
		display: none;
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
		display: none;
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
		display: none;
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
		display: none;
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