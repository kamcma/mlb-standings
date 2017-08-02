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

extension Team: NodeRepresentable {
    func makeNode(in context: Context?) throws -> Node {
        var node = Node(context)
        try node.set("id", id?.wrapped)
        try node.set("wins", wins)
        try node.set("losses", losses)
        return node
    }
}
