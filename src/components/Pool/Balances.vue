<template>
  <div class="balances-block">
    <h2>Your Balances</h2>

    <BalanceItem v-for="(item, idx) in balanceItems" :key="idx" :item="item" />
  </div>
</template>

<script>
const BalanceItem = () => import("@/components/Pool/BalanceItem");

export default {
  props: {
    balances: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filtredBalances: [],
    };
  },
  components: {
    BalanceItem,
  },
  computed: {
    balanceItems() {
      return this.balances;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/mixins/screen-size";

.balances-block {
  //padding: 16px 24px;
  background: $clrBg2;
  border-radius: 4px;

  h2 {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    padding: 16px 24px;
    border-bottom: 1px solid #1c1c1c;
    @include respond-to(sm) {
      padding: 16px;
    }
  }
}

@media screen and(max-width: 780px) {
  .balances-block {
    padding: 0;
  }
}
</style>
