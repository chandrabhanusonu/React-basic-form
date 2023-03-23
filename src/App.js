
import { useState } from 'react';
import './App.css';

function App() {

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeSecondHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData] = useState( {firstName:"" , lastName:"" , email:"" , comments:"" , isVisible:true , mode:"" , fevCar:""} );

  // console.log(formData.firstName);
  // console.log(formData.lastName);
  // console.log(formData.email);
    //  console.log(formData);

  function changeHandler(event){
    const {name,value,checkbox,type} = event.target;
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name] : type==="checkbox" ? checkbox : value,
      }
    });
  }


  function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='First Name' 
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br/><br/>
        <input
          type="text"
          placeholder='Last Name' 
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br/><br/>
        <input
          type="email"
          placeholder='Enter Your Email' 
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br/> <br />

        <textarea
          placeholder='Enter Your Comments hear'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
         />

        <br/> <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          id="isVisable"
         />
         <label htmlFor='isVisable'>An I Visible ?</label>

         <br/> <br />

         <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          checked={formData.mode === "Online Mode"}
          value="Online Mode"
          id="Online Mode"
         />
         <label htmlFor='Online Mode'>Online Mode</label>

         <br/> <br />

         <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline Mode"
          checked={formData.mode === "Offline Mode"}
          id="Offline Mode"
         />
         <label htmlFor='Offline Mode'>Offline Mode</label>

         <br/> <br />
         <label htmlFor='fevCar'>Tele me your Fev. Car </label>
         <select
         onChange={changeHandler}
         name="fevCar"
         value={formData.fevCar}
         id="fevCar">
          
          <option value="Scarpio">Scarpio</option>
          <option value="Farari">Farari</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
         </select>

         <br/>

         {/* <input type="submit" value="submit">Submit</input> */}
         <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
