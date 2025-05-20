const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB ulanishi
const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/avto-salon?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB ga ulanish muvaffaqiyatli!'))
  .catch(err => console.error('Xatolik:', err));

// Avtomobil modeli
const carSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  year: Number,
  motor: String,
  range: String,
  image: String,
  available: Boolean
});

const Car = mongoose.model('Car', carSchema);

// Avtomobillarni olish uchun API
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server ${port}-portda ishga tushdi!`);
});
app.use(express.static('public'));