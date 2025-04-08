export default function robots () {
	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
			disallow: ["/admin/", "/api/"],
		},
		sitemap: ["https://vihaan-shetty.com/sitemap.xml"],
	};
}
