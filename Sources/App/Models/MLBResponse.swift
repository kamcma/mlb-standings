import JSON

struct MLBResponse {
    var standingsScheduleDate: StandingsScheduleDate
}

extension MLBResponse: JSONInitializable {
    init(json: JSON) throws {
        standingsScheduleDate = try StandingsScheduleDate(json: try json.get("standings_schedule_date"))
    }

}

struct StandingsScheduleDate {
    var standingsAllDateRptr: StandingsAllDateRptr
    var copyright: String
}

extension StandingsScheduleDate: JSONInitializable {
    init(json: JSON) throws {
        standingsAllDateRptr = try StandingsAllDateRptr(json: try json.get("standings_all_date_rptr"))
        copyright = try json.get("copyRight")
    }
}

struct StandingsAllDateRptr {
    var standingsAllDate: [StandingsAllDate]
}

extension StandingsAllDateRptr: JSONInitializable {
    init(json: JSON) throws {
        let jsonArray: [JSON] = try json.get("standings_all_date")
        standingsAllDate = try jsonArray.map(StandingsAllDate.init)
    }
}

struct StandingsAllDate {
    var leagueId: Int
    var queryResults: QueryResults
}

extension StandingsAllDate: JSONInitializable {
    init(json: JSON) throws {
        leagueId = try json.get("league_id")
        queryResults = try QueryResults(json: try json.get("queryResults"))
    }
}

struct QueryResults {
    //var created: Date
    //var totalSize: Int
    var row: [Row]
}

extension QueryResults: JSONInitializable {
    init(json: JSON) throws {
        //created = json.get("created")
        let jsonArray: [JSON] = try json.get("row")
        row = try jsonArray.map(Row.init)
    }
}

struct Row {
    var teamId: Int
    var divisionId: Int
    var teamFull: String
    var teamShort: String
    var teamAbbrev: String
    var w: Int
    var l: Int
    var runs: Int
    var oppRuns: Int
}

extension Row: JSONInitializable {
    init(json: JSON) throws {
        teamId = try json.get("team_id")
        divisionId = try json.get("division_id")
        teamFull = try json.get("team_full")
        teamShort = try json.get("team_short")
        teamAbbrev = try json.get("team_abbrev")
        w = try json.get("w")
        l = try json.get("l")
        runs = try json.get("runs")
        oppRuns = try json.get("opp_runs")
    }
}
