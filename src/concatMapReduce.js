(function() {
	// concatMap :: (a -> [b]) -> [a] -> [b]
	module.exports = (f,reduce) => xs => (reduce ? xs.map(f).reduce((x,y) => x.concat(y), []).reduce((accu,curr) => reduce(accu,curr)): xs.map(f).reduce((x,y) => x.concat(y), []))
}).call(this);