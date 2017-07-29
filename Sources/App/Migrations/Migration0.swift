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

        try Team(team: .atlanta, league: .national, division: .nlEast).save()
        try Team(team: .miami, league: .national, division: .nlEast).save()
        try Team(team: .nyMets, league: .national, division: .nlEast).save()
        try Team(team: .philadelphia, league: .national, division: .nlEast).save()
        try Team(team: .washington, league: .national, division: .nlEast).save()

        try Team(team: .chiCubs, league: .national, division: .nlCentral).save()
        try Team(team: .cincinnati, league: .national, division: .nlCentral).save()
        try Team(team: .milwaukee, league: .national, division: .nlCentral).save()
        try Team(team: .pittsburgh, league: .national, division: .nlCentral).save()
        try Team(team: .stLouis, league: .national, division: .nlCentral).save()

        try Team(team: .arizona, league: .national, division: .nlWest).save()
        try Team(team: .colorado, league: .national, division: .nlWest).save()
        try Team(team: .laDodgers, league: .national, division: .nlWest).save()
        try Team(team: .sanDiego, league: .national, division: .nlWest).save()
        try Team(team: .sanFrancisco, league: .national, division: .nlWest).save()
    }

    static func revert(_ database: Database) throws {
        try database.delete(Team.self)
    }
}
