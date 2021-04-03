const db = [
  {
    "userName": "divij.827@gmail.com",
    "password": "pass1234@",
    "tokens": [
      "asdasdasdjaj3n24guy2ng3u4yg23u4yg2uy3ng4un2g3u4ng23u3g4nu2gc32g3uc4g2u34",
      "32kj4hn2ck3h2c4h23k4jch23kh4ck24nj2h3k4jc2k3h4ck2h34k2jch3k4nj2c34khj2c4"
    ]
  },
  {
    "userName": "user1",
    "password": "12345678",
    "tokens": [
      "23j4k2nj34kj2n3jk4n2k3n4kj2n34k23n4kjen2mjknmcmj2nc4jkn23jkn4cjk2n34kjnc",
      "32knm4klj23n4jkn2jkcn4jk2nc23jkn4cj2n3kj4nj2c3nn3jk2nx3jkn4xjkn3z4k3j4n2"
    ]
  }
];

export const loginApi = (id, pass) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = db.find(u => u.userName === id && u.password === pass );
    if(user) {
      resolve({success: true, msg: 'login success', token: user.tokens[0]});
      return;
    } reject(new Error('user not found'));
  }, 3000);
})