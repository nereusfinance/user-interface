<template>
  <div class="stand-view">
    <img alt="" class="bg-1" src="@/assets/images/stand/bg-top-left.svg" />
    <img alt="" class="bg-2" src="@/assets/images/stand/bg-btm-right.svg" />
    <img alt="" class="bg-3" src="@/assets/images/stand/bg-btm-left.svg" />

    <div class="container mini">
      <div v-if="pools" class="stand-group">
        <h1>Deposited</h1>

        <DepositedPoolStand v-for="pool in pools" :key="pool.id" :pool="pool" />
      </div>

      <div class="stand-group">
        <h1>PERFORM A RITUAL SPELL</h1>
        <StandTable :items="pools" />
      </div>
    </div>
  </div>
</template>

<script>
const StandTable = () => import("@/components/Stand/Table");
const DepositedPoolStand = () =>
  import("@/components/Stand/DepositedPoolStand");

export default {
  components: {
    StandTable,
    DepositedPoolStand,
  },
  computed: {
    pools() {
      return this.$store.getters.getFarmPools;
    },
  },
  created() {
    const isConnected = this.$store.getters.getWalletIsConnected;

    if (!isConnected) {
      this.$router.push({ name: "Stand" });
      return false;
    }
  },
};
</script>

<style lang="scss" scoped>
.stand-view {
  padding-top: 30px;
  padding-bottom: 300px;
  position: relative;
  flex: 1;

  .bg-1 {
    position: absolute;
    top: -$headerHeight;
    left: 0;
    width: 25%;
    max-width: 360px;
    min-width: 160px;
  }

  .bg-2 {
    position: absolute;
    bottom: -$footerHeight;
    right: 0;
    width: 25%;
    max-width: 360px;
    min-width: 160px;
  }

  .bg-3 {
    position: absolute;
    bottom: -$footerHeight;
    left: 0;

    width: 33%;
    max-width: 485px;
    min-width: 160px;
  }

  .stand-group {
    padding-top: 100px;
    position: relative;
    z-index: 2;

    h1 {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 60px;

      span {
        text-transform: lowercase;
      }
    }
  }
}

@media screen and(max-width: 980px) {
  .stand-view .bg-1,
  .stand-view .bg-2,
  .stand-view .bg-3 {
    display: none;
  }

  .stand-view .stand-group:first-child {
    padding-top: 30px;
  }
}

@media screen and(max-width: 780px) {
}

@media screen and(max-width: 640px) {
  .stand-view .stand-group h1 {
    margin-bottom: 30px;
  }

  .stand-view {
    padding-bottom: 100px;
  }
}
</style>
