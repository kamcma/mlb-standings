import Vapor
import PostgreSQLProvider

final class Team: Model {
    //var teamId: Int
    var wins: Int?
    var losses: Int?
    var runs: Int?
    var oppRuns: Int?
    let storage = Storage()

    init() { }

    init(row: PostgreSQLProvider.Row) throws {
        //teamId = try row.get("team_ id")
        wins = try row.get("wins")
        losses = try row.get("losses")
        runs = try row.get("runs")
        oppRuns = try row.get("opp_runs")
    }

    func makeRow() throws -> PostgreSQLProvider.Row {
        var row = PostgreSQLProvider.Row()
        //try row.set("team_id", teamId)
        try row.set("wins", wins)
        try row.set("losses", losses)
        try row.set("runs", runs)
        try row.set("opp_runs", oppRuns)
        return row
    }
}
