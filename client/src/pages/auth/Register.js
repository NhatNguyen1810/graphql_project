import React, {useState} from 'react'; 
import {auth} from '../../firebase';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 

        const config = {
            url: 'http://localhost:3000/complete-registration',
            handleCodeInApp: true, 
        }
        const result = await auth.sendSignInLinkToEmail(email,config); 
        console.log(result); 
        toast.success(`Email is sent to ${email}, click link to complete the registration`);

        window.localStorage.setItem('emailForRegistration', email);
    }
    return (
        <div className="container p-5">
           
                <h4>
                    {loading ? (<h4 className="text-danger">...Loading</h4>) : (<h4>Register</h4>)}
                </h4>
                <ToastContainer/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email Address</label>
                        <input type="email" 
                                value={email}
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)} 
                                disabled={loading}
                                className="form-control"/>
                    </div>
                    <button disabled={loading} className="btn btn-raised btn-primary">Submit</button>
                </form>
           
        </div> 
    )
}

export default Register; 