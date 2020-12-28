<template>
  <my-table :data="tableData" :col-configs="colConfigs"> </my-table>
</template>
<script>
import MyTable from "./components/my-table";
import { colConfigs } from "./config.js";
export default {
  name: "App",
  components: {
    MyTable
  },
  data() {
    return {
      // colConfigs: [
      //   { prop: "change", label: "变化", component: this.PrefixPlusText },
      //   { prop: "name", label: "趋势", component: this.PrefixPlusText }
      // ],
      colConfigs,
      // PrefixPlusText,
      tableData: [
        {
          change: "12%",
          trend: "10%"
        },
        {
          change: "-12%",
          trend: "-10%"
        }
      ]
    };
  }
};
</script>