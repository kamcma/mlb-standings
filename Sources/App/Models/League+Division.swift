import Vapor
import PostgreSQLProvider

final class League: Model {
    let storage = Storage()

    init(row: PostgreSQLProvider.Row) throws {
    }

    func makeRow() throws -> PostgreSQLProvider.Row {
        var row = PostgreSQLProvider.Row()
        return row
    }
}

final class Division: Model {
    let storage = Storage()

    init(row: PostgreSQLProvider.Row) throws {
    }

    func makeRow() throws -> PostgreSQLProvider.Row {
        var row = PostgreSQLProvider.Row()
        return row
    }
}
