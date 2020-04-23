<template>
    <section class="auth-page bg-white h-screen">
    <div class="flex flex-col h-screen container justify-center mx-auto">
        

      <form class="mx-auto w-2/3 md:w-2/5" method="post" name="validation" role="form" @submit.prevent="login(user)">
               <div class="mx-auto w-1/4">
					<img class="" src="@/assets/products/greenbox.png">
				</div>
        <h1 class="font-bold text-2xl sm:text-3xl text-gred mb-4 text-center">
               Stone Paper Scissor
               </h1>
        <div class="mb-4">
          <label class="form-input-label" for="ohrid">
            Email Id
          </label>
          <input id="ohrid" class="form-input-text w-full" type="number" placeholder="Enter Your Email...">
        </div>

        <div class="mb-4">
          <label class="form-input-label" for="password">
            Password
          </label>
          <input
            id="password"
            class="form-input-text w-full"
            type="password"
            placeholder="Enter Password Here..."
          >
          <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
        </div>

        <button
          class="form-button button w-full mb-16"
        >
          <span>Sign In</span>
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
    name: 'LoginPage'
}
</script>
<style scoped>
.form-input-text {
background-color: #f5f5f5;
    border-width: 1px;
    border-color: #28b0c5;
    line-height: 1.25;
    padding: .75rem;
    border-radius: .25rem;
    color: #33d574;
}
.form-input-label {
    display: block;
    color: #28b0c5;
    font-size: .875rem;
    margin-bottom: .25rem;
    text-transform: uppercase;
    letter-spacing: .025em;
}
.form-button {
    font-weight: 600;
    margin-top: 1.25rem;
    padding-top: .75rem;
    padding-bottom: .75rem;
    border-radius: .25rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.125rem;
    outline: 0;
    position: relative;
    background: linear-gradient(90deg, #33d574 0%, #28b0c5 100%);
}
.text-gred {
    background: -webkit-linear-gradient(#33d574, #28b0c5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>