import React, {useState} from 'react'; 
import {auth} from '../../firebase';  

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
    }
    return (
        <div className="container p-5">
           
                <h4>
                    Register
                </h4>
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