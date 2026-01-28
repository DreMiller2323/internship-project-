import db from '../../../lib/db';

export default async function  POST(request){
try{
const {email,password}= await request.json();
if(!email||!password){
    return Response(JSON.stringify({error:'Missing email or password'}),{
        status:400
    });
}
//select from database 
// const findSqlMatch = `SELECT from users(email, password)VALUES(?,?)`
const[result]= await db.execute(
'SELECT * FROM table `WHERE` email = ? and `password`=?',
['email', 'password']
);
return new Response(JSON.stringify({message:"Logged In Successfully", result}),{
    status: 202
})

}catch(error){
console.log('Error logging in user:', error)

}
}
