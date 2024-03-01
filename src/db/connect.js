
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://render_harshit:harshit9660@cluster0.sbirrhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
socketTimeoutMS: 45000 
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});

