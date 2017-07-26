import Vapor
import PostgreSQLProvider

final class League: Model {
    var leagueId: Int
    let storage = Storage()

    init(row: PostgreSQLProvider.Row) throws {
        leagueId = try row.get("league_id")
    }

    func makeRow() throws -> PostgreSQLProvider.Row {
        var row = PostgreSQLProvider.Row()
        try row.set("league_id", leagueId)
        return row
    }
}
