<template>
  <section class="dashboard-download-page">
    <img class="centered tophead1 fluid ui" src="/img/download-page/tophead.png">
    <div id="banner">
      <a href="https://gsocialgomediaservice.blob.core.windows.net/gsocialgo/gsocialgo.apk" download>
        <img class="ui fluid centered small image" src="/img/download-page/android.png">
      </a>
      <a href="itms-services://?action=download-manifest&url=https://gsocialgo.genpact.com/assets/apps/gsocialgo.plist">
        <img class="ui fluid centered small image" src="/img/download-page/ios.png">
      </a>
    </div>
    <div class="px-8">
      <ul class="stepsui list-reset">
        <li>
          <h3 class="my-2">
            Steps for Android devices
          </h3>
          <ol class="ui ordered list pl-4">
            <li>
              <span> Click on the Android icon to download the app</span>
            </li>
            <li>
              <span> Enable 'App install' option</span>
            </li>
            <li>
              <span>Open Security in <b>Settings</b> -> <b>Security</b> </span>
            </li>
            <li>
              <span>Enable ‘App install’ from ‘Unknown sources’</span>
            </li>
            <li>
              <span>Install the ‘GSocial Go’ app</span>
            </li>
          </ol>
        </li>
        <li>
          <h3 class="my-2 mt-5">
            Steps for iOS devices
          </h3>
          <ol class="ui ordered list pl-4">
            <li>
              <span> Click on the iOS icon to install the app</span>
            </li>
            <li>
              <span> Go to General in <b>Settings</b> -> <b>General</b></span>
            </li>
            <li>
              <span> Click on <b>Device Management</b></span>
            </li>
            <li>
              <span> Click on <b>'Genpact India Pvt Ltd'</b></span>
            </li>
            <li>
              <span> Click to 'Trust Genpact India Pvt Ltd'</span>
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <router-link class="mt-4" to="/">
      <p class="footertext">
        You can also access GSocial Go on Mobile here
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Download',
};
</script>

<style lang="scss" scoped>
  /* .left {
    float: left;
  }

  .right {
    float: right;
  }

  .app-icon {
    width: 20%;
    height: 30%;
    margin: 13%;
  }

  .inline-block {
    display: inline-block;
  }

  .img-head {
    align-items: center;
    align-self: center;
    width: 40%;
    margin-left: 25%;
    margin-right: 25%;
    padding: 5%;
  }

  .screenshot-image {
    width: 200px;
  }

  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .image-r {
    width: 80%;
    margin: 5%;
  }

  .pwa-img {
    align-items: center;
    align-self: center;
    width: 30%;
    margin-left: 25%;
    padding-left: 10%;
    padding-right: 10%;
  }

  #over {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  img.centered.tophead1.fluid.ui {
    width: 100%;
  }

  div#banner {
    width: 85%;
    background-color: #fff;
    box-shadow: 1px 1px 8px #888888;
    margin-top: -45px !important;
    position: relative;
    margin: 0 auto;
    height: 165px;
    margin-bottom: 30px;
    border-top: 6px solid #009fbf;
    display: flex;
    justify-content: center;
  }

  img {
    border-style: none;
    width: 100%;
  }

  div#banner img {
    padding: 20px;
  }

  ul.stepsui h3 {
    color: #042852;
  }

  p.footertext {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    color: #042852;
    font-weight: 700;
    border-bottom: 10px solid #042852;
  }

  ul.stepsui h3 {
    color: #042852;
  }

  ul li {
    margin: 7px 0;
  }

  p.footertext {
    width: 90%;
    text-align: center;
    margin: 20px auto 0;
    padding-bottom: 5px;
    font-size: 20px;
    color: #042852;
    border-bottom: 10px solid #042852;
  }
</style>
