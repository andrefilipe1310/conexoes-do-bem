import React, { useState } from 'react';
import './LoginCard.css';
import { Link } from 'react-router-dom';

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
       
        const storedOngData = JSON.parse(localStorage.getItem('dadosOng'));
        
        if (storedOngData) {
            
            if (email === storedOngData.email && cnpj === storedOngData.cnpj) {
                
                window.location.href = "/Perfil";
            } else {
                
                setError("Email ou CNPJ incorretos. Por favor, tente novamente.");
            }
        } else {
            
            setError("Nenhum dado de ONG cadastrado. Por favor, cadastre-se primeiro.");
        }
    };

    return (
        <div className='login-card-container'>
            <div className='login-card'>
                <form onSubmit={handleLogin}>
                    <h2 className="titulo-card">Login</h2>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input 
                            type='text' 
                            placeholder='Digite seu email aqui' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>CNPJ:</label>
                        <input 
                            type='text' 
                            placeholder='Digite seu CNPJ aqui' 
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn entrar btn-success">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;
