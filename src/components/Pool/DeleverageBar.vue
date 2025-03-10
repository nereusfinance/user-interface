<template>
  <div class="deleverage-bar">
    <p class="bar-title">
      {{ `Choose the amount of ${this.mainTokenName} you want to repay` }}
    </p>
    <div class="slider-wrapper">
      <Slider
        :cyData="'deleverage-slider'"
        :disabled="repaySliderMaxZero"
        :value="repaySliderValue"
        @changeValue="onRepaySliderChange"
      />
    </div>
    <p class="bar-conclusion">
      {{ `Liquidation Price ~ ${liquidationPriceFormatted}` }}
    </p>

    <p class="bar-title">Choose the amount of collateral you want to remove</p>
    <div class="slider-wrapper">
      <!-- Non-disabled slider with actual min value necessary for deleverage -->
      <!-- <Slider
        :value="removeCollateralSliderValue"
        @changeValue="onRemoveCollateralSliderChange"
        :disabled="removeCollateralSliderMaxZero"
        :min="removeCollateralSliderMinValue"
      /> -->
      <Slider
        :disabled="true"
        :min="0"
        :value="0"
        @changeValue="onRemoveCollateralSliderChange"
      />
    </div>
    <p class="bar-conclusion">
      <!-- Non-disabled slider with actual min value necessary for deleverage -->
      <!-- {{ `${this.collateralToRemoveFormatted} ${this.pairTokenName}` }} -->
      {{ `0 ${this.pairTokenName}` }}
    </p>

    <div class="amount-to-repay">
      <p>{{ `Amount of ${this.mainTokenName} to repay` }}</p>
      <p class="amount-to-repay-value">{{ this.amountToRepayFormatted }}</p>
    </div>
  </div>
</template>

<script>
const Slider = () => import("@/components/UiComponents/Slider");

export default {
  props: {
    amountToRepay: {
      type: String,
      required: true,
    },
    maxAmountToRepay: {
      type: String,
      required: true,
    },
    collateralToRemove: {
      type: String,
      required: true,
    },
    maxCollateralToRemove: {
      type: String,
      required: true,
    },
    minCollateralToRemove: {
      type: String,
      required: true,
    },
    liquidationPrice: {
      required: true,
    },
    mainTokenName: {
      type: String,
      required: true,
      default: "AVAX",
    },
    pairTokenName: {
      type: String,
      required: true,
      default: "AVAX",
    },
  },
  data() {
    return {
      maxMultiplier: 10,
    };
  },
  computed: {
    liquidationPriceFormatted() {
      return isNaN(this.liquidationPrice)
        ? "xx.xxx"
        : this.liquidationPrice.toFixed(4);
    },
    amountToRepayFormatted() {
      const parsed = parseFloat(this.amountToRepay);
      return parsed === 0 || this.amountToRepay === ""
        ? "0"
        : parsed.toFixed(4);
    },
    collateralToRemoveFormatted() {
      const parsed = parseFloat(this.collateralToRemove);
      return parsed === 0 || this.collateralToRemove === ""
        ? "0"
        : parsed.toFixed(4);
    },
    repaySliderMaxZero() {
      return (
        isNaN(this.amountToRepay) ||
        isNaN(this.maxAmountToRepay) ||
        parseFloat(this.maxAmountToRepay) === 0
      );
    },
    repaySliderValue() {
      if (this.repaySliderMaxZero) return "0";
      // empty string case
      const amountToRepayFixed = parseFloat(this.amountToRepay) || 0;
      return (
        (amountToRepayFixed * 100) /
        parseFloat(this.maxAmountToRepay)
      ).toString();
    },
    removeCollateralSliderMaxZero() {
      return (
        isNaN(this.collateralToRemove) ||
        isNaN(this.maxCollateralToRemove) ||
        parseFloat(this.maxCollateralToRemove) === 0
      );
    },
    removeCollateralSliderValue() {
      if (this.removeCollateralSliderMaxZero) return "0";
      // empty string case
      const collateralToRemoveFixed = parseFloat(this.collateralToRemove) || 0;
      return (
        (collateralToRemoveFixed * 100) /
        parseFloat(this.maxCollateralToRemove)
      ).toString();
    },
    removeCollateralSliderMinValue() {
      if (this.removeCollateralSliderMaxZero) {
        return "0";
      }
      return (
        (parseFloat(this.minCollateralToRemove) * 100) /
        parseFloat(this.maxCollateralToRemove)
      ).toString();
    },
  },
  methods: {
    onRepaySliderChange(newVal) {
      this.$emit(
        "updateAmountToRepay",
        ((parseFloat(newVal) * this.maxAmountToRepay) / 100).toString()
      );
    },
    onRemoveCollateralSliderChange(newVal) {
      this.$emit(
        "updateCollateralToRemove",
        ((parseFloat(newVal) * this.maxCollateralToRemove) / 100).toString()
      );
    },
  },
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.deleverage-bar {
  margin: 24px 0px 16px;
  font-size: 12px;
  line-height: 16px;

  .bar-title {
    text-align: left;
  }

  .bar-conclusion {
    margin-bottom: 24px;
    text-align: left;
  }

  .amount-to-repay {
    line-height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    .amount-to-repay-value {
      font-weight: 600;
    }
  }

  .slider-wrapper {
    margin: 8px 0px 4px;
  }
}

@media screen and(max-width: 640px) {
  .deleverage-bar {
    .slider-wrapper {
      margin: 4px 0px 4px;
    }

    .bar-conclusion {
      margin-bottom: 22px;
    }
  }
}
</style>
