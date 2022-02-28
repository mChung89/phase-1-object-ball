function gameObject() {
    const gameObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }; return gameObj
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(player) {
    const game = gameObject();
    let found = {}
    for (const f in game.home.players) {
        if (player === f) {
            found = gameObject().home.players[f]
        } else {
            for (const f in game.away.players) {
                if (player === f) {
                    found = gameObject().away.players[f]
                }
            }
        }
    } return found.points
}


function shoeSize(player) {
    const game = gameObject();
    let found = {}
    for (const f in game.home.players) {
        if (player === f) {
            found = gameObject().home.players[f]
            return found.shoe
        } else {
            for (const f in game.away.players) {
                if (player === f) {
                    found = gameObject().away.players[f]
                    return found.shoe
                }
            }
        }
    }
}

function teamColors(team) {
    const game = gameObject();
    if (team === game.home.teamName) {
        return game.home.colors
    } else if (team === game.away.teamName) {
        return game.away.colors
    } else return undefined
}

function teamNames() {
    let teams = [];
    teams.push(gameObject().home.teamName);
    teams.push(gameObject().away.teamName);
    return teams
}

function playerNumbers(team) {
    let numbers = [];
    if (team === gameObject().home.teamName) {
        const game = gameObject().home.players;
        for (const player in game) {
            numbers.push(game[player].number)
        }
    } else if (team === gameObject().away.teamName) {
        const game = gameObject().away.players;
        for (const player in game) {
            numbers.push(game[player].number)
        }
    } return numbers
}

function playerStats(player) {
    const game = gameObject();
    let found = {}
    for (const f in game.home.players) {
        if (player === f) {
            found = gameObject().home.players[f]
            return found
        }
    }
    for (const f in game.away.players) {
        if (player === f) {
            found = gameObject().away.players[f];
            return found
        }
    }
}


function mostPointsScored() {
    const game = gameObject();
    let found = 0;
    for (const f in game.home.players) {
        const current = gameObject().home.players[f];
        if (current.points > found) {
            found = game.home.players[f]["points"]
        }
    }
    for (const f in game.away.players) {
        const current = gameObject().away.players[f];
        if (current.points > found) {
            found = game.away.players[f]["points"]
        }
    }
    return found
}

function playerWithLongestName() {
    const game = gameObject();
    let found = 0;
    let playerFound = ""
    for (const f in game.home.players) {
        const current = gameObject().home["players"];
        if (f.length > found) {
            found = f.length
            playerFound = f
        }
    }
    for (const f in game.away.players) {
        const current = gameObject().away["players"];
        if (f.length > found) {
            found = f.length
            playerFound = f
        }
    }
    return playerFound
}

