module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy("./src/static");
	eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
	eleventyConfig.addPassthroughCopy("./src/404.html");

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};
