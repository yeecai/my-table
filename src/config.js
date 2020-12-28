export const PrefixPlusText = {
  props: ["colConfig"],
  template: `
        <el-table-column :label="colConfig.label">
          <span :slot-scope="{ row }">
            {{ parseInt(row[colConfig.prop]) > 0 ? '+' + row[colConfig.prop] : row[colConfig.prop] }}
          </span>
        </el-table-column>
      `,
};

export const colConfigs = [
  { prop: "change", label: "变化", component: PrefixPlusText },
  { prop: "name", label: "趋势", component: PrefixPlusText },
];
