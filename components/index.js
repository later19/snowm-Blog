function changeStr(str) {
  // 首字母大写
  return str.charAt(0).toUpperCase() + str.slice(1);
}
  // 找到上一级common目录下的.vue结尾的所有文件
const requireComponent = require.context('@/components', false, /\.vue$/);
const install = (Vue) => {
  requireComponent.keys().forEach((fileName) => {
    const config = requireComponent(fileName);
    const componentName = changeStr(
      fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    );
    Vue.component(componentName, config.default || config);
  });
};
export default {
  install
};
