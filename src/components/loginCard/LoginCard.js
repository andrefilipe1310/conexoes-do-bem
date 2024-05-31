import React, { useState } from 'react';
import './LoginCard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); // Adaptei para usar senha ao invés de CNPJ
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://localhost:4000/login', { email:email, senha:senha });
           
            if (response.status >= 200 && response.status < 300) {
            
                localStorage.setItem({"ongId":response.data._id})
                navigate('/perfil');
            } else {
                
                setError('Email ou senha incorretos. Por favor, tente novamente.');
            }
        } catch (error) {
            setError('Erro ao fazer login. Por favor, tente novamente.');
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
                        <label>Senha:</label> {/* Adaptei para usar senha */}
                        <input
                            type='password'
                            placeholder='Digite sua senha aqui'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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
