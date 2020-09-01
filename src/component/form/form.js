import React from "react"
import {userForm} from "ract-hook-form"
import App from "../App";

const form = () =>{
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


return {
    <form const submit={handleSubmit(onSubmit)}>
     <lable htmlfor="name">Nama :</lable>
     <input
       type="text"
       name="name"
       id="name"
       ref={register({
           required:"email is required",
       })}
       className="form-control"
       />
       <span className='badge badge-danger'>{errors.name && errors.name.massage}</span>
       <br  />
    <label hatmlfor="email">email :</label>
    <input
       type="email"
       name="email"
       id="email"
       ref={register9({
           required:"email is required",
       })}
       className="form-control"
       />
       <span className='badge badge-danger'>{errors.name && errors.name.massage}</span>
       <br />
       <label hatmlfor="age">age:</label>
    <input
       type="age"
       name="age"
       id="age"
       ref={register({
           required:"Required",
       })}
       className="form-control"
       required
       />
       <span className='badge badge-danger'>{errors.name && errors.name.massage}</span>
       <div className='text-center pt-3'>
       <button className='btn btn-success' type='submit'>
       submit
       </button>
    </div>
  </form>
 }
}

export default App;