export default function colorScore(score: number, listScores: number[]): { backgroundColor: string, textColor: string } {
    // get min and max score from listScores
    const minScore = Math.min(...listScores);
    const maxScore = Math.max(...listScores);

    // get list of 8 colors where in object text color is the background color but more darker and background color in object from min to max score (from green #9dc643 to red via yellow) 
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

    // get the index of the color in the list
    const index = Math.round(((score - minScore) / (maxScore - minScore)) * (colors.length - 1));

    // return the color
    return colors[index];
}
