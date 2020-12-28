import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/prime-gaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose;
