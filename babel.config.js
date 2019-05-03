module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
    "@babel/preset-env", {
      // "include": ["es6.set"],
      // "useBuiltIns": "usage",
      "targets": "> 0.25%, not dead",
      "modules": false
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ]
  const plugins = [];

  return {
    presets,
    plugins
  };
}