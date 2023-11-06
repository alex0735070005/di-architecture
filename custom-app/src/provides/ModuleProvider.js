class ModuleProvider {
  constructor() {
    if (!ModuleProvider.instance) {
      ModuleProvider.instance = this;
      ModuleProvider.using = 0;
    }

    return ModuleProvider.instance;
  }

  register(modules) {
    this.modules = modules;
  }

  get(name) {
    ModuleProvider.using += 1;
    console.log("PROVIDER USING", ModuleProvider.using);

    if (!this.modules[name]) {
      throw new Error(`Module '${name}' not registered.`);
    }

    return this.modules[name]();
  }
}

const moduleProvider = new ModuleProvider();

module.exports = moduleProvider;
