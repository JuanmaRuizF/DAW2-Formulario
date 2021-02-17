import './App.css';
import React, {useState, useEffect} from "react";
import fire from './fire';
import Login from './login';
import Formulario from './Formulario';
import {db} from './fire';

function App() {

  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);

  const[nombre, setNombre] = useState('');
  const[apellido, setApellido] = useState('');
  const[telefono, setTelefono] = useState('');
  const[codigoPostal, setCodigoPostal] = useState('');
  const[direccion, setDireccion] = useState('');


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () => {
    clearErrors();
    fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err =>{
          switch(err.code){
            case "auth/invalid-email":

            case "auth/user-disabled":

            case "auth/user-not-found":

            setEmailError(err.message);
            break;

            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        })

  }

  const handleSignup = () =>{
    clearErrors();
    fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err =>{
          switch(err.code){
            case "auth/email-already-in-use":

            case "auth/invalid-email":

            setEmailError(err.message);
            break;

            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        })
  }
  const handleLogout =() =>{
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser('');
      }
    })
  }

  
  useEffect(()=>{
    authListener();
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Se ha enviado correctamente el formulario");
    db.collection("formularioDAW2")
      .add({
        Nombre: nombre,
        Apellido: apellido,
        Teléfono: telefono,
        CódigoPostal: codigoPostal,
        Direccion: direccion,
      }).catch((error) => {
        alert(error.message);
      });
      setDireccion("");
      setEmail("");
      setNombre("");
      setApellido("");
      setCodigoPostal("");
      setTelefono("");
  }
  return (
    <div className="App">
      {user ? (
        <Formulario 
          handleLogout={handleLogout} 
          nombre={nombre} 
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
          email={email}
          telefono={telefono}
          setTelefono={setTelefono}
          codigoPostal={codigoPostal}
          setCodigoPostal={setCodigoPostal}
          direccion={direccion}
          setDireccion={setDireccion}
          handleSubmit={handleSubmit}
        />
      ): (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}

      />
      )}
      
      
    </div>
  );
}

export default App;
