"use client"

import { userSchema } from "@/validation/userSchema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

;


function Home () {

  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema)


   });


   console.log(errors)
  return(

  <div>

    <form onSubmit={handleSubmit(data => {console.log(data)})}>

    <label htmlFor="name">Nombre</label>
    <input type="text" id="name"
    {...register("name")}/>
    

    <label htmlFor="lastName">Apellido</label>
    <input type="text" id="lastName"
    {...register("lastName")}/>

    <label htmlFor="age">Edad</label>
    <input type="text" id="age"
    {...register("age")}/>

    <label htmlFor="biography">Biografia </label>
    <textarea id="biography" 
    {...register("biography")} 
   
    />

    <button type="submit" style={{background:"gray"}}>
      submit
    </button>

    </form>
    <div>
      {JSON.stringify(watch(), null, 2)}
    </div>
    
  </div>

  )
  


  
}

export default Home;