import PostgreSQLProvider

struct Migration0: Preparation {
    static func prepare(_ database: Database) throws {
        try database.create(Team.self) { t in
            t.id()
            t.int("wins", optional: true)
            t.int("losses", optional: true)
            t.int("runs", optional: true)
            t.int("opp_runs", optional: true)
        }
    }

    static func revert(_ database: Database) throws {
        try database.delete(Team.self)
    }
}