const config = {
	"**/*.ts": [
		"tsc -p tsconfig.json --noEmit",
		"jest --bail --findRelatedTests",
	],
	"*": ["xo", "prettier --check"],
};

export default config;
