const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors'); 


const app = express();
const port = 3000;
const uri = 'mongodb+srv://user:user@clustermanuvis.f2jtfxw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterManuvis';
const dbName = 'conexoes-do-bem';
const userCollectionName = 'user';

app.use(bodyParser.json());
app.use(cors());

// Rota para visualizar todos os usuários
app.get('/api/users', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(userCollectionName);
        const user = await collection.find({user}).toArray();
        res.json(user);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.close();
    }
});

// Endpoint para cadastrar um usuário
app.post('/api/cadastro', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(userCollectionName);

        const { nomeDaOng , cnpj, email, nomeDeResponsavel , senha} = req.body;

        // Verifica se o usuário já existe pelo e-mail
        const existingUser = await collection.findOne({ cnpj });
        if (existingUser) {
            return res.status(400).json({ error: 'E-mail já cadastrado' });
        }

        // Insere o novo usuário
        const result = await collection.insertOne({ nomeDaOng , cnpj, email, nomeDeResponsavel });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', userId: result.insertedId });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.close();
    }
});

// Login
app.post('/api/login', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
        }

        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(userCollectionName);

        const user = await collection.findOne({ email });

        if (!user || user.senha !== senha) {
            return res.status(401).json({ error: 'E-mail ou senha incorretos' });
        }

        res.status(200).json({ message: 'Login bem-sucedido',});
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
