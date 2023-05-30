import express from 'express';
import bodyParser from 'body-parser';
import { OpenAIService } from './open-ai.js'
import { config } from 'dotenv';
import { Data } from './data.js';

config({ path: '.env'});

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/image', async (req, res) => {
    const openAI  = new OpenAIService();
    const images = await openAI.getPosibleImages('pizza');
    res.send(images);
})

// Obtener todas las recetas
app.get('/recipes', (req, res) => {
    // Todo la funcionalidad
    // res.send('Hello GET!');
    const recipes = Data.readFile();
    res.json(recipes);
});

// Para crear una receta
app.post('/recipes', async (req, res) => {
    if(!req.body || !req.body.ingredients){
        res.status(400).json({ error: true, message: 'No hay ingredientes.' });
        return;
    }

    const { ingredients } = req.body;
    const openAI = new OpenAIService();
    const recipe = await openAI.getRecipe(ingredients);
    res.json({...recipe});
    
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log(`Todo bien`);
})