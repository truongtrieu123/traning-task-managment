module.exports = {
  swcMinify: true,
  esmExternals: false
};
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
}