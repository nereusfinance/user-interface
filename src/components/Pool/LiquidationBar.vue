<template>
  <div class="liquidation-bar">
    <div class="main-wrap">
      <div class="info-wrap">
        <div class="image-wrap">
          <img
            v-tooltip="
              'This bar displays how healthy your position is. If you have an open position and the bar becomes empty, you will be flagged for liquidation. The Stablecoins bar is enlarged by 10x to allow better visual representation.'
            "
            alt=""
            class="info-icon"
            src="@/assets/images/i-icon.svg"
          />
        </div>
        <div class="indicator-wrap">
          <div v-if="priceDifferens" class="amount-indicator">
            <p>&lt;{{ parseFloat(priceDifferens).toFixed(6) }}$</p>
          </div>
          <div class="percent-indicator">
            <p>{{ liquidationRisk }}% of 100%</p>
          </div>
        </div>
      </div>

      <div class="range">
        <div
          :class="{
            safe: liquidationRisk > 75,
            medium: liquidationRisk > 5 && liquidationRisk <= 75,
            hight: liquidationRisk > 0 && liquidationRisk <= 5,
          }"
          :style="{ width: `${liquidationRisk}%` }"
          class="range-indicator"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tokenCurrentPrice: {
      required: true,
    },
    ltv: {
      required: true,
    },
    userBorrowPart: {
      required: true,
    },
    userCollateralShare: {
      required: true,
    },
  },
  computed: {
    tokenPrice() {
      const tokenToNUSD = 1 / this.tokenCurrentPrice;
      return tokenToNUSD;
    },
    stableCoinMultiplyer() {
      if (this.ltv === 90) {
        return 10;
      }

      return 1;
    },
    liquidationPrice() {
      const liquidationPrice =
        this.userBorrowPart / ((this.userCollateralShare * this.ltv) / 100);
      return liquidationPrice;
    },
    priceDifferens() {
      const priceDifferens = this.tokenPrice - this.liquidationPrice;

      return priceDifferens;
    },
    liquidationRisk() {
      if (+this.userBorrowPart === 0 || isNaN(this.liquidationPrice)) return 0;

      const riskPersent =
        ((this.priceDifferens * this.stableCoinMultiplyer) / this.tokenPrice) *
        100;

      if (riskPersent > 100) {
        return 100;
      }

      return parseFloat(riskPersent).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/mixins/screen-size";

.liquidation-bar {
  //background: $clrBg2;
  //border-radius: 12px;
  //padding: 7px 10px;
  display: flex;
  align-items: center;

  .image-wrap {
    //width: 24px;
    //height: 26px;
    display: flex;
    align-items: center;
    //position: relative;

    .info-icon {
      width: 13px;
      height: 13px;
      @include respond-to(sm) {
        width: 24px;
        height: 24px;
      }
    }
  }

  .range {
    background: #606060;
    //border: 1px solid #403b83;
    border-radius: 4px;
    display: flex;
    height: 12px;
    @include respond-to(sm) {
      height: 8px;
    }

    .range-indicator {
      height: 100%;
      //width: 39%;
      border-radius: 4px;
      transition: all 0.3s ease;

      &.safe {
        background: #fdd33f;
      }

      &.medium {
        background: #fdd33f;
      }

      &.hight {
        background: #fdd33f;
      }
    }
  }

  .main-wrap {
    flex: 1;
    //padding-left: 9px;
  }

  .amount-indicator {
    display: flex;
    align-items: center;
    margin-right: 18px;

    .coin-img {
      height: 12px;
      width: auto;
      object-fit: contain;
      margin-right: 3px;
    }
  }

  .info-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  .indicator-wrap {
    display: flex;
  }
}
</style>
