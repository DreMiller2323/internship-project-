'use client'
import './login.css';
const Page = () => {

  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
      for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const data = {email,password };
const sendLoginRequest = async ()=>{
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('User created successfully!');
      } else {
        console.log('Failed to create user');
      }
    } catch (error) {
      console.log('Error sending request:', error);
     
  }
  sendLoginRequest()
}
}
  return (
    <form onSubmit ={handleSubmit} className="login-page">
      <label htmlFor = "email">Email:</label>
      <input name="email" type="text" id="email" placeholder="Example@example.com"></input>
      <label htmlFor = "password">Password:</label>
       <input name="password" type="text" placeholder="Password"id="password"></input>
      <button type="submit">Login</button>
    </form>
  );
};
export default Page;