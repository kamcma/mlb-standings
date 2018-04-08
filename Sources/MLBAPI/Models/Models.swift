public struct StandingsResponse: Codable {
    public let copyright: String
    public let divisions: [Division]
    
    private enum CodingKeys: String, CodingKey {
        case copyright = "copyright"
        case divisions = "records"
    }
}

public struct Division: Codable {
    public let standingsType: StandingsType
    public let league: UnnamedMLBEntity
    public let division: UnnamedMLBEntity
    public let lastUpdated: String
    public let teams: [Team]
    
    private enum CodingKeys: String, CodingKey {
        case standingsType = "standingsType"
        case league = "league"
        case division = "division"
        case lastUpdated = "lastUpdated"
        case teams = "teamRecords"
    }
}

public struct UnnamedMLBEntity: Codable {
    public let id: Int
    public let link: String
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case link = "link"
    }
}

public struct Team: Codable {
    public let team: NamedMLBEntity
    public let streak: Streak
    public let divisionRank, leagueRank, wildCardRank, sportRank: String
    public let gamesPlayed: Int
    public let gamesBack, wildCardGamesBack, leagueGamesBack: String
    //public let springLeagueGamesBack: EGamesBack
    public let sportGamesBack, divisionGamesBack: String
    //public let conferenceGamesBack: EGamesBack
    public let leagueRecord: Record
    public let lastUpdated: String
    public let records: Records
    public let runsAllowed, runsScored: Int
    public let divisionChamp, divisionLeader, hasWildcard, clinched: Bool
    public let eliminationNumber: String
    public let wins, losses, runDifferential: Int
    public let wildCardEliminationNumber: String?
    
    private enum CodingKeys: String, CodingKey {
        case team = "team"
        case streak = "streak"
        case divisionRank = "divisionRank"
        case leagueRank = "leagueRank"
        case wildCardRank = "wildCardRank"
        case sportRank = "sportRank"
        case gamesPlayed = "gamesPlayed"
        case gamesBack = "gamesBack"
        case wildCardGamesBack = "wildCardGamesBack"
        case leagueGamesBack = "leagueGamesBack"
        case sportGamesBack = "sportGamesBack"
        case divisionGamesBack = "divisionGamesBack"
        case leagueRecord = "leagueRecord"
        case lastUpdated = "lastUpdated"
        case records = "records"
        case runsAllowed = "runsAllowed"
        case runsScored = "runsScored"
        case divisionChamp = "divisionChamp"
        case divisionLeader = "divisionLeader"
        case hasWildcard = "hasWildcard"
        case clinched = "clinched"
        case eliminationNumber = "eliminationNumber"
        case wins = "wins"
        case losses = "losses"
        case runDifferential = "runDifferential"
        case wildCardEliminationNumber = "wildCardEliminationNumber"
    }
}

//enum EGamesBack: String, Codable {
//    case empty = "-"
//}

public struct Record: Codable {
    public let wins, losses: Int
    public let pct: String
    public let division: NamedMLBEntity?
    public let splitType: SplitType?
    public let league: NamedMLBEntity?
    
    private enum CodingKeys: String, CodingKey {
        case wins = "wins"
        case losses = "losses"
        case pct = "pct"
        case division = "division"
        case splitType = "type"
        case league = "league"
    }
}

public struct NamedMLBEntity: Codable {
    public let id: Int
    public let name, link: String
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case name = "name"
        case link = "link"
    }
}

public enum SplitType: String, Codable {
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

public enum StandingsType: String, Codable {
    case regularSeason = "regularSeason"
    case wildCard = "wildCard"
    case divisionLeaders = "divisionLeaders"
    case wildCardWithLeaders = "wildCardWithLeaders"
    case firstHalf = "firstHalf"
}

public struct Records: Codable {
    public let splitRecords, divisionRecords, overallRecords, leagueRecords: [Record]
    public let expectedRecords: [Record]
    
    private enum CodingKeys: String, CodingKey {
        case splitRecords = "splitRecords"
        case divisionRecords = "divisionRecords"
        case overallRecords = "overallRecords"
        case leagueRecords = "leagueRecords"
        case expectedRecords = "expectedRecords"
    }
}

public struct Streak: Codable {
    public let streakType: StreakType
    public let streakNumber: Int
    public let streakCode: String
    
    private enum CodingKeys: String, CodingKey {
        case streakType = "streakType"
        case streakNumber = "streakNumber"
        case streakCode = "streakCode"
    }
}

public enum StreakType: String, Codable {
    case losses = "losses"
    case wins = "wins"
}
