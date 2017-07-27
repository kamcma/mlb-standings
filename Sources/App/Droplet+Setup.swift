@_exported import Vapor

extension Droplet {
    public func setup() throws {
        Team.database = database
        try setupRoutes(drop: self)
    }
}
