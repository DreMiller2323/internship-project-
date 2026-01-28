
'use client'
import "./weights.css"
const Page =()=>{
const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const weight = formData.get("weight");
    const reps = formData.get("reps")

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    // 1RM = Weight × (1 + Reps / 30)
   const oneRm = weight *(1+reps/30);
   console.log(oneRm)
}
return(
<form onSubmit={handleSubmit}>
<label for = "weight">Weight:</label>
<input name="weight" type="text" id="weight" placeholder="Weight lifted in IBS" ></input>
<label for = "reps">Reps:</label>
<input name="reps" type="text" id="reps" placeholder= "Reps"></input>
<button type= "submit">Submit</button>
</form>

    );
}
export default Page;