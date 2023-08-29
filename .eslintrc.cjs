module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        // 不知道为什么 可能是初始化的原因 初始化并没有这个
        // 自己添加手动的
        'eslint:recommended',
        // 这个到底是那里的? 暂时不清楚啊
        // "standard-with-typescript",
        'plugin:vue/vue3-essential'
        // 1. 接入 prettier 的规则
        // 'prettier',
        // 'plugin:prettier/recommended'
    ],
    overrides: [{
        env: {
            node: true
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
            sourceType: 'script'
        }
    }],
    parserOptions: {
        parser: '@typescript-eslint/parser', // ts不报错
        ecmaVersion: 'latest',
        sourceType: 'module'
        // "project": "./tsconfig.json"
    },
    plugins: [
        'vue',
        // 这个也是自己添加的
        '@typescript-eslint'
        // 2. 接入 prettier的插件
        // 'prettier'
    ],
    rules: {
        // 3. 注意要加上这一句，开启 prettier 自动修复的功能
        // 'prettier/prettier': 'error',
        // quotes: ['error', 'single'],
        // semi: ['error', 'always']
    }
}