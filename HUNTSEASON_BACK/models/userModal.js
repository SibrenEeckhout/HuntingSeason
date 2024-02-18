// models/UserModel.js

class User {
    constructor(id, name, number, email, password) {
      this.id = id;
      this.name = name;
      this.number = number;
      this.email = email;
      this.password = password;
    }
  }
  
  export { User }; 