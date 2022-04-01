/*
 * @Author: atdow
 * @Date: 2022-04-01 14:14:27
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 15:07:37
 * @Description: file description
 */
module.exports = {
    root: true,
    env: {},
    'extends': [],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'warn',
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module"
    }
}
