import Vapor
import PostgreSQLProvider
import MLB

final class Team: Model, Timestampable {
    var id: Identifier?
    var league: MLBLeague
    var division: MLBDivision
    var wins: Int?
    var losses: Int?
    var runs: Int?
    var oppRuns: Int?

    let storage = Storage()

    init(team: MLBTeam, league: MLBLeague, division: MLBDivision) {
        self.id = Identifier(team.rawValue)
        self.division = division
        self.league = league
    }

    init(row: PostgreSQLProvider.Row) throws {
        league = MLBLeague(rawValue: try row.get("league_id"))!
        division = MLBDivision(rawValue: try row.get("division_id"))!
        wins = try row.get("wins")
        losses = try row.get("losses")
        runs = try row.get("runs")
        oppRuns = try row.get("opp_runs")
    }

    func makeRow() throws -> PostgreSQLProvider.Row {
        var row = PostgreSQLProvider.Row()
        try row.set("league_id", league.rawValue)
        try row.set("division_id", division.rawValue)
        try row.set("wins", wins)
        try row.set("losses", losses)
        try row.set("runs", runs)
        try row.set("opp_runs", oppRuns)
        return row
    }
}
