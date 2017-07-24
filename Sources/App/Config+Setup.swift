extension Config {
    public func setup() throws {
        addConfigurable(command: Fetch.init, name: "fetch")
    }
}
