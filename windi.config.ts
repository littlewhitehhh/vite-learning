import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  // 开启attributify
  // 首先我们来看看attributify，翻译过来就是属性化，也就是说我们可以用 props 的方式去定义样式属性

  attributify: true,
  shortcuts: {
    "flex-c": "flex justify-center items-center",
  },
});
