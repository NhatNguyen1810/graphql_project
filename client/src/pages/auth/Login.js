import React, {useState} from 'react'; 


const Login = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState('')
    const handleSubmit = () => {

    }
    return (
        <div className="container p-5">
            
                <h4>
                    Login
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

export default Login; 