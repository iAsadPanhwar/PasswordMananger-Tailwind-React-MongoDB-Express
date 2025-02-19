import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if(passwords){
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
       setPasswordArray([...passwordArray,form])
       localStorage.setItem("password",JSON.stringify([...passwordArray,form]))
       console.log([...passwordArray,form])
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
        <>
            <div className="relative h-full w-full bg-white"><div className="absolute h-full bg-green-600 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-500 px-1 rounded">&lt;</span>
                    Pass
                    <span className="px-1 text-green-500 rounded">OP/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own password Manager</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-2xl border border-green-500 w-full p-4 py-1' type="text" name='site'/>
                    <div className="flex w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-2xl border border-green-500 w-full p-4 py-1' type="text" name='username'/>
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-2xl border border-green-500 w-full p-4 py-1' type="text" name='password'/>
                            <span onClick={showPassword} className='cursor-pointer absolute right-[6px] top-[3px]'>
                                <img ref={ref} className='p-1' width={28} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='hover:bg-green-300 flex justify-center items-center w-fit px-5 py-2 bg-green-500 rounded-full gap-2 border-2 border-green-700'>
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            state="hover-swirl"
                            colors="primary:#109173,secondary:#000000"
                        >
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2>Your Passwords</h2>
                    <table>
                        
                    </table>
                </div>
            </div>
        </>
    )
}

export default Manager