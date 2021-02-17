import React from 'react';

const Login = (props) => {

    const {email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;
    
    return(

    <section className="login">

        <div className="loginContainer">
            <label>Username</label>
            <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMessage">{emailError}</p>
            <label>Password</label>
            <input 
                type="password" 
                required 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>

            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Iniciar Sesión</button>
                    <p>¿No tienes cuenta? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Regístrate</span>
                    </p>

                    </>

                ): (
                    <>
                    <button onClick={handleSignup}>Regístrate</button>
                    <p>¿Ya tienes cuenta? 
                        <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesión</span>
                    </p>
                    </>
                )}

            </div>
        </div>
        
    </section>

    )
}

export default Login;