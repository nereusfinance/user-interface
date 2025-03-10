<template>
  <div class="btn-text" v-if="isConnected">
    <button
      :class="{ load: connectLoader, connected: isConnected }"
      class="btn mini connected-btn"
      @click="disconnect"
      @mouseenter="itsHover = true"
      @mouseleave="itsHover = false"
    >
      <ButtonLoader v-if="connectLoader" />
      <template v-else-if="itsHover || isIncorrectCorrectNetwork"
        >Disconnect</template
      >
      <template v-else>
        <div class="text-connect-block">
          {{ walletBtnText }}
          <p class="slicedAddress" data-cy="account-address">
            {{ slicedAccountAddress }}
          </p>
        </div>
      </template>
    </button>
  </div>

  <div v-else>
    <button
      :class="{ load: connectLoader, connected: isConnected }"
      class="btn mini connect-btn"
      @click="walletBtnHandler"
      data-cy="connect-button-head"
    >
      <ButtonLoader v-if="connectLoader" />
      <template v-else> </template>
    </button>
  </div>
</template>

<script>
// import ethIcon from "@/assets/images/networks/ethereum-icon.svg";
// import binanceIcon from "@/assets/images/networks/binance-icon.svg";
// import fantomIcon from "@/assets/images/networks/fantom-icon.svg";
import avaxIcon from "@/assets/images/networks/avalanche-avax-icon.svg";
import WalletConnectProvider from "@walletconnect/client";
import { getDefaultRPCURL } from "@/utils/helpers";

const ButtonLoader = () => import("@/components/UiComponents/ButtonLoader");

export default {
  props: {
    networkType: {
      type: String,
      default: "0xa86a",
    },
  },
  data() {
    return {
      itsHover: false,
      connectLoader: false,

      networks: [
        // {
        //   chainid: "0x1",
        //   title: "ERC-20",
        //   icon: ethIcon,
        // },
        // {
        //   chainid: "0x38",
        //   title: "BSC",
        //   icon: binanceIcon,
        // },
        // {
        //   chainid: "0xfa",
        //   title: "FANTOM",
        //   icon: fantomIcon,
        // },
        {
          chainid: "0xa86a",
          title: "Avax Network",
          icon: avaxIcon,
        },
        {
          chainid: "0xa869",
          title: "Avax Fuji",
          icon: avaxIcon,
        },
        // {
        //   chainid: "0x539",
        //   title: "Avax local",
        //   icon: avaxIcon,
        // },
      ],
    };
  },
  computed: {
    walletBtnText() {
      let networkType = this.$store.getters.getChainId;
      let networkName = this.networks.find(
        (item) => item.chainid == networkType
      );

      return `${networkName.title}`;
    },
    slicedAccountAddress() {
      let account = this.$store.getters.getAccount;
      let startAddr = account.slice(0, 4);
      let endAddr = account.slice(-4);

      return `${startAddr}...${endAddr}`;
    },
    isIncorrectCorrectNetwork() {
      const chainId = this.$store.getters.getChainId;
      let networkObject = this.networks.find((item) => item.chainid == chainId);
      return !networkObject;
    },
    isConnected() {
      return this.$store.getters.getWalletIsConnected;
    },
  },
  methods: {
    async walletBtnHandler() {
      if (this.isConnected) {
        return false;
      }
      this.$store.commit("setPopupState", {
        type: "connectWallet",
        isShow: true,
      });
    },
    async disconnect() {
      const walletType = localStorage.getItem("walletType");
      if (walletType === "walletConnect") {
        const walletConnectProvider = new WalletConnectProvider({
          bridge: "https://bridge.walletconnect.org",
          rpc: {
            43113: "https://api.avax-test.network/ext/bc/C/rpc",
            43114: getDefaultRPCURL(),
          },
        });
        await walletConnectProvider.killSession();
      }
      delete window.localStorage.walletType;
      window.location.reload();
    },
  },
  components: {
    ButtonLoader,
  },
};
</script>
<style lang="scss" scoped>
.slicedAddress {
  height: 16px;
  width: 65px;
  opacity: 0.5;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
}

.connected-btn {
  height: 40px;
  width: 104px;
  border-radius: 100px;
  margin: 24px 0;

  //Typography
  font-family: Work Sans, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  line-height: 16px;
  letter-spacing: 0;
  text-align: center;
  padding: 4px 12px;
  background: rgba(28, 28, 28, 0.16);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.connect-btn:before {
  content: "Connect";
}
.connect-btn {
  background: #e7fc6e;
  border-radius: 21px;

  height: 100%;
  width: 100%;
  padding: 6px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  color: #000000;
}

@media screen and(max-width: 980px) {
  .btn-text {
    margin: 0;
  }
  .connected-btn {
    width: auto;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 0;
  }
  .slicedAddress {
    width: auto;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  .connect-btn {
    height: 48px;
    width: 272px;
    background: #e7fc6e;
    border-radius: 24px;
    font-size: 18px;
  }

  .connect-btn:before {
    content: "Connect wallet";
  }
}
</style>
