import Foundation

public struct StandingsResponse: Decodable {
    public let copyright: String
    public let divisions: [Division]

    private enum CodingKeys: String, CodingKey {
        case copyright = "copyright"
        case divisions = "records"
    }
}

public struct Division: Decodable {
    public let standingsType: StandingsType
    public let league: UnnamedMLBEntity
    public let division: UnnamedMLBEntity
    public let lastUpdated: Date
    public let teams: [Team]

    private enum CodingKeys: String, CodingKey {
        case standingsType = "standingsType"
        case league = "league"
        case division = "division"
        case lastUpdated = "lastUpdated"
        case teams = "teamRecords"
    }
}

extension Division {
    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        standingsType = try container.decode(StandingsType.self, forKey: .standingsType)
        league = try container.decode(UnnamedMLBEntity.self, forKey: .league)
        division = try container.decode(UnnamedMLBEntity.self, forKey: .division)
        let lastUpdatedString = try container.decode(String.self, forKey: .lastUpdated)
        guard let lastUpdatedTemp = Formatter.iso8601ms.date(from: lastUpdatedString) else {
            throw DecodingError.dataCorruptedError(forKey: .lastUpdated, in: container, debugDescription: "Expected date string to be ISO8601-formatted.")
        }
        lastUpdated = lastUpdatedTemp
        teams = try container.decode([Team].self, forKey: .teams)
    }
}

public struct UnnamedMLBEntity: Decodable {
    public let id: Int
    public let link: String
}

public struct Team: Decodable {
    public let team: NamedMLBEntity
    public let streak: Streak
    public let divisionRank, leagueRank, wildCardRank, sportRank: String
    public let gamesPlayed: Int
    public let gamesBack, wildCardGamesBack, leagueGamesBack: String
    //public let springLeagueGamesBack: EGamesBack
    public let sportGamesBack, divisionGamesBack: String
    //public let conferenceGamesBack: EGamesBack
    public let leagueRecord: Record
    public let lastUpdated: Date
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

public struct Record: Decodable {
    public let wins, losses: Int
    public let pct: String
    public let division: NamedMLBEntity?
    public let splitType: SplitType?
    public let league: NamedMLBEntity?
}

public struct NamedMLBEntity: Decodable {
    public let id: Int
    public let name, link: String
}

public enum SplitType: String, Decodable {
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

public enum StandingsType: String, Decodable {
    case regularSeason = "regularSeason"
    case wildCard = "wildCard"
    case divisionLeaders = "divisionLeaders"
    case wildCardWithLeaders = "wildCardWithLeaders"
    case firstHalf = "firstHalf"
}

public struct Records: Decodable {
    public let splitRecords, divisionRecords, overallRecords, leagueRecords: [Record]
    public let expectedRecords: [Record]
}

public struct Streak: Decodable {
    public let streakType: StreakType
    public let streakNumber: Int
    public let streakCode: String
}

public enum StreakType: String, Decodable {
    case losses = "losses"
    case wins = "wins"
}
