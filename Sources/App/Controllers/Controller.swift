final class Controller {
    func index(req: Request) throws -> ResponseRepresentable {
        let team = try req.parameters.next(Team.self)

        return "Team: \(team.id), Wins: \(team.wins), Losses: \(team.losses)"
    }
}