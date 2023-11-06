class UserRepository {
  async getList() {
    const data = fetch("https://dummyjson.com/users").then((res) => res.json());

    return data;
  }
}

module.exports = UserRepository;
