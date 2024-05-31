import express from 'express';
import { MongoClient,ObjectId } from 'mongodb';
import cors from 'cors'
const app = express();
app.use(cors())
const port = 4000;

// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// URI de conexão com o MongoDB
const uri = "mongodb+srv://conexoesDoBem:123456789a@conexoesdobem0.397m7ut.mongodb.net/?retryWrites=true&w=majority&appName=ConexoesDoBem0";

// Função para conectar ao MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Conectar ao MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Retornar a instância do cliente MongoDB para uso posterior
    return client;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

// Rota para criar uma ONG
app.post('/ongs', async (req, res) => {
  try {
    const client = await connectToMongoDB();
    const database = client.db();
    const ongsCollection = database.collection('ongs');

    // Extrair dados do corpo da requisição
    const { nomeOng, nomeResponsavel, email, cnpj, senha } = req.body;

    // Inserir nova ONG na coleção de ONGs
    const result = await ongsCollection.insertOne({ nomeOng, nomeResponsavel, email, cnpj, senha });
    if (!result.acknowledged) {
      throw new Error("Failed to insert new NGO");
    }
    
    // Enviar resposta com a nova ONG criada
    res.status(201).json({ message: "ONG created successfully", ong:{ id:result.insertedId, nomeOng,nomeResponsavel,email,cnpj}});
  } catch (err) {
    // Lidar com erros
    console.error("Error creating NGO:", err);
    res.status(500).json({ error: "Error creating NGO" });
  }
});
app.post('/login/', async (req, res) => {
  try {
    const client = await connectToMongoDB();
    const database = client.db();
    const ongsCollection = database.collection('ongs');

    // Extrair o ID da ONG da URL da requisição
   
    const {email, senha} = req.body
    // Convertendo a string do ID para um objeto ObjectId
   console.log(req.body)
    
    // Buscar a ONG pelo ID na coleção de ONGs
    
    const ong = await ongsCollection.findOne({email:email,senha:senha})
    console.log(ong)
    if (!ong) {
      return res.status(404).json({ error: "NGO not found" });
    }
    
    // Enviar resposta com a ONG encontrada
    res.status(200).json(ong);
  } catch (err) {
    // Lidar com erros
    console.error("Error retrieving NGO:", err);
    res.status(500).json({ error: "Error retrieving NGO" });
  }
});
app.get('/ongs/:id', async (req, res) => {
  try {
    const client = await connectToMongoDB();
    const database = client.db();
    const ongsCollection = database.collection('ongs');

    // Extrair o ID da ONG da URL da requisição
    const ongId = req.params.id;

    // Convertendo a string do ID para um objeto ObjectId
    const objectId = new ObjectId(ongId);

    // Buscar a ONG pelo ID na coleção de ONGs
    const ong = await ongsCollection.findOne({ _id: objectId });

    if (!ong) {
      return res.status(404).json({ error: "NGO not found" });
    }

    // Enviar resposta com a ONG encontrada
    res.status(200).json(ong);
  } catch (err) {
    // Lidar com erros
    console.error("Error retrieving NGO:", err);
    res.status(500).json({ error: "Error retrieving NGO" });
  }
});

app.put('/ongs/:id', async (req, res) => {
  try {
    const client = await connectToMongoDB();
    const database = client.db();
    const ongsCollection = database.collection('ongs');

    // Extrair o ID da ONG da URL da requisição
    const ongId = req.params.id;

    // Extrair os campos que podem ser atualizados do corpo da requisição
    const { nomeOng, nomeResponsavel, email, cnpj, senha } = req.body;

    // Criar um objeto com os campos a serem atualizados
    const updatedFields = {};
    if (nomeOng) updatedFields.nomeOng = nomeOng;
    if (nomeResponsavel) updatedFields.nomeResponsavel = nomeResponsavel;
    if (email) updatedFields.email = email;
    if (cnpj) updatedFields.cnpj = cnpj;
    if (senha) updatedFields.senha = senha;

    // Verificar se existem campos para atualizar
    if (Object.keys(updatedFields).length === 0) {
      return res.status(400).json({ error: "No fields to update" });
    }

    // Atualizar a ONG no banco de dados
    const result = await ongsCollection.updateOne(
      { _id: new ObjectId(ongId) },
      { $set: updatedFields }
    );

    // Verificar se a atualização foi bem-sucedida
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "ONG not found" });
    }

    // Enviar resposta com a ONG atualizada
    res.status(200).json({ message: "ONG updated successfully" });
  } catch (err) {
    // Lidar com erros
    console.error("Error updating NGO:", err);
    res.status(500).json({ error: "Error updating NGO" });
  }
});

// Rota para deletar uma ONG por ID
app.delete('/ongs/:id', async (req, res) => {
  try {
    const client = await connectToMongoDB();
    const database = client.db();
    const ongsCollection = database.collection('ongs');

    // Extrair o ID da ONG da URL da requisição
    const ongId = req.params.id;

    // Deletar a ONG do banco de dados
    const result = await ongsCollection.deleteOne({ _id: new ObjectId(ongId) });

    // Verificar se a ONG foi encontrada e deletada com sucesso
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "ONG not found" });
    }

    // Enviar resposta indicando que a ONG foi deletada com sucesso
    res.status(200).json({ message: "ONG deleted successfully" });
  } catch (err) {
    // Lidar com erros
    console.error("Error deleting NGO:", err);
    res.status(500).json({ error: "Error deleting NGO" });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
