<template>
  <div v-if="isConnected" class="stake">
    <div class="stake-view">
      <h1 class="stake-text" v-if="!actionStatus">Earn</h1>
      <div class="stake-wrapper">
        <div class="stake-item stake-item-one" v-if="!actionStatus">
          <TotalDeposit :actionType="actionType" :onClick="setActionType" />
          <LockedToken class="compScreenVersion" />
        </div>
        <div class="stake-item stake-item-two">
          <DepositWithdraw
            v-if="actionType"
            :actionType="actionType"
            :onClick="setActionType"
          />
          <InfoBlock v-if="!actionType" />
          <LockedToken class="mobileVersion" v-if="!actionType" />
          <ExpectedInterest
            v-if="!actionType"
            :rewardsForPeriod="rewardsForPeriod"
            :totalEarnedRewards="totalEarnedRewards"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="stand-action-view">
    <ActionComponent
      :disabled-status="disabledStatus"
      :name="btnName"
      :onClick="walletBtnHandler"
      :text="text"
    />
  </div>
</template>

<script>
import TotalDeposit from "@/components/Stake/TotalDeposit";
import LockedToken from "@/components/Stake/LockedToken";
import InfoBlock from "@/components/Stake/InfoBlock";
import ExpectedInterest from "@/components/Stake/ExpectedInterest";
import DepositWithdraw from "@/components/Stake/DepositWithdraw";
const ActionComponent = () =>
  import("@/components/UiComponents/ActionComponent");
import stake from "@/mixins/stake.js";
export default {
  mixins: [stake],
  name: "Stake",
  data() {
    return {
      text: "Please connect your wallet",
      btnName: "Connect",
      disabledStatus: false,
      actionStatus: false,
      actionType: "",
      tier1Array: [""],
      tier2Array: [""],
      rewardsForPeriod: [],
      totalEarnedRewards: "",
      yearlyEarn: "",
      windowWidth: 0,
    };
  },
  components: {
    DepositWithdraw,
    ExpectedInterest,
    InfoBlock,
    LockedToken,
    TotalDeposit,
    ActionComponent,
  },
  async created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    await this.getAllParameters();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    async walletBtnHandler() {
      if (this.isConnected) {
        return false;
      }
      this.$store.commit("setPopupState", {
        type: "connectWallet",
        isShow: true,
      });
    },
    setActionType(selectedType) {
      if (!selectedType) {
        this.actionStatus = false;
      } else {
        this.actionStatus = this.windowWidth < 768 && true;
      }
      this.actionType = selectedType;
    },
  },
  computed: {
    isConnected() {
      return this.$store.getters.getWalletIsConnected;
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/mixins/screen-size";

.stand-action-view {
  position: relative;
  flex: 1;
  background: #1c1c1c;
  @include respond-to(sm) {
    display: flex;
    justify-content: center;
  }
}

.action-view {
  position: relative;
  flex: 1;
  background: #1c1c1c;
}
.stake {
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}
.stake-view {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;

  h1 {
    font-size: 32px;
    line-height: 36px;
    text-align: left;
  }

  .stake-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
  }

  .stake-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .stake-item-two {
    margin-left: 20px;
    width: 59.2%;
  }
  .stake-item-one {
    width: 38.8%;
  }
}

@media screen and(min-width: 768px) {
  .mobileVersion {
    display: none;
  }
}
@media screen and(min-width: 768px) and(max-width: 1000px) {
  .stake-view .stake-wrapper {
    padding: 20px 28px;
  }
  .stake-text {
    margin-left: 28px;
  }
  .stake-view .stake-item-two {
    margin-left: 8px;
  }
}
@media screen and(max-width: 767px) {
  .stake {
    padding-top: 24px;
    padding-bottom: 37px;
  }
  .stake-view {
    max-width: 450px;
    .compScreenVersion {
      display: none;
    }

    .stake-wrapper {
      flex-wrap: wrap;
      padding: 16px;
    }

    .stake-item-one,
    .stake-item-two {
      width: 100%;
      margin-left: 0;
    }
    .stake-text {
      margin-left: 16px;
      margin-bottom: 0;
    }
  }
}
</style>
