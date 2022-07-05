module.exports = {
  swcMinify: true,
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
};
