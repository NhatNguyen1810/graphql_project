import React, {useState, useEffect, useContext} from 'react'
import {auth} from '../../firebase'; 
import {useHistory} from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import {AuthContext} from '../../context/authContext'; 
const CompleteRegistration = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    let history = useHistory(); 
    const {dispatch} = useContext(AuthContext); 
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true)
        if(!email || !password){
            toast.error('email and password is required');
            return
        }
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href)
            console.log(result);
            if(result.user.emailVerified){
                window.localStorage.removeItem('emailForRegistration')
                let user = auth.currentUser;
                await user.updatePassword(password)

                const idTokenResult = await user.getIdTokenResult()
                dispatch({
                    type: 'LOGGED_IN_USER', 
                    payload: {
                        email: user.email, 
                        token: idTokenResult.token
                    }
                })

                // make api request to save/update user inn mongodb 

                history.push('/')

            }
        }

        catch(e){
            console.log("error", e);
            setLoading(false); 
            toast.error(e.message); 
        }
    }

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [loading])

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
                        
                        className="form-control"/>
                <input type="password" 
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    disabled={loading}
                    className="form-control"/>
            </div>
            <button disabled={loading} className="btn btn-raised btn-primary">Submit</button>
        </form>
   
</div> 
    )
}

export default CompleteRegistration;