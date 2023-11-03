import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohammedsafwan1544:safwan1544@cluster0.i46iqu1.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
