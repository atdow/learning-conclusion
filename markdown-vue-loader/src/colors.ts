/*
 * @Author: atdow
 * @Date: 2022-04-01 18:38:19
 * @LastEditors: null
 * @LastEditTime: 2022-04-01 19:23:05
 * @Description: file description
 */
const colors = require("colors");

colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});

export = colors;
