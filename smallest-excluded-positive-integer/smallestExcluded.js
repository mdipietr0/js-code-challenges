const smallestExcluded = (arr) => {
	sorted = arr.sort()
	let i = 1
	while(sorted.includes(i)) {
		i++
	}
	return i
}