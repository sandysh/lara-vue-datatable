import DataTable from "./DataTable.vue";
import Pagination from "./Pagination.vue";
import TableLength from "./TableLength.vue";
import Search from "./Search.vue";

export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("lara-vue-datatable", DataTable);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}


export default {
 DataTable,
}

export {
	DataTable,
	Pagination,
	TableLength,
	Search
}
	