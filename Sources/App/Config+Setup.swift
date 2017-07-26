import PostgreSQLProvider

extension Config {
    public func setup() throws {
        addConfigurable(command: Fetch.init, name: "fetch")
        try addProvider(PostgreSQLProvider.Provider.self)
        preparations.append(Migration0.self)
    }
}
