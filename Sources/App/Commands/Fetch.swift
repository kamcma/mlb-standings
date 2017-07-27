import Vapor
import Console
import HTTP
import JSON
import Foundation

final class Fetch: Command {
    public let id = "fetch"
    public let help = ["Fetches baseball data."]
    public let console: ConsoleProtocol
    public let client: ClientFactoryProtocol

    public init(console: ConsoleProtocol, client: ClientFactoryProtocol) {
        self.console = console
        self.client = client
    }

    public func run(arguments: [String]) throws {
        console.print("running fetch")

        let now = Date()
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy/MM/dd"
        let formattedDateParameter = formatter.string(from: now)

        let res = try client.get("http://mlb.mlb.com/lookup/json/named.standings_schedule_date.bam", query: [
            "season": "2017",
            "schedule_game_date.game_date": "'\(formattedDateParameter)'",
            "sit_code": "'h0'",
            "league_id": "103",
            //"league_id": "104",
            "all_star_sw": "'N'",
            "version": "2",
        ])

        guard res.status == .ok else {
            console.print("\(res.status.statusCode)")
            return
        }

        let json = try JSON(bytes: res.body.bytes!)

        let mlbResponse = try MLBResponse(json: json)

        console.print(mlbResponse.standingsScheduleDate.copyright)

        for row in mlbResponse.standingsScheduleDate.standingsAllDateRptr.standingsAllDate[0].queryResults.row {
            console.print("\(row.teamFull)")
            if let team = try Team.find(row.teamId) {
                team.wins = row.w
                team.losses = row.l
                team.runs = row.runs
                team.oppRuns = row.oppRuns
                try team.save()
            }
        }
    }
}

extension Fetch: ConfigInitializable {
    public convenience init(config: Config) throws {
        let console = try config.resolveConsole()
        let client = try config.resolveClient()
        self.init(console: console, client: client)
    }
}
