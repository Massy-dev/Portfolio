/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://portfolio-five-beta-36.vercel.app/",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/dashboard"],
};
