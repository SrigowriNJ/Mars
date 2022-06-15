function getUsers(){
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
          resolve(
              [
                  {username:'john',email:'john@test.com'},
                  {username:'Kevin',email:'kevin@test.com'}
              ]
          )
      },1000 );
    });
}

const promise=getUsers();

function findUser(inputname){
    promise.then((result) =>{
        const user=result.find((user)=> user.username === inputname);
        console.log(user);
    });
};

findUser('Kevin');