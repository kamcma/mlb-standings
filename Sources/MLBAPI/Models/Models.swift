struct StandingsResponse: Codable {
    let Copyright: String
    let Divisions: [Division]
    
    private enum CodingKeys: String, CodingKey {
        case Copyright = "copyright"
        case Divisions = "records"
    }
}

struct Division: Codable {
    let StandingsType: StandingsType
    let League: UnnamedMLBEntity
    let Division: UnnamedMLBEntity
    let LastUpdated: String
    let Teams: [Team]
    
    private enum CodingKeys: String, CodingKey {
        case StandingsType = "standingsType"
        case League = "league"
        case Division = "division"
        case LastUpdated = "lastUpdated"
        case Teams = "teamRecords"
    }
}

struct UnnamedMLBEntity: Codable {
    let Id: Int
    let Link: String
    
    private enum CodingKeys: String, CodingKey {
        case Id = "id"
        case Link = "link"
    }
}

struct Team: Codable {
    let team: NamedMLBEntity
    let streak: Streak
    let divisionRank, leagueRank, wildCardRank, sportRank: String
    let gamesPlayed: Int
    let gamesBack, wildCardGamesBack, leagueGamesBack: String
    //let springLeagueGamesBack: EGamesBack
    let sportGamesBack, divisionGamesBack: String
    //let conferenceGamesBack: EGamesBack
    let leagueRecord: Record
    let lastUpdated: String
    let records: Records
    let runsAllowed, runsScored: Int
    let divisionChamp, divisionLeader, hasWildcard, clinched: Bool
    let eliminationNumber: String
    let wins, losses, runDifferential: Int
    let wildCardEliminationNumber: String?
}

//enum EGamesBack: String, Codable {
//    case empty = "-"
//}

struct Record: Codable {
    let Wins, Losses: Int
    let Pct: String
    let Division: NamedMLBEntity?
    let SplitType: SplitType?
    let League: NamedMLBEntity?
    
    private enum CodingKeys: String, CodingKey {
        case Wins = "wins"
        case Losses = "losses"
        case Pct = "pct"
        case Division = "division"
        case SplitType = "type"
        case League = "league"
    }
}

struct NamedMLBEntity: Codable {
    let Id: Int
    let Name, Link: String
    
    private enum CodingKeys: String, CodingKey {
        case Id = "id"
        case Name = "name"
        case Link = "link"
    }
}

enum SplitType: String, Codable {
    case away = "away"
    case day = "day"
    case extraInning = "extraInning"
    case grass = "grass"
    case home = "home"
    case lastTen = "lastTen"
    case night = "night"
    case oneRun = "oneRun"
    case turf = "turf"
    case typeLeft = "left"
    case typeRight = "right"
    case winners = "winners"
    case xWinLoss = "xWinLoss"
    case xWinLossSeason = "xWinLossSeason"
}

enum StandingsType: String, Codable {
    case regularSeason = "regularSeason"
    case wildCard = "wildCard"
    case divisionLeaders = "divisionLeaders"
    case wildCardWithLeaders = "wildCardWithLeaders"
    case firstHalf = "firstHalf"
}

struct Records: Codable {
    let SplitRecords, DivisionRecords, OverallRecords, LeagueRecords: [Record]
    let ExpectedRecords: [Record]
    
    private enum CodingKeys: String, CodingKey {
        case SplitRecords = "splitRecords"
        case DivisionRecords = "divisionRecords"
        case OverallRecords = "overallRecords"
        case LeagueRecords = "leagueRecords"
        case ExpectedRecords = "expectedRecords"
    }
}

struct Streak: Codable {
    let StreakType: StreakType
    let StreakNumber: Int
    let StreakCode: String
    
    private enum CodingKeys: String, CodingKey {
        case StreakType = "streakType"
        case StreakNumber = "streakNumber"
        case StreakCode = "streakCode"
    }
}

enum StreakType: String, Codable {
    case losses = "losses"
    case wins = "wins"
}
