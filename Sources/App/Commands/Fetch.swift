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
        formatter.timeZone = TimeZone(identifier: "America/New_York")
        let dateParameter = formatter.string(from: now)
        formatter.dateFormat = "yyyy"
        let yearParameter = formatter.string(from: now)

        for league in ["103", "104"] {
            console.print("updating league \(league) ...")
            var res: Response
            var tries = 0

            repeat {
                tries += 1
                console.print("attempt \(tries) ...")
                res = try client.get("http://mlb.mlb.com/lookup/json/named.standings_schedule_date.bam", query: [
                    "season": "\(yearParameter)",
                    "schedule_game_date.game_date": "'\(dateParameter)'",
                    "sit_code": "'h0'",
                    "league_id": league,
                    "all_star_sw": "'N'",
                    "version": "2",
                ])
                console.print("\(res.status.statusCode)")
                if res.status != .ok { sleep(5) }
            } while res.status != .ok && tries < 5

            guard res.status == .ok else {
                console.print("unable to update league \(league)")
                continue
            }

            let json = try JSON(bytes: res.body.bytes!)
            let mlbResponse = try MLBResponse(json: json)

            for standingsAllDate in mlbResponse.standingsScheduleDate.standingsAllDateRptr.standingsAllDate {
                for row in standingsAllDate.queryResults.row {
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
    }
}

extension Fetch: ConfigInitializable {
    public convenience init(config: Config) throws {
        let console = try config.resolveConsole()
        let client = try config.resolveClient()
        self.init(console: console, client: client)
    }
}
