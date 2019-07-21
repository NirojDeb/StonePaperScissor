<template>
  <aside class="sidebar fixed pin-y pin-l z-10">
    <div class="nav-list-cont py-3 footer transparent">
      <div v-for="link in navigation" :key="link.name" :class="{'no-submenu': !link.subNav.length}" class="footer-nav-item-cont menu-list-item">
        <div v-if="!link.subNav.length" :id="link.slug">
          <input id="nav-item-section-state-country-switcher" class="nav-item-section-state" type="checkbox">
          <div class="nav-item-section no-border">
            <label class="nav-item-section-label">
              <router-link :to="link.route" class="nav-item-section-title block">
                <i :class="link.icon" class="icon inline-block mr-2 align-top" />
                {{ link.name }}
              </router-link>
            </label>
          </div>
        </div>

        <div v-else :id="link.slug">
          <input :id="`nav-item-section-${link.slug}-switcher`" :checked="$route.path.includes(link.slug)" class="nav-item-section-state" type="checkbox">
          <div class="nav-item-section no-border">
            <label class="nav-item-section-label" :for="`nav-item-section-${link.slug}-switcher`">
              <h3 class="nav-item-section-title">
                <i :class="link.icon" class="icon inline-block mr-2 align-top" />
                {{ link.name }}
              </h3>
            </label>
            <ul class="nav-item-section-list ul-list-reset">
              <li v-for="subNavLink in link.subNav" :key="subNavLink.name" class="nav-list-item">
                <router-link :to="subNavLink.route" class="nav-item-link">
                  <i :class="subNavLink.icon" class="icon inline-block mr-2 align-top" />
                  {{ subNavLink.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['navigation']),
  },
};
</script>

<style lang="scss" src="@/styles/desktop/components/_sidebar.scss" />
<style lang="scss" src="../../styles/mobile/components/_footer.scss" />
