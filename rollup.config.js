import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import exportFetch from './src/index.js'

export default {
	input: 'src/test/index.ts',
	output: {
		dir: 'dist',
		format: 'es',
	},
	plugins: [
		nodeResolve(),
		typescript(),
		exportFetch()
	],
}
