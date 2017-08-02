import Vapor
import HTTP

extension Droplet {
    func setupRoutes(drop: Droplet) throws {
        get("team", Team.parameter, handler: Controller(view).index)
    }
}
