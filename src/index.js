export default function exportFetch() {
	return {
		name: 'rollup-export-fetch',
		async transform(code) {
			const tokens = code.split('\n')
			const urlReg = /ef\[([\w:/.?]*)\]/
			const replaceReg = /['`"]ef\[([\w:/.?]*)\]['`"]/
			if (!code.includes('ef['))
				return null
			for (let i = 0; i < tokens.length; i++) {
				if (urlReg.test(tokens[i])) {
					const url = tokens[i].match(urlReg)?.[1]
					if (url == undefined)
						continue
					try {
						const data = await fetch(url)
						const result = await data.json()
						tokens[i] = tokens[i].replace(replaceReg, JSON.stringify(result))
					}
					catch(err) {
						tokens[i] = tokens[i].replace(replaceReg, JSON.stringify(err))
					}
				}
			}
			return tokens.join(';')
		}
	}
}
