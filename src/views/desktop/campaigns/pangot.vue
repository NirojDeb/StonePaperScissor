<template>
<section>
    <Head />
    <div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSaM35De36F15dQEAAoPJoYxnvqQZ1snzSfoTa1RNab4RBtg/viewform?embedded=true" class="form block md:w-5/6 h-screen w-full mx-auto pt-24">Loading…</iframe>
    </div>
</section>
</template>
<script>
import Head from '../../mobile/campaigns/head.vue';
import companyDetail from '../../../assets/json/company.json';
export default {
  name: 'PangotPage',

  data() {
    return {
    companyDetail,
    };
  },
  components: {
    Head,
  },
};
</script>
<style lang="scss">
@import '../../../styles/common/_variables.scss';
 .nav {
    display: flex;
  }
#nav-toggle
{
  display: none;
}
.formHead
{
  justify-content: center;
}
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

.algerian
{
	font-family: algerian;
	margin: 0px 10px;
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
padding: 8px 16px;
width: 100%;
    background-color: #33d575;
    font-family: algerian;
		box-shadow: 0px 8px 8px -6px black;
		transition: .6s;		
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo
{
	height: 60px;
	width: 60px;
}
.close-button h2
{
	font-family: algerian;
	font-size: 36px;
	font-weight: bold;
	color: white;
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
  .nav {
    display: none;
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
.nav {
    display: none;
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
// .span1, .span2, .span3, .span4, .span5 {
//     height: 150px;
//     width: 150px;
//     position: absolute;
//     background-color: #ffffff1f;
//     border-radius: 50%;
// }

// .span2 {
//     top: 0px;
//     right: 60px;
// }

// .span3 {
//     top: 100px;
//     left: 50%;
// }

// .span4 {
//     left: -20px;
//     top: 160px;
// }

// .span5 {
//     bottom: 50px;
//     left: 70%;
// }

// .span1 {
//     left: 30%;
//     top: 52%;
// }

.form::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.form::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.form-4::-webkit-scrollbar-thumb
{
	background-color: #000000;
	border: 2px solid #555555;
}
</style>
