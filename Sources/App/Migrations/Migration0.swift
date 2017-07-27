import PostgreSQLProvider
import MLB

struct Migration0: Preparation {
    static func prepare(_ database: Database) throws {
        try database.create(Team.self) { t in
            t.id()
            t.int("league_id")
            t.int("division_id")
            t.int("wins", optional: true)
            t.int("losses", optional: true)
            t.int("runs", optional: true)
            t.int("opp_runs", optional: true)
        }

        try Team(team: .baltimore, league: .american, division: .alEast).save()
        try Team(team: .boston, league: .american, division: .alEast).save()
        try Team(team: .nyYankees, league: .american, division: .alEast).save()
        try Team(team: .tampaBay, league: .american, division: .alEast).save()
        try Team(team: .toronto, league: .american, division: .alEast).save()

        try Team(team: .chiWhiteSox, league: .american, division: .alCentral).save()
        try Team(team: .cleveland, league: .american, division: .alCentral).save()
        try Team(team: .detroit, league: .american, division: .alCentral).save()
        try Team(team: .kansasCity, league: .american, division: .alCentral).save()
        try Team(team: .minnesota, league: .american, division: .alCentral).save()

        try Team(team: .houston, league: .american, division: .alWest).save()
        try Team(team: .laAngels, league: .american, division: .alWest).save()
        try Team(team: .oakland, league: .american, division: .alWest).save()
        try Team(team: .seattle, league: .american, division: .alWest).save()
        try Team(team: .texas, league: .american, division: .alWest).save()
    }

    static func revert(_ database: Database) throws {
        try database.delete(Team.self)
    }
}
