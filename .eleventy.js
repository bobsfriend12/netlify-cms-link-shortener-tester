module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy("./src/static");
	eleventyConfig.addPassthroughCopy("./src/admin/config.yml");

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};
