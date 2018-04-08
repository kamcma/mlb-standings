// swift-tools-version:4.0
import PackageDescription

let package = Package(
    name: "MLBStandings",
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", from: "3.0.0-rc.2")
    ],
    targets: [
        .target(name: "MLBAPI", dependencies: []),
        .target(name: "App", dependencies: ["Vapor", "MLBAPI"]),
        .target(name: "Run", dependencies: ["App"]),
        .testTarget(name: "AppTests", dependencies: ["App"])
    ]
)
