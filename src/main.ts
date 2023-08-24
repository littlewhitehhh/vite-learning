import { createApp } from "vue";
import "./style.css";

// 在这里引入 为什么vue文件中不能使用呢？
// import "./variable.scss";

// windi引入  样式表
import "virtual:windi.css";

import App from "./App.vue";

createApp(App).mount("#app");
