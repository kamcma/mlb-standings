import Routing
import Vapor

public func routes(_ router: Router) throws {
    router.get("hello") { req in
        return "Hello, world!"
    }
}
