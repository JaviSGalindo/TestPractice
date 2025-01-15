const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // Tarea 2.1 Agregar test de la funcion add

  test('add user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1);    
    expect(userController.getUsers()).toContain(user1);
  });

  test('remove user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1);
    userController.remove(user1); 
    expect(userController.getUsers()).not.toContain(user1);
  });

  test('findByEmail user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1); 
    expect(userController.findByEmail('javier@generation.org').email).toBe('javier@generation.org');
  });

  test('findByEmail user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1); 
    expect(userController.findByEmail('paola@generation.org')).toBeUndefined();
  });

  test('findById user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1); 
    expect(userController.findById(2222).id).toBe(2222);
  });

  test('findById user2 to userController', () => {    
    let user1 = new User(2222,"Javier", "javier@generation.org");
    userController.add(user1); 
    expect(userController.findById(1111)).toBeUndefined();
  });
