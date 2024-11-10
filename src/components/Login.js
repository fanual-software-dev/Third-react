import React, { useState } from 'react'

const Login = () => {

    const [isnotloggedin,setisloggedin] = useState(true)
    const [isuser,setisuser] = useState(false)
    const [isadmin,setisadmin] = useState(false)
    const [iserror,setiserror] = useState(false)
    const [name,setname] = useState("")
    
    const UserAdminDecider = (e)=>{
        e.preventDefault()

        if (document.getElementById('password').value === ""){
            setisuser(false)
            setisadmin(false)
            setiserror(true)
            setisloggedin(false)
        }

        else if (document.getElementById('username').value ==="Admin" && document.getElementById('password').value){
            setisuser(false)
            setisadmin(true)
            setiserror(false)
            setisloggedin(false)
            setname("Admin")
        }

        else if (document.getElementById('username').value !=="" && document.getElementById('password').value){
            setisuser(true)
            setisadmin(false)
            setiserror(false)
            setisloggedin(false)
            setname(document.getElementById("username").value)
        }



    }
  return (
    <>
        {isnotloggedin &&
                    <div className='form-div'>
                        <p>Log in as User / Admin</p>
                        <form className='form'>
                            <label for = "username"> User name </label>
                            <input id='username' type='text' placeholder='Enter your user name' required/>
                            <label for = "username"> Password </label>
                            <input id='password' type='text' placeholder='Enter your password' />

                            <button onClick={UserAdminDecider}>Log In</button>
                        </form>
                    </div>
        }

        {isuser && 
                <div className='div'>
                    Welcome {name} !!
                </div>
        }

        {isadmin && 
                <div className='div'>
                    Welcome Admin User !!
                </div>
        }

        {iserror &&
                  <div className='div'>Opps something went wrong !!</div>
        }
        
    </>
  )
}

export default Login

