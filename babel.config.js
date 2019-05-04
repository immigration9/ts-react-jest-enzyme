module.exports = function (api) {
  const isProduction = api.env("production");

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
  const plugins = [
    ["@babel/plugin-transform-modules-commonjs"]
  ];

  return {
    presets,
    plugins : isProduction ? [] : plugins
  };
}