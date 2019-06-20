const problemOne = () => Array(1000).fill().map((c, i) => i).filter(x => (x % 3 === 0) || (x % 5 === 0)).reduce((x, y) => x += y, 0);

