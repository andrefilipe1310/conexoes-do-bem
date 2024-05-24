import React, { useState } from 'react';
import './LoginCard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Buscar o usuário pelo email na API
            const response = await axios.get(`http://localhost:4000/ongs/email/${email}`);
            
            if (response.data.error) {
                setError('Email ou senha incorretos. Por favor, tente novamente.');
                return;
            }

            // Verificar se a senha está correta
            const user = response.data;
            if (user.senha !== senha) {
                setError('Email ou senha incorretos. Por favor, tente novamente.');
                return;
            }

            // Se tudo estiver correto, redirecionar para a página de perfil
            
            localStorage.setItem('userId', response.data._id);
            navigate('/perfil');
        } catch (error) {
            console.log(error.message)
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
                        <label>Senha:</label>
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
