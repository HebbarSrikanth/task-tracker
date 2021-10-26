module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target:
          "https://my-json-server.typicode.com/hebbarsrikanth/task-tracker",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/task-tracker/" : "/",
};
