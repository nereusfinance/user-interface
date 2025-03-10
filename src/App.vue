<template>
  <div id="app">
    <template v-if="!checkInProcess">
      <Header></Header>
      <!-- <Banner v-if="showBanner" /> -->
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
      <Footer class="footer"></Footer>
      <PopupsWrapper v-if="showPopup" />
    </template>

    <ConnectionChecker @checkError="checkError" @checkSuccess="checkSuccess" />

    <NotificationContainer />
  </div>
</template>

<script>
const Header = () => import("@/components/Header");
const Footer = () => import("@/components/Footer");
const PopupsWrapper = () => import("@/components/Popups/PopupWrapper");
const NotificationContainer = () =>
  import("@/components/Notifications/NotificationContainer");
const ConnectionChecker = () =>
  import("@/components/ConnectionChecker/ConnectionChecker");
import initMixin from "@/mixins/init.js";
import farmPoolsMixin from "@/mixins/farmPools.js";
import swapMixin from "@/mixins/swap.js";

export default {
  mixins: [initMixin, farmPoolsMixin, swapMixin],
  data() {
    return {
      checkInProcess: true,
      farmPoolsTimer: null,
    };
  },
  computed: {
    showPopup() {
      return this.$store.getters.getPopupState;
    },
    isConnected() {
      return this.$store.getters.getWalletIsConnected;
    },
  },
  methods: {
    async checkSuccess() {
      await this.initBlockRefresh();
      await this.initContracts();
      //await this.createFarmPools(); // we do not use FarmStand view, so dont need to fetch data for farm pools
      this.checkInProcess = false;
      clearInterval(this.farmPoolsTimer);
    },
    checkError(message) {
      clearInterval(this.farmPoolsTimer);
      this.checkInProcess = false;

      if (message) alert(message);
    },
  },
  beforeDestroy() {
    clearInterval(this.farmPoolsTimer);
  },
  components: {
    Header,
    Footer,
    // Banner,
    PopupsWrapper,
    ConnectionChecker,
    NotificationContainer,
  },
};
</script>

<style lang="scss">
@import url("styles/_fonts.scss");
@import url("styles/_animations.scss");
@import "~normalize.css";
@import "src/mixins/screen-size";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.footer-container {
  @include respond-to(sm) {
    display: none;
  }
}

h1,
h2,
h3 {
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 1.2;
  text-align: center;
  color: $clrText;
  margin: 0;
}

h2 {
  font-size: 20px;
  line-height: 1;
  text-align: left;
}

h3 {
  font-size: 18px;
  line-height: 1;
  text-align: left;
}

.container {
  max-width: $containerWidth;
  padding: 0 $containerSidePadding;
  margin-left: auto;
  margin-right: auto;
  width: 95%;

  &.mini {
    max-width: $containerMiniWidth;
  }
}

.blue {
  color: $clrBlue;
}

.btn {
  width: 200px;
  height: 32px;
  border-radius: 16px;
  background-color: $clrBg3;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  //text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.3s ease;

  &.mini {
    height: 42px;
  }

  &:disabled {
    color: $clrDisableText;
    pointer-events: none;
    background-color: $clrDisable;
    border: 1px solid #414141;
  }

  &.load {
    pointer-events: none;
  }
}

#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $clrText;
  background-color: $clrBg1;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-family: "Work Sans", sans-serif;

  .tooltip-inner {
    background: $clrBg2;
    color: white;
    border-radius: 4px;
    border: 1px solid #606060;
    padding: 8px 12px;
    max-width: 300px;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: $clrBg2;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}

@media screen and(max-width: 767px) {
  $containerSidePadding: 16px;
  .container {
    width: 100%;
    padding: 0 $containerSidePadding;
  }

  footer.app-footer.footer {
    display: none;
  }
}
</style>
