import React, { Component } from 'react';

const data = [
  {
    "Team": "Miami Hurricanes",
    "PPG": 69,
    "FGM": 773,
    "FGA": 1695,
    "FG%": 45.6,
    "FTM": 421,
    "FTA": 584,
    "FT%": 72.1,
    "3PTM": 200,
    "3PA": 550,
    "3P%": 36.4,
    "TO": 13,
    "Rebounds": 36,
    "Seed": 8
  },
  {
    "Team": "Kansas Jayhawks",
    "PPG": 83,
    "FGM": 946,
    "FGA": 1943,
    "FG%": 48.7,
    "FTM": 476,
    "FTA": 715,
    "FT%": 66.6,
    "3PTM": 279,
    "3PA": 689,
    "3P%": 40.5,
    "TO": 13,
    "Rebounds": 39,
    "Seed": 1
  },
  {
    "Team": "Michigan State Spartans",
    "PPG": 72,
    "FGM": 850,
    "FGA": 1817,
    "FG%": 46.8,
    "FTM": 408,
    "FTA": 614,
    "FT%": 66.4,
    "3PTM": 259,
    "3PA": 689,
    "3P%": 37.6,
    "TO": 14,
    "Rebounds": 37,
    "Seed": 9
  },
  {
    "Team": "Iowa State Cyclones",
    "PPG": 81,
    "FGM": 971,
    "FGA": 2072,
    "FG%": 46.9,
    "FTM": 398,
    "FTA": 572,
    "FT%": 69.6,
    "3PTM": 329,
    "3PA": 818,
    "3P%": 40.2,
    "TO": 10,
    "Rebounds": 35,
    "Seed": 5
  },
  {
    "Team": "Nevada Wolf Pack",
    "PPG": 80,
    "FGM": 907,
    "FGA": 2017,
    "FG%": 45,
    "FTM": 593,
    "FTA": 843,
    "FT%": 70.3,
    "3PTM": 312,
    "3PA": 811,
    "3P%": 38.5,
    "TO": 11,
    "Rebounds": 39,
    "Seed": 12
  },
  {
    "Team": "Purdue Boilermakers",
    "PPG": 80,
    "FGM": 894,
    "FGA": 1864,
    "FG%": 48,
    "FTM": 488,
    "FTA": 639,
    "FT%": 76.4,
    "3PTM": 288,
    "3PA": 709,
    "3P%": 40.6,
    "TO": 13,
    "Rebounds": 38,
    "Seed": 4
  },
  {
    "Team": "Vermont Catamounts",
    "PPG": 74,
    "FGM": 916,
    "FGA": 1848,
    "FG%": 49.6,
    "FTM": 450,
    "FTA": 641,
    "FT%": 70.2,
    "3PTM": 219,
    "3PA": 594,
    "3P%": 36.9,
    "TO": 11,
    "Rebounds": 34,
    "Seed": 13
  },
  {
    "Team": "Creighton Bluejays",
    "PPG": 82,
    "FGM": 1052,
    "FGA": 2071,
    "FG%": 50.8,
    "FTM": 391,
    "FTA": 573,
    "FT%": 68.2,
    "3PTM": 297,
    "3PA": 744,
    "3P%": 39.9,
    "TO": 12,
    "Rebounds": 35,
    "Seed": 6
  },
  {
    "Team": "Rhode Island Rams",
    "PPG": 73,
    "FGM": 836,
    "FGA": 1847,
    "FG%": 45.3,
    "FTM": 480,
    "FTA": 733,
    "FT%": 65.5,
    "3PTM": 199,
    "3PA": 589,
    "3P%": 33.8,
    "TO": 11,
    "Rebounds": 37,
    "Seed": 11
  },
  {
    "Team": "Oregon Ducks",
    "PPG": 79,
    "FGM": 954,
    "FGA": 1982,
    "FG%": 48.1,
    "FTM": 489,
    "FTA": 688,
    "FT%": 71.1,
    "3PTM": 292,
    "3PA": 773,
    "3P%": 37.8,
    "TO": 12,
    "Rebounds": 36,
    "Seed": 3
  },
  {
    "Team": "Iona Gaels",
    "PPG": 80,
    "FGM": 951,
    "FGA": 2091,
    "FG%": 45.5,
    "FTM": 502,
    "FTA": 652,
    "FT%": 77,
    "3PTM": 332,
    "3PA": 836,
    "3P%": 39.7,
    "TO": 12,
    "Rebounds": 36,
    "Seed": 14
  },
  {
    "Team": "Michigan Wolverines",
    "PPG": 75,
    "FGM": 893,
    "FGA": 1857,
    "FG%": 48.1,
    "FTM": 443,
    "FTA": 572,
    "FT%": 77.4,
    "3PTM": 318,
    "3PA": 837,
    "3P%": 38,
    "TO": 9,
    "Rebounds": 30,
    "Seed": 7
  },
  {
    "Team": "Oklahoma State Cowboys",
    "PPG": 86,
    "FGM": 922,
    "FGA": 1986,
    "FG%": 46.4,
    "FTM": 606,
    "FTA": 770,
    "FT%": 78.7,
    "3PTM": 287,
    "3PA": 716,
    "3P%": 40.1,
    "TO": 13,
    "Rebounds": 37,
    "Seed": 10
  },
  {
    "Team": "Louisville Cardinals",
    "PPG": 78,
    "FGM": 893,
    "FGA": 1961,
    "FG%": 45.5,
    "FTM": 467,
    "FTA": 682,
    "FT%": 68.5,
    "3PTM": 228,
    "3PA": 636,
    "3P%": 35.8,
    "TO": 11,
    "Rebounds": 40,
    "Seed": 2
  },
  {
    "Team": "Jacksonville State Gamecocks",
    "PPG": 70,
    "FGM": 834,
    "FGA": 1823,
    "FG%": 45.7,
    "FTM": 455,
    "FTA": 639,
    "FT%": 71.2,
    "3PTM": 248,
    "3PA": 666,
    "3P%": 37.2,
    "TO": 14,
    "Rebounds": 36,
    "Seed": 15
  }
];

class ChartSection extends Component {
    render () {
        return (
            <div className="ChartSection">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Miami</td>
                            <td>Other</td>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Points per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Field-Goal %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Free-Throw %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Three-Point %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Turnovers per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Rebounds per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChartSection;
