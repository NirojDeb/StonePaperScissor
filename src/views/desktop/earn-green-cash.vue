<template>
	<section class="leading-normal tracking-normal text-white">
		<!-- Nav Header -->
		<header>
			<nav id="header" class="fixed w-full z-30 top-0 text-white gradient">
				<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 gradient">
					<div class="pl-4 flex items-center">
						<a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
							{{companyDetail.companyDetail.name}}
						</a>
					</div>


					<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
						<ul class="list-reset lg:flex justify-end flex-1 items-center">
							<li class="mr-12">
								<a class="inline-block py-2 px-4 text-white font-bold no-underline" href="#">
									Home
								</a>
							</li>
							<li class="mr-12">
								<a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-8" href="#/earn-green-cash">
									Earn Green Cash
								</a>
							</li>
						</ul>
						<button id="navAction" class="mx-2 lg:mx-0 hover:underline bg-white text-gray-800
						font-bold rounded-full mt-4 lg:mt-0 py-4 px-10 shadow opacity-75">
							<a class="text-blue no-underline hover:text-gray-800 hover:text-underline"
								href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank">
								Partner With Us
							</a>
						</button>
					</div>
					
<div class="sidebar lg:hidden" style="right:0px;top:0px;" id="rightMenu">
<button class="close-button">
	<!-- <img src="assets/logo.png" class="w-full md:w-4/5 z-50"> -->
	SPS
</button>

	<a href="#" class="no-underline"><button class="side-button"><i class="fa fa-home"></i> Home</button></a>
	<a href="#" class="no-underline"><button class="side-button"><i class="fas fa-users"></i> Earn Green Cash</button></a>
	<button id="navAction" class="side-button-partner mx-2 lg:mx-0 hover:underline bg-white text-gray-800
		font-bold rounded-full mt-4 lg:mt-0 py-4 px-10 shadow opacity-75">
		<a href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank" class="no-underline hover:text-gray-800 hover:text-underline">
			<i class="fa fa-handshake">
			</i>	Partner With Us
		</a>
	</button>
</div>
<div class="block lg:hidden pl-4">
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
		</header>
		<!--Hero-->
		<div @click="closeRightMenu()" id="full">
		<div class="pt-24 gradient">
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Left Col-->
				<div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
					<p class="uppercase tracking-loose w-full">
						Coming soon
					</p>

				</div>
				<!--Right Col-->
				<div class="w-full md:w-3/5 py-6 text-center">
					<img class="w-full md:w-4/5 z-50" src="@/assets/products/greenbox.png">
				</div>

			</div>

		</div>

		<section class="bg-gray-100 py-8">

			<div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">

				<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800  text-black">Team</h1>
				<div class="w-full mb-4">
					<div class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>

				<div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">

					<div class="rounded overflow-hidden shadow-lg m-4 p-8" v-for="(profile, id) in companyDetail.team" v-bind:key="id">
							<img v-if="profile.name === 'Aniket Dogra'"
							class="rounded-full w-40 h-40"
							alt="@/assets/team_photos/aniket.jpg"
							src="@/assets/team_photos/aniket.jpg" />
							<img v-if="profile.name === 'Aditya Kumar'"
							class="rounded-full w-40 h-40 flex items-center justify-center"
							alt="@/assets/team_photos/aditya.png"
							src="@/assets/team_photos/aditya.png" />
							<img v-if="profile.name === 'Shrey Saxena'"
							class="rounded-full w-40 h-40 flex items-center justify-center"
							alt="@/assets/team_photos/shrey.jpg"
							src="@/assets/team_photos/shrey.jpg" />
							<div class="text-center px-3 pb-6 pt-2">
								<h3 class="text-black text-sm bold font-sans">{{profile.name}}</h3>
								<h4 class="text-black text-sm bold font-sans">{{profile.title}}</h4>
								<p class="mt-2 font-sans font-light text-grey-dark">{{profile.shortBio}}</p>
							</div>
							<!-- social media urls -->
							<div class="flex text-center justify-around">
								<div class="px-2 py-2">
									<a :href="profile.facebook">
										<i class="fa-lg fab fa-facebook-square text-grey" />
									</a>
								</div>
								<div class="px-2 py-2">
									<a :href="profile.instagram">
										<i class="fa-lg fab fa-instagram text-grey"/>
									</a>
								</div>
								<div class="px-2 py-2">
									<a :href="profile.linkedin">
										<i class="fa-lg fab fa-linkedin text-grey"/>
									</a>
								</div>
								<!-- <div class="px-2 py-2">
									<a :href="profile.twitter">
										<i class="fa-lg fab fa-twitter-square text-grey"/>
									</a>
								</div> -->
							</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Change the colour #f8fafc to match the previous section colour -->
		<svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
					<g class="wave" fill="#f8fafc">
						<path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
					</g>
					<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
						<g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
							<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
							<path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
							<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
						</g>
					</g>
				</g>
			</g>
		</svg>

		<!-- <section class="mx-auto text-center py-6 mb-12 gradient">
			<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Himalayas Hero Cycles</h1>
			<div class="w-full mb-4">
				<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
			</div>
			<h3 class="my-4 text-3xl leading-tight">Sign up to volunteer in Himalaya!</h3>
			<button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
			<a class="text-blue no-underline hover:text-gray-800 hover:text-underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdKSL_eE924omenVL8D1pz8uF-2f6t02NZetbIQoJ99rAN8aw/viewform" target="_blank">
			Apply to Volunteer
			</a>
		</button>
		</section> -->



		<!--Footer-->
		<footer class="bg-white">
			<div class="container mx-auto  px-8">
				<div class="w-full flex flex-col md:flex-row py-6">
					<div class="flex-1 mb-6 flex-1 mb-6 text-center">
						<!-- <a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> -->
							<!-- <path class=" gradient plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/> -->
							<span class="text-orange text-xl"> {{companyDetail.companyDetail.name}} </span>
						<!-- </a> -->
					</div>
					<!-- <div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Links</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">FAQ</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Help</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
							</li>
						</ul>
					</div>
					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Legal</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
							</li>
						</ul>
					</div>
					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Social</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
							</li>
						</ul>
					</div>
					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Company</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Official Blog</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
							</li>
						</ul>
					</div> -->
				</div>
			</div>
			<p class="text-blue text-center p-12">NGO initiative of Growdiesel Ventures Limited</p>
		</footer>
		<!-- shopping footer -->
		<footer v-if="areItemsAddedInCart" class='bg-white fixed gradient w-full pin-b text-white text-xl'>
			<div class="flex bg-gray-200">
				<div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
					<h4 class="text-gray-600 text-base">
										{{ count }} box
									</h4>
									<h1 class="letter-spacing-03 text-lg">
										&#8377;{{ totalAmount }}
									</h1>
				</div>
				<div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"></div>
				<div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-4">
					<button class="mx-auto text-gray-800 font-bold " @click.prevent="openCheckoutPage()">
						Checkout
					</button>
				</div>
			</div>
		</footer>
		
			</div>
	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { connect } from 'net';
import { truncate } from 'fs';
import companyDetail from '../../assets/json/company.json';

export default {
  name: 'HimalayasHeroHondaPage',
  components: {
    DesktopHeader: () => import('@/components/desktop-header.vue'),
  },
  data() {
    return {
      hideNavScroll: false,
      cachedQuery: {},
	  renderReady: false,
	  companyDetail,
	  areItemsAddedInCart: false,
	  previousCount: 0,
	  count: 0,
	  maxItems: 500,
	  amount: 250,
	  totalAmount: 0,
    };
  },
  computed: {
    ...mapGetters(['request']),
    routeName() {
      if (this.$route.meta.saveScrollPos && this.viewScrollPos[this.$route.name]) {
        // eslint-disable-next-line
        setTimeout(() => {
          window.scrollTo(this.viewScrollPos[this.$route.name].x, this.viewScrollPos[this.$route.name].y);
        }, 0);
      }
      return this.$route.name;
    },
  },
  watch: {
    $route(to, from) {
      if (from.name === 'Dashboard.Articles' && to.name !== from.name) this.cachedQuery = from.query;
    },
  },
  methods: {
    ...mapActions(['login']),
    hideNavScrollFunc(e) {
      this.hideNavScroll = e;
	},
	addItemInCart() {
      if (this.areItemsAddedInCart == false) {
        this.areItemsAddedInCart = true;
	  }
      if (this.previousCount += 1 < this.maxItems) {
        this.count += 1;
		this.totalAmount = this.count * this.amount;
		this.previousCount = this.count;
      }
	},
	openCheckoutPage(){
		console.log('checkout page');
		// /* initialize an object */
		// var paytmParams = {};

		// /* put checksum parameters in Object */
		// paytmParams["MID"] = "sVKfPM29735471934071";
		// paytmParams["ORDERID"] = "3232";

		// checksum_lib.genchecksum(paytmParams, "#bd#n6YvrGGrMvkD", function(err, checksum){
		// 	console.log('checksum is: '+checksum);
		// });
		window.location.href = 'https://rzp.io/l/bOQRt9R';
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
<style lang="scss">
@import '../../styles/common/_variables.scss';

.dashboard-root-container {
  background: $pale-white;
  padding: 0 0 48px 0;
  min-height: 100vh;
  // padding-top: constant(safe-area-inset-top);
  // padding-top: env(safe-area-inset-top);
}

.gradient {
	background: linear-gradient(90deg, #33d574 0%, #28b0c5 100%);
}

@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}


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
{display: block;
padding: 8px 16px;
width: 100%;
text-align: left;
color: inherit;
text-decoration: none;
font-size: 26px;
font-weight: 700;
font-family: monospace;
    background-color: #33d575;
    font-family: monospace;
		box-shadow: 0px 8px 8px -6px black;
		transition: .6s;
}
.close-button:hover{text-shadow: 0px 3px 8px;}
.side-button {
background-color: #d5f3e1;
    border: none;
    color: #2bbaae;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    width: -webkit-fill-available;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    font-family: monospace;
    margin: 10px;
    border-radius: 5px;
    box-shadow: inset 0 0 5px #000000;
}
.side-button-partner 
{
				box-shadow: inset 0 0 5px #000000;
}
.side-button-partner a
{
				color: #2bbaae!important;
}
@media only screen and (max-width: 991px)
{
	#full
	{
		opacity: .5;
		right: 250px;
		position: relative;
		transition: 1.5s;
	}
}
</style>
