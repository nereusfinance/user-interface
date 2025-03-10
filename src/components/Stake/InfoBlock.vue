<template>
  <div class="info-block">
    <div class="columns">
      <div class="column">
        <div class="title">
          <div>Tier 1 amount</div>
          <img
            v-tooltip="
              'Part of your total NXUSD deposit with increased APY accruals'
            "
            alt=""
            class="info-icon"
            src="@/assets/images/icon-info.svg"
          />
        </div>
        <h2>
          <span v-tooltip="tierOne" style="cursor: pointer; color: white">
            {{ tierOne | formatNumber }}
          </span>
          NXUSD
        </h2>
        <p class="apy">{{ apyTierOne }}%<span>APY</span></p>
      </div>

      <div class="column">
        <div class="title">
          <div>Tier 2 amount</div>
          <img
            v-tooltip="
              'Part of your total NXUSD deposit above the Tier 1 amount - with standard APY accruals'
            "
            alt=""
            class="info-icon"
            src="@/assets/images/icon-info.svg"
          />
        </div>
        <h2>
          <span v-tooltip="tierTwo" style="cursor: pointer; color: white">
            {{ tierTwo | formatNumber }}
          </span>
          NXUSD
        </h2>
        <p class="apy">{{ apyTierTwo }}%<span>APY</span></p>
      </div>
    </div>
    <div class="column last-column">
      <div class="title">
        <div>Yearly earn</div>
        <img
          v-tooltip="
            'The estimated yearly value of the NXUSD interest you earn based on your current total NXUSD deposit and the amount of WXT locked'
          "
          alt=""
          class="info-icon"
          src="@/assets/images/icon-info.svg"
        />
      </div>
      <h1 v-tooltip="yearlyEarn" style="cursor: pointer">
        {{ yearlyEarn | formatNumber }}<span>NXUSD</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBlock",
  filters: {
    formatNumber(value) {
      if (!value) return value;
      if (Number(value) === 0) return value;

      const lookup = [
        { value: 0, symbol: "" },
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      let item = lookup
        .slice()
        .reverse()
        .find(function (item) {
          return parseFloat(value) >= item.value;
        });
      return (
        (parseFloat(value) / (item.value || 1)).toFixed(2).replace(rx, "$1") +
        item.symbol
      );
    },
  },
  computed: {
    yearlyEarn() {
      const yearlyRewards = this.$store.getters.getTableRewards;
      return this.normalizeBNValues(
        yearlyRewards[yearlyRewards.length - 1].rewardsTotal
      );
    },
    apyTierOne() {
      let APYTier1 = this.$store.getters.getUserData[0][2];
      if (APYTier1 && Number(APYTier1)) {
        return parseFloat(this.normalizeBNValuesToUnits(APYTier1)).toFixed();
      } else {
        const configData = this.$store.getters.getAPYDataConfig;
        const defaultAPYTier1 = configData[1].APYTier1;
        return parseFloat(this.normalizeBNValuesToUnits(defaultAPYTier1)).toFixed();
      }
    },
    apyTierTwo() {
      let apy = this.$store.getters.getConfig.APYTier2;
      if (apy) {
        return parseFloat(this.normalizeBNValuesToUnits(apy)).toFixed();
      } else {
        return 0;
      }
    },
    tierOne() {
      const userData = this.$store.getters.getUserData;
      const currentRewards = this.normalizeBNValues(
        this.$store.getters.getUserCurrentRewards.rewards
      );
      const NXUSDByTier1 = this.normalizeBNValues(userData[0][1]);
      if (parseFloat(currentRewards) > parseFloat(NXUSDByTier1)) {
        return NXUSDByTier1;
      } else {
        return currentRewards;
      }
    },
    tierTwo() {
      const userData = this.$store.getters.getUserData;
      const currentRewards = this.normalizeBNValues(
        this.$store.getters.getUserCurrentRewards.rewards
      );
      const NXUSDByTier1 = this.normalizeBNValues(userData[0][1]);
      if (parseFloat(currentRewards) > parseFloat(NXUSDByTier1)) {
        return this.normalizeBNValues(
          this.$store.getters.getUserCurrentRewards.rewards.sub(userData[0][1])
        );
      } else {
        return "0.0";
      }
    },
  },
  methods: {
    normalizeBNValues(value) {
      return this.$ethers.utils.formatEther(value);
    },
    normalizeBNValuesToUnits(value) {
      return this.$ethers.utils.formatUnits(value, "16");
    },
    formatBNValues(value) {
      return (value / 1000).toFixed(2) + "K";
    },
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  width: 100%;

  background: #262626;
  border-radius: 4px;

  margin-bottom: 8px;
  padding: 32px 24px 24px 24px;

  display: flex;
  flex-direction: column;

  .columns {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
  }

  .column {
    margin-right: 70px;
    margin-bottom: 31px;
    font-weight: 400;
    font-size: 14px;
    color: #8a8a8a;

    text-align: left;

    h2 {
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      color: #8a8a8a;
    }
  }

  .last-column {
    margin-bottom: 0;
  }

  .title {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  p.apy {
    font-weight: 600;
    font-size: 60px;
    line-height: 48px;
    color: #55bcc0;

    span {
      font-weight: 600;
      font-size: 24px;
      color: #55bcc0;
    }
  }

  h1 {
    text-align: left;
    font-weight: 600;
    font-size: 80px;
    line-height: 80px;
    color: #55bcc0;
    gap: 2px;

    span {
      font-size: 24px;
      color: #55bcc0;
    }
  }

  .info-icon {
    width: 13px;
  }
}

@media screen and(min-width: 768px) and(max-width: 1000px) {
  .info-block {
    width: 100%;
    height: 280px;
    padding: 24px 16px 16px 16px;
    margin-bottom: 0;

    .columns {
      height: 136px;
    }

    .column {
      margin-right: 36px;
    }

    h1 {
      font-size: 80px;
    }
  }
}

@media screen and(max-width: 767px) {
  .info-block {
    height: 230px;
    border-radius: 4px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 24px 16px 16px 16px;
    margin-top: 0;

    .columns {
      height: 110px;
    }

    .column {
      display: flex;
      flex-direction: column;
      margin-right: 24px;
      margin-bottom: 16px;

      h1 {
        font-weight: 600;
        font-size: 64px;
        line-height: 68px;
        margin: 0;

        span {
          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    .column.last-column {
      margin-right: auto;
      margin-left: 0;
    }

    h2 {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 0;
    }

    p.apy {
      font-weight: 600;
      font-size: 48px;

      span {
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
</style>
