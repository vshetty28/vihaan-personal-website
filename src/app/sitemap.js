export default function sitemap() {
	return [
		{
			url: "https://vihaan-shetty.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://acme.com/about-me",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://vihaan-shetty.com/experience",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://vihaan-shetty.com/skills",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://vihaan-shetty.com/projects",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: "https://vihaan-shetty.com/resume.pdf",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
