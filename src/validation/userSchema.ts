 import {z} from "zod"

 export const userSchema = 
 
 z.object({


    name: z
    .string()
    .min(3, {

        message: "Nombre tiene que ser almenos de 3 caracteres"

    })
    .max(200, {

        message: "Nombre tiene que tener menos de 200 caracteres"

    }),
    
    lastName: z
    .string()
    .min(3, {

        message: "Apellido tiene que ser almenos de 3 caracteres"

    })

    .max(200, {
        message: "Apellido tiene que tener menos de 200 caracteres"
    }),


    age: z
    .string()
    .refine(age => !isNaN(parseFloat(age)), {
        message: "Ingrese un tipo de dato valido 'numero' "
    }),


    biography: z.string().min(1,{
        message: "campo vacío, debes agregar al menos un caracter a tu biografía"
    })
    .max(200, {
        message: "Maximo 200 caracteres"
    })
    

})

