
"use client"
//using client is required if youre planning on using e.preventdefault()
//other wise you will need to use NEXT.JS built in html tags like<Link> instead of <link> for example 
// import "../global.css"
const Page = () => {
 const handleSubmit = (e) => {
    e.preventDefault();
//capture form data with next.js FormData// 
    const formData = new FormData(e.currentTarget);
 
    const email = formData.get("email");
    const password = formData.get("password");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^.{8,}$/;
    if (!emailRegex.test(email)) {
      alert("Email must match Example@example.com");
    } else if (!passwordRegex.test(password)) {
      alert("Password must be 8 characters");
    } else {
      // console.log({ email, password });
const sendPostRequest = async () => {
    const data = {email,password };

    try {
      const response = await fetch('/api/signup', {
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
  
  }
  sendPostRequest()
}
 }
  return (
    <main>
      <form acction="signup"  onSubmit={handleSubmit} className="login-page">
      <label for = "email">Email:</label>
      <input placeholder="email" type="text" id="email" name="email"></input>
      <label for = "password">Password</label>
        <input placeholder="password" type="text" id="password" name="password"></input>
        <button type="submit">Sign up:</button>
      </form>
    </main>
  );
};
export default Page;
