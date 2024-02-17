export default function colorScore(score: number, listScores: number[]): { backgroundColor: string, textColor: string } {
    if (listScores.length === 0) {
        throw new Error("listScores is empty");
    }

    const minScore = Math.min(...listScores);
    const maxScore = Math.max(...listScores);

    if (minScore === maxScore) {
        // Si tous les scores sont identiques, retournez simplement la première couleur
        return {
            backgroundColor: '#9dc643',
            textColor: '#7e9e2d'
        };
    }

    const colors = [
        { backgroundColor: '#9dc643', textColor: '#7e9e2d' },
        { backgroundColor: '#c6d94e', textColor: '#a1b03b' },
        { backgroundColor: '#f9f871', textColor: '#d7e05e' },
        { backgroundColor: '#f7d154', textColor: '#d1b84e' },
        { backgroundColor: '#f4a259', textColor: '#d08b4a' },
        { backgroundColor: '#f27e4c', textColor: '#d05f44' },
        { backgroundColor: '#f25c3c', textColor: '#d03d3a' },
        { backgroundColor: '#f03a2e', textColor: '#d01d2e' },
    ];

    let index = Math.round(((score - minScore) / (maxScore - minScore)) * (colors.length - 1));
    // Assurer que l'index est dans les limites du tableau
    index = Math.max(0, Math.min(index, colors.length - 1));

    return colors[index];
}