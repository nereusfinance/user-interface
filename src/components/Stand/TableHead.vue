<template>
  <div :class="{ deposit: tableType === 2 }" class="stand-table-head">
    <div v-for="(item, idx) in tableCols" :key="idx" class="table-col">
      <p>{{ item }}</p>
    </div>

    <div v-if="colsGetTitles === 1" class="action-col"></div>
  </div>
</template>

<script>
export default {
  props: {
    tableType: {
      default: 1,
    },
  },
  data() {
    return {
      colsGetTitles: ["Pool", "~Yield per $1000", "ROI Annually", "TVL"],
      colsLostTitles: [
        "Components",
        "Total NXUSD borrowed",
        "NXUSD left to borrow",
        "Liquidation fee",
      ],
    };
  },
  computed: {
    tableCols() {
      return this.tableType === 2 ? this.colsLostTitles : this.colsGetTitles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/mixins/screen-size";

.stand-table-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px;
  background-color: $clrBg2;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 1px;
  @include respond-to(sm) {
    padding: 10px 24px;
  }

  .action-col {
    width: 150px;
    padding-left: 30px;
  }

  .table-col {
    width: calc((100% - 150px) / 4);
    text-align: right;
    color: #8a8a8a;

    p {
      font-size: 12px;
      line-height: 16px;
      //max-width: 120px;
    }
  }

  .table-col:first-child {
    text-align: left;
    padding-right: 0;
  }
}

@media screen and(max-width: 780px) {
  .stand-table-head .action-col {
    display: none;
  }

  .stand-table-head .table-col {
    width: 25%;
  }
}

@media screen and(max-width: 640px) {
  .stand-table-head {
    padding-left: 10px;
    padding-right: 10px;

    .table-col {
      width: 20%;

      p {
        font-size: 10px;
      }
    }
  }
}
</style>
