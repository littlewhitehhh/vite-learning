import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { log } from "console";

//全局scss文件的路径
// 用normalizePath解决window下路径问题
const variableScssPath = normalizePath(path.resolve(__dirname, "./src/variable.scss"));

console.log("variableScssPath", variableScssPath);
console.log("path", path.resolve(__dirname, "./src/variable.scss"));

// postcss 用例
import autoprefixer from "autoprefixer";

// windicss 接入
import windi from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  // 手动指定项目根目录位置
  // 1.为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
  // 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
  // root: path.resolve(__dirname, "src"),

  // css类相关配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import"${variableScssPath}";`,
      },
    },
    modules: {
      // 一般可以通过generateScopeName属性对生成的类名进行自定义
      generateScopedName: "[name]_[local]_[hash64:8]",
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ["> 1%", "last 2 versions"],
        }),
      ],
    },
  },
  plugins: [vue(), windi()],
});
