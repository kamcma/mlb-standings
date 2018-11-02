import Foundation
import Vapor
import MLBAPI

public func routes(_ router: Router) throws {

    router.get("/") { req -> Future<String> in
        let mlbStatsApi = "http://statsapi.mlb.com:80/api/v1/"
        let year = Calendar.current.component(.year, from: Date())
        let endpoint = "standings?leagueId=103,104&season=\(year)"

        return try req.make(Client.self)
            .get(mlbStatsApi + endpoint)
            .map { res in
                let standings = try res.content.syncDecode(StandingsResponse.self)
                let teams = standings.divisions.flatMap { $0.teams }
                let records = teams.map { team in
                    return (team.team.name, team.wins, team.losses)
                }
                return records.reduce("") { str, record in
                    return str + "\(record.0): \(record.1) - \(record.2)\n"
                }
            }
    }
}
