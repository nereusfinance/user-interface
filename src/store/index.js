import Vue from "vue";
import Vuex from "vuex";

import popups from "@/store/modules/popups";
import connectionProvider from "@/store/modules/connectProvider";
import networks from "@/store/modules/networks";
import pools from "@/store/modules/pools";
import tokens from "@/store/modules/tokens";
import swap from "@/store/modules/swap";
import notification from "@/store/modules/notification";
import avaxStatus from "@/store/modules/avaxStatus";
import balances from "@/store/modules/balances";
import nxusdStaking from "@/store/modules/nxusdStaking";
import multicall from "@/store/modules/multicall";
import stand from "@/store/modules/stand";
import dashboard from "@/store/modules/dashboard";
import pool from "@/store/modules/pool";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // showBanner: localStorage.getItem("showBanner") || "show",
  },
  mutations: {
    // closeBanner(state) {
    //   localStorage.setItem("showBanner", "hide");
    //   state.showBanner = "hide";
    // },
  },
  actions: {},
  getters: {
    // getShowBanner: (state) => state.showBanner,
  },
  modules: {
    popups,
    connectionProvider,
    networks,
    pools,
    tokens,
    swap,
    notification,
    avaxStatus,
    balances,
    nxusdStaking,
    multicall,
    stand,
    dashboard,
    pool,
  },
});
