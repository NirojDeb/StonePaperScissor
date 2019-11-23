<template>
<section>
   <div id="popup">
    <div class="head"><h2>The page is about to launch.</h2></div>
<img src="../../../assets/popup.png" class="popup-bg">
<div class="foot">
				
				<input type="text" size="20" name="email" placeholder="Enter Email..."><button>Subscribe</button>
			</div></div>
			<nav id="header" class="fixed w-full z-30 top-0 text-white gradient">
				<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 gradient formHead">
					<router-link to="home">
               <div class="pl-4 flex items-center">
						<img src="../../../assets/logo-white.png" class="logo">
						<a class="algerian small-font toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
							{{companyDetail.companyDetail.name}}
						</a>
					</div>
					</router-link>
					<div class="nav w-full flex-grow  lg:items-center lg:w-auto  mt-2 lg:mt-0  text-black p-4 lg:p-0 z-20" id="nav-content">
						<ul class="nav list-reset justify-end flex-1 items-center">
							<li>
								<a class="algerian inline-block py-2 px-1 text-white font-bold no-underline" href="#">
								<i class="fa fa-home"></i>	Home
								</a>
							</li>
							<li>
								<a @click="openPopup()" class="algerian inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-1" href="#">
									<i class="fa fa-money"></i>Green Cash
								</a>
							</li>
							<li>
								<!-- <a @click="openForm()" class="algerian inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-1" href="#">
									<i class="fa fa-money"></i>Travel
								</a> -->
								<router-link to = "/pangot" class="algerian inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-1">Travel</router-link>
							</li>
						</ul>
						<button id="navAction" class="mx-2 lg:mx-0 hover:underline bg-white font-bold text-gray-800
						font-bold rounded-full mt-4 lg:mt-0 py-3 shadow opacity-75">
							<a class="algerian text-blue no-underline hover:text-gray-800 hover:text-underline"
								href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank">
								Partner With Us
							</a>
						</button>
					</div>
					
<div class="sidebar lg:hidden" style="right:-250px;top:0px;" id="rightMenu">
<button class="close-button">
	<img src="../../../assets/logo-white.png" class="logo">
<h2>SPS</h2>
</button>

  <a href="#" class="no-underline"><button class="side-button"><i class="fa fa-home"></i> Home</button></a>
  <!-- <a href="#" class="no-underline"><button class="side-button"><i class="far fa-address-card"></i> Contact</button></a>
	<a href="#" class="no-underline"><button class="side-button"><i class="fas fa-comments"></i> Reviews</button></a> -->
								<!-- <a @click="openForm()" class="algerian inline-block text-white no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-1" href="#">
									<i class="fa fa-money"></i>Travel
								</a> -->
								<router-link to = "/pangot" class="algerian inline-block py-2 px-1 text-white font-bold text-xl no-underline px-4"><i class="fa fa-bus"></i> Travel</router-link>
	<a href="#" class="no-underline" @click="openPopup()"><button class="side-button"><i class="fas fa-users"></i> Green Cash</button></a>
	  <button id="navAction" class="side-button-partner mx-2 lg:mx-0 hover:underline bg-white text-gray-800
						font-bold rounded-full mt-4 lg:mt-0 py-4 px-10 shadow opacity-75"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank" class="no-underline hover:text-gray-800 hover:text-underline">
							<i class="fa fa-handshake"></i>	Partner With Us
							</a></button>
</div>
<div class="block lg:hidden mr-4">
						<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none" @click="openRightMenu()">
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
    };
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
  },
};
</script>

