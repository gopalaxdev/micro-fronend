/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/home*',
        destination: `/home*`,
      },
      {
        source: '/list',
        destination: `http://localhost:3001/list`,
      },
     ]
  },
}
