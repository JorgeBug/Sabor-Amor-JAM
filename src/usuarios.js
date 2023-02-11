const usersList = [];

function addUser(uname, uphone, uemail, upassword) {
  let newUser = {
    name: uname,
    phone: uphone,
    email: uemail,
    password: upassword,
  };
  console.log(newUser)
  usersList.push(newUser);
}

