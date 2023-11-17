/* eslint-disable react/prop-types */
import Input from './Input'
import Button from "./Button"
import {BiRename, BiSolidRename, BiSolidUser} from "react-icons/bi"
import {HiLockClosed} from "react-icons/hi"
import axios from 'axios'
import React, {useState} from 'react'

export default function SignUpForm(props) {

    const [formData, setFormData] = useState ({
        email: '',
        password: '',
        name: '',
        surname: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const url = 'https://reddam.agreeableplant-3f520c83.southafricanorth.azurecontainerapps.io/teacherregister'

            const response = await axios.post(url, formData, {
                headers:{
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);

        }catch(error){
            console.error('Error during registration', error);
        }
    };

    const handleChange = (e) => {
        const{ name, value} =e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    if (!props.isLogin) {
        return (
            <form className={`fixed top-0 right-[550px] left-0 bottom-0 flex flex-col items-center justify-center`}>
                <h1 className="text-5xl font-semibold mb-[100px]">Sign Up</h1>
                <Input placeholder="Name" icon={<BiRename />} onChange={handleChange} name="name" value={formData.name} />
                <Input placeholder="Surname" icon={<BiSolidRename />} onChange={handleChange} name="surname" value={formData.surname}/>
                <Input placeholder="Email" icon={<BiSolidUser />}  onChange={handleChange} name="email" value={formData.email} />
                <Input placeholder="Password" icon={<HiLockClosed />} onChange={handleChange} name="password" value={formData.password} />
                <div className="mt-[50px]">
                    <Button type="" label="Sign Up"/>
                </div>
                
            </form>
        )
    }
  
}
