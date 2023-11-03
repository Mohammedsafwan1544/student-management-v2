import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  userEmail: String,
  userPassword: String,
  userDepartment: String,
});

const User = mongoose.model('User', userSchema);

export default User;
