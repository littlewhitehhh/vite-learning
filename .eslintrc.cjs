module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [

        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        // 1. 接入 prettier 的规则
        "prettier",
    ],
    "overrides": [{
        "env": {
            "node": true
        },
        "files": [
            ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
            "sourceType": "script"
        }
    }],
    "parserOptions": {
        "parser": "@typescript-eslint/parser", // ts不报错
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        // 2. 接入 prettier的插件
        "prettier",
    ],
    "rules": {
        // 3. 注意要加上这一句，开启 prettier 自动修复的功能
        "prettier/prettier": "error",
        quotes: ["error", "single"],
        semi: ["error", "always"],
    }
}