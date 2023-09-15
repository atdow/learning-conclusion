/*
 * @Author: atdow
 * @Date: 2023-04-17 00:06:17
 * @LastEditors: null
 * @LastEditTime: 2023-09-15 22:02:41
 * @Description: file description
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
