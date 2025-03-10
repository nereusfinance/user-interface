<template>
  <div class="expected-interest-block">
    <div class="expected-interest-title">
      <div>Expected interest</div>
      <img
        v-tooltip="
          'The estimated daily/weekly/monthly/yearly value of the NXUSD interest you earn based on your current total NXUSD deposit and the amount of WXT locked'
        "
        alt=""
        class="fist-info-icon"
        src="@/assets/images/icon-info.svg"
      />
    </div>
    <div class="container-interest">
      <div class="wrapper">
        <div>
          <div v-for="time in period" :key="time" class="column-interest">
            {{ time }}
          </div>
        </div>
        <div class="total-title">
          <div>Total earned</div>
          <img
            v-tooltip="
              'The total value of the NXUSD interest you have earned with your current NXUSD deposit'
            "
            alt=""
            class="info-icon"
            src="@/assets/images/icon-info.svg"
          />
        </div>
      </div>
      <div class="wrapper">
        <div>
          <p>Tier 1</p>
          <div
            v-for="(reward, i) in rewardsForPeriod"
            :key="i"
            class="column-tier"
          >
            {{ formatBNValues(reward.rewardsTier1) }}
          </div>
        </div>
        <div class="tier-amount">
          <span v-tooltip="earnedRewards.rewardsTier1">{{
            formatBNValues(earnedRewards.rewardsTier1)
          }}</span>
          <span class="value-text mobile"> NXUSD </span>
        </div>
      </div>
      <div class="wrapper">
        <div>
          <p>Tier 2</p>
          <div
            v-for="(reward, i) in rewardsForPeriod"
            :key="i"
            class="column-tier"
          >
            {{ formatBNValues(reward.rewardsTier2) }}
          </div>
        </div>
        <div class="tier-amount">
          <span v-tooltip="earnedRewards.rewardsTier2">{{
            formatBNValues(earnedRewards.rewardsTier2)
          }}</span>
          <span class="value-text mobile"> NXUSD </span>
        </div>
      </div>
      <div class="wrapper">
        <div>
          <p class="total-text">Total</p>
          <div
            v-for="(reward, i) in rewardsForPeriod"
            :key="i"
            class="column-tier total"
          >
            <span>
              {{ formatBNValues(reward.rewardsTotal) }}
              <span class="value-text"> NXUSD </span>
            </span>
          </div>
        </div>
        <div class="tier-amount total">
          <span v-tooltip="earnedRewards.total"
            >{{ formatBNValues(earnedRewards.total) }}
            <span class="value-text"> NXUSD </span>
          </span>
          <span class="value-text mobile"> NXUSD </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpectedInterest",
  data() {
    return {
      period: ["Daily", "Weekly", "Monthly", "Yearly"],
    };
  },
  computed: {
    rewardsForPeriod() {
      const tableRewards = this.$store.getters.getTableRewards;
      const tableRewardsFormated = tableRewards.map((reward) => {
        return {
          rewardsTier1: this.normalizeBNValues(reward.rewardsTier1),
          rewardsTier2: this.normalizeBNValues(reward.rewardsTier2),
          rewardsTotal: this.normalizeBNValues(reward.rewardsTotal),
        };
      });
      return tableRewardsFormated;
    },
    earnedRewards() {
      const earnedRewards = {};
      earnedRewards.rewardsTier1 = this.normalizeBNValues(
        this.$store.getters.getUserCurrentRewards.historyRewards.rewardsTier1.add(
          this.$store.getters.getHistoryUserRewards.rewardsTier1
        )
      );
      earnedRewards.rewardsTier2 = this.normalizeBNValues(
        this.$store.getters.getUserCurrentRewards.historyRewards.rewardsTier2.add(
          this.$store.getters.getHistoryUserRewards.rewardsTier2
        )
      );
      earnedRewards.total = this.normalizeBNValues(
        this.$store.getters.getUserCurrentRewards.historyRewards.rewardsTier1
          .add(
            this.$store.getters.getUserCurrentRewards.historyRewards
              .rewardsTier2
          )
          .add(this.$store.getters.getHistoryUserRewards.rewardsTier1)
          .add(this.$store.getters.getHistoryUserRewards.rewardsTier2)
      );
      console.log("currentRewards", earnedRewards);
      return earnedRewards;
    },
  },
  methods: {
    normalizeBNValues(value) {
      return this.$ethers.utils.formatEther(value);
    },
    formatBNValues(value) {
      return new Intl.NumberFormat("en-EN").format(
        parseFloat(value).toFixed(2)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/mixins/screen-size";

.expected-interest-block {
  width: 100%;
  padding: 32px 24px 24px 24px;

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 400;
    font-size: 20px;
    text-align: left;
  }

  .expected-interest-title {
    display: flex;
    flex-direction: row;
    color: white;
    text-align: left;
    font-size: 20px;
    line-height: 28px;
    gap: 6px;
    margin-bottom: 16px;
  }

  .fist-info-icon {
    width: 13px;
  }

  p {
    text-align: right;
    align-items: center;

    color: #8a8a8a;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    margin-bottom: 8px;
  }

  .total-text {
    padding-right: 62px;
  }

  .container-interest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .total-title {
      flex-direction: row;
    }

    .total-title img {
      margin-left: 5px;
    }
  }

  .value-text.mobile {
    display: none;
  }

  .wrapper {
    flex-grow: 1;
  }
  .wrapper:first-child {
    flex-grow: 0;
  }

  .column-interest,
  .total-title {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #8a8a8a;

    text-align: left;
    margin-bottom: 8px;
  }

  .column-interest:first-child {
    margin-top: 28px;
  }

  .column-tier:last-child,
  .column-interest:last-child {
    border-bottom: 1px solid #363637;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }

  .column-tier,
  .tier-amount {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    line-height: 20px;

    text-align: right;
    margin-bottom: 8px;
  }

  .value-text {
    margin-left: 8px;
    color: #8a8a8a;
  }

  .info-icon {
    width: 13px;
  }
}

@media screen and(min-width: 768px) and(max-width: 1000px) {
  .expected-interest-block {
    width: 100%;
    height: 280px;
    padding: 32px 16px 16px 16px;
    .info-icon {
      width: 13px;
    }

    .total-title {
      width: 116px;
    }

    .fist-info-icon {
      margin-left: 2px;
      width: 13px;
    }
  }
}

@media screen and(max-width: 767px) {
  .expected-interest-block {
    margin-top: 24px;

    padding: 0;

    .fist-info-icon {
      width: 20px;
    }
    .total-title {
      width: 56px;
    }
    .total-text {
      padding-right: 0;
      text-align: right;
    }

    .value-text {
      margin-left: 8px;
      display: none;
    }

    .expected-interest-title {
      font-size: 20px;
      margin-bottom: 12px;
      gap: 6px;
    }

    .value-text.mobile {
      display: block;
    }

    img {
      width: 20px;
    }

    .info-icon {
      margin-top: 15px;
      width: 20px;
    }
  }
}
</style>
