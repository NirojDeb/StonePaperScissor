<template>
  <section class="dashboard-volunteering-page flex bg-white flex-col h-min-screen py-2">
    <!-- <h1 class="leading-loose letter-spacing-05 mx-5 mb-2 text-2xl text-black text-bold">
      My Volunteering
    </h1> -->
    <iframe ref="volunteering-iframe" class="flex-1" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AES from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';

export default {
  name: 'Volunteering',
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
    const key = Base64.parse('Wc/ad0x+FBCcqA0Wb1qdzA==');
    const iv = Base64.parse('tDMXM7rPlEnjrzN9/FHF7g==');
    const p3app = AES.encrypt(this.user.ohrId, key, { iv });
    const p3app4 = encodeURIComponent(p3app);
    this.$refs['volunteering-iframe'].src = `https://widgets.goodera.com/my-volunteering/index.html?organization=genpact&id=${p3app4}`;
  },
};
</script>
