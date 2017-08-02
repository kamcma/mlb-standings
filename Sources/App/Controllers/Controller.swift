final class Controller {

    let view: ViewRenderer

    init(_ view: ViewRenderer) {
        self.view = view
    }

    func index(req: Request) throws -> ResponseRepresentable {
        let teams = try Team.makeQuery().all()
        //return try view.make("index", teams.makeNode(in: nil))
        return try view.make("index", ["teams": teams])
    }
}
