const path = require ('path');

module.exports = {
	entry: "./src/app.ts",
	output: {
		path: path.resolve (__dirname, "dist"),
		filename: "app.js"
	},
	resolve: {
		alias: {
			"openfl/desktop": path.resolve (__dirname, "node_modules/openfl/lib/openfl/desktop"),
			"openfl/display": path.resolve (__dirname, "node_modules/openfl/lib/openfl/display"),
			"openfl/display3D": path.resolve (__dirname, "node_modules/openfl/lib/openfl/display3D"),
			"openfl/errors": path.resolve (__dirname, "node_modules/openfl/lib/openfl/errors"),
			"openfl/events": path.resolve (__dirname, "node_modules/openfl/lib/openfl/events"),
			"openfl/external": path.resolve (__dirname, "node_modules/openfl/lib/openfl/external"),
			"openfl/filters": path.resolve (__dirname, "node_modules/openfl/lib/openfl/filters"),
			"openfl/geom": path.resolve (__dirname, "node_modules/openfl/lib/openfl/geom"),
			"openfl/media": path.resolve (__dirname, "node_modules/openfl/lib/openfl/media"),
			"openfl/net": path.resolve (__dirname, "node_modules/openfl/lib/openfl/net"),
			"openfl/profiler": path.resolve (__dirname, "node_modules/openfl/lib/openfl/profiler"),
			"openfl/sensors": path.resolve (__dirname, "node_modules/openfl/lib/openfl/sensors"),
			"openfl/system": path.resolve (__dirname, "node_modules/openfl/lib/openfl/system"),
			"openfl/text": path.resolve (__dirname, "node_modules/openfl/lib/openfl/text"),
			"openfl/ui": path.resolve (__dirname, "node_modules/openfl/lib/openfl/ui"),
			"openfl/utils": path.resolve (__dirname, "node_modules/openfl/lib/openfl/utils"),
			"openfl/utils/Assets": path.resolve (__dirname, "node_modules/openfl/lib/openfl/utils/Assets"),
			"openfl/Lib": path.resolve (__dirname, "node_modules/openfl/lib/openfl/Lib"),
			"openfl/Memory": path.resolve (__dirname, "node_modules/openfl/lib/openfl/Memory"),
			"openfl/Vector": path.resolve (__dirname, "node_modules/openfl/lib/openfl/Vector")
		},
		extensions: [
			'.ts',
			'.tsx',
			'.js'
		]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		]
	}
};