import MLB

final class Controller {

    let view: ViewRenderer

    init(_ view: ViewRenderer) {
        self.view = view
    }

    func index(req: Request) throws -> ResponseRepresentable {
        var baseball = [String: [Team]]()

        for division in [MLBDivision.alEast, .alCentral, .alWest, .nlEast, .nlCentral, .nlWest] {
            baseball[division.description] = try Team.makeQuery()
                .filter("division_id", division.rawValue).sort("losses", .ascending).all()
        }

        return try view.make("index", baseball)
    }
}

extension MLBDivision: CustomStringConvertible {
    public var description: String {
        switch self {
            case .alEast:
                return "alEast"
            case .alCentral:
                return "alCentral"
            case .alWest:
                return "alWest"
            case .nlEast:
                return "nlEast"
            case .nlCentral:
                return "nlCentral"
            case .nlWest:
                return "nlWest"
        }
    }
}
