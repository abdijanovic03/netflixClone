import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form/dist/types";
import useAuth from "../hooks/useAuth";

interface Inputs{
    email: string
    password: string
}

function Login(){
    
    const [login,setLogin] = useState(false);
    const { signIn, signUp}=useAuth()    


    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit:SubmitHandler<Inputs> = async ({email,password}) => {
        if(login){
            await signIn(email,password);   
        }else{
            await signUp(email,password);
        }
    };
    
    

    return (
        <div className="relative flex h-screen w-screen
         bg-black md:items-center md:justify-center
         md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Image
                src=""
                alt="" 
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
                layout="fill"
                
            />  */}
            <img
                src="https://rb.gy/ulxxee"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
            />

        <form action="" onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 " >
            <h1>Sign in</h1>
            <div className="space-y-4 text-white">
                <label className="inline-block w-full">
                    <input type="email" placeholder="Email" className="input" {...register('email',{required: true})}/>
                      {errors.email && <span className="p-1 text-[13px] font-light text-orange-500">Email is required</span>} 
                </label>
                <label className="inline-block w-full">
                    <input type="password" placeholder="Password" className="input" {...register('password',{required:true})} />
                      {errors.password && <span className="p-1 text-[13px] font-light text-orange-500">Password is required</span>} 
                </label>
            </div>
            <button className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={()=>setLogin(true)}>Sign In</button>
        
            <div className="text-center text-[grey]">
                <p>
                    New to Netflix? 
                </p> 
                <button type="submit" className="text-white hover:underline" onClick={()=>setLogin(false)}>
                    Sign up now!
                </button>
            </div>

        </form>        


        </div>
    );
}

export default Login;