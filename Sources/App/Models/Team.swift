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
        try node.set("id", id?.wrapped.int)
        if context is MLBStandingsViewContext {
            if let id = id?.wrapped.int {
                try node.set("name", MLBTeam(rawValue: id)?.description)
            }
            if let wins = wins, let losses = losses {
                let percentage = Float(wins) / Float(wins + losses)
                try node.set("perc", String(format: "%.3f", percentage))
            }
        }
        try node.set("wins", wins ?? 0)
        try node.set("losses", losses ?? 0)
        try node.set("runn_diff", (runs ?? 0) - (oppRuns ?? 0))
        return node
    }
}

import Node

final class MLBStandingsViewContext: Context { }

extension MLBTeam: CustomStringConvertible {
    public var description: String {
        switch  self {
        case .baltimore:
            return "Baltimore"
        case .boston:
            return "Boston"
        case .nyYankees:
            return "New York"
        case .tampaBay:
            return "Tampa Bay"
        case .toronto:
            return "Toronto"

        case .chiWhiteSox:
            return "Chicago"
        case .cleveland:
            return "Cleveland"
        case .detroit:
            return "Detroit"
        case .kansasCity:
            return "Kansas City"
        case .minnesota:
            return "Minnesota"

        case .houston:
            return "Houston"
        case .laAngels:
            return "Los Angeles"
        case .oakland:
            return "Oakland"
        case .seattle:
            return "Seattle"
        case .texas:
            return "Texas"

        case .atlanta:
            return "Atlanta"
        case .miami:
            return "Miami"
        case .nyMets:
            return "New York"
        case .philadelphia:
            return "Philadelphia"
        case .washington:
            return "Washington"

        case .chiCubs:
            return "Chicago"
        case .cincinnati:
            return "Cincinnati"
        case .milwaukee:
            return "Milwaukee"
        case .pittsburgh:
            return "Pittsburgh"
        case .stLouis:
            return "Saint Louis"

        case .arizona:
            return "Arizona"
        case .colorado:
            return "Colorado"
        case .laDodgers:
            return "Los Angeles"
        case .sanDiego:
            return "San Diego"
        case .sanFrancisco:
            return "San Francisco"
        }
    }
}
