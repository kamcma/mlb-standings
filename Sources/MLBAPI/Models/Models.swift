import Foundation

public struct StandingsResponse: Decodable {
    public let copyright: String
    public let divisions: [Division]

    private enum CodingKeys: String, CodingKey {
        case copyright, divisions = "records"
    }
}

public struct Division: Decodable {
    public let standingsType: StandingsType
    public let league: UnnamedMLBEntity
    public let division: UnnamedMLBEntity
    public let lastUpdated: Date
    public let teams: [Team]

    private enum CodingKeys: String, CodingKey {
        case standingsType, league, division, lastUpdated
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
            throw DecodingError.dataCorruptedError(
                forKey: .lastUpdated,
                in: container,
                debugDescription: "Expected date string to be ISO8601-formatted."
            )
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
        case team
        case streak
        case divisionRank, leagueRank, wildCardRank
        case sportRank
        case gamesPlayed
        case gamesBack, leagueGamesBack, wildCardGamesBack
        case sportGamesBack
        case divisionGamesBack
        case leagueRecord
        case lastUpdated
        case records
        case runsScored, runsAllowed
        case divisionChamp
        case divisionLeader
        case hasWildcard
        case clinched, eliminationNumber, wildCardEliminationNumber
        case wins, losses
        case runDifferential
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
    case home, away
    case day, night
    case extraInning
    case grass, turf
    case lastTen
    case oneRun
    case typeLeft, typeRight
    case winners
    case xWinLoss, xWinLossSeason
}

public enum StandingsType: String, Decodable {
    case regularSeason, wildCard, divisionLeaders, wildCardWithLeaders, firstHalf
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
    case wins, losses
}
