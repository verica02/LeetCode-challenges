/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    while (true) {
        const newDominoes = dominoes.replaceAll(`R.L`, `_`).replaceAll(`.L`, `LL`).replaceAll(`R.`, `RR`).replaceAll(`_`, `R.L`);
        if (newDominoes === dominoes)
            return newDominoes;
        else dominoes = newDominoes;
    }
}

