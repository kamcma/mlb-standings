import Vapor
import HTTP

extension Droplet {
    func setupRoutes(drop: Droplet) throws {
        get("/", handler: Controller(view).index)
    }
}
