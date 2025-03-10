<template>
  <div class="liquid-rules-block">
    <div class="block-head">
      <p class="price-text">
        Liquidation price <span>${{ liquidationPriceFormatted }}</span>
      </p>
      <button :class="{ medium: statusText === 'Medium' }" class="safe-status">
        {{ statusText }}
      </button>
    </div>
    <div class="block-body">
      <div
        v-for="(item, idx) in percentItems"
        :key="idx"
        :class="{ active: item == value, disabled: item > maxValue }"
        class="percent-item"
        @click="setItemActive(item)"
      >
        <p>{{ item }}%</p>
      </div>
      <label
        :class="{
          error: customErr,
          active: customValue == value && value !== '',
        }"
        class="percent-item custom"
        @click="setCustomState(true)"
      >
        <input
          v-if="isCustom"
          v-model.trim="customValue"
          placeholder="Custom"
          type="number"
          @input="setCustomValue($event.target.value)"
        />
        <p v-else>Custom</p>
      </label>
    </div>
  </div>
</template>

<script>
import { between } from "vuelidate/lib/validators";

export default {
  props: {
    reset: {
      type: Boolean,
    },
    liquidationPrice: {
      required: true,
    },
    maxValue: {
      type: Number,
      require: true,
    },
    value: {},
  },
  data() {
    return {
      percentItems: [25, 50, 70, 90],
      activePercent: null,
      isCustom: false,
      customValue: "",
      customErr: false,
    };
  },
  computed: {
    statusText() {
      if (this.value == this.maxValue || this.customValue > this.maxValue) {
        return "Medium";
      } else {
        return "Safe";
      }
    },
    liquidationPriceFormatted() {
      return this.liquidationPrice === "xxx.xx" || !this.liquidationPrice
        ? "xxx.xx"
        : parseFloat(this.liquidationPrice).toFixed(8);
    },
  },
  watch: {
    reset(value) {
      if (value) this.resetData();
    },
  },
  validations: {
    customValue: {
      between: between(0, 100),
    },
  },
  methods: {
    resetData() {
      this.activePercent = null;
      this.isCustom = false;
      this.customValue = "";
    },
    setCustomValue(value) {
      this.customErr = false;
      if (value < 0 || value > this.maxValue) {
        this.customErr = true;
        this.emitValue("");
        return false;
      }

      if (value && value > 0 && value <= this.maxValue) this.emitValue(value);
      if (!value) this.emitValue("");
    },
    setCustomState(bool) {
      if (this.isCustom === bool) return false;
      this.isCustom = bool;
      if (bool) this.emitValue("");
    },
    setItemActive(item) {
      this.customErr = false;
      this.isCustom = false;
      this.customValue = "";
      this.emitValue(item);
    },
    emitValue(value) {
      if (!isNaN(value)) this.$emit("onchange", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/mixins/screen-size";

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.liquid-rules-block {
  .block-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .price-text {
    font-size: 14px;
    line-height: 20px;

    span {
      padding-left: 10px;
      font-weight: 700;
    }
  }

  .block-body {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
  }

  .percent-item {
    font-size: 14px;
    line-height: 20px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 100px;
    padding: 6px 14px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: border 0.3s ease;
    margin-right: 8px;

    &.custom {
      margin-right: 0;
    }

    input {
      background-color: transparent;
      border: none;
      //height: 100%;
      text-align: center;
      color: #1c1c1c;
      outline: none;
      max-width: 82px;
      //padding-left: 20px;
      //padding-right: 20px;
    }

    &.disabled {
      pointer-events: none;
      color: grey;
    }

    &.active,
    &:hover {
      //border: 1px solid #7b79f7;
      color: #1c1c1c;
      background-color: $clrBg3;
    }

    &.error {
      border: 1px solid $clrInputError;
    }
  }

  .safe-status {
    min-width: 50px;
    height: 24px;
    outline: none;
    border: none;
    background: $clrGreen;
    border-radius: 23px;
    font-size: 12px;
    color: $clrText;
    padding: 0 5px;
    transition: all 0.3s ease;
    @include respond-to(sm) {
      padding: 2px 8px;
      height: 16px;
      font-size: 10px;
    }

    &.medium {
      background: $clrOrange;
    }
  }
}
</style>
