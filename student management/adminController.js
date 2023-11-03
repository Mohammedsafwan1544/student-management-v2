import User from '../models/user';
import Task from '../models/task';

const adminController = {
  addUser: async (req, res) => {
    const { fullName, email, password, department } = req.body;
    const user = new User({ fullName, userEmail: email, userPassword: password, userDepartment: department });

    try {
      await user.save();
      res.json({ message: 'User added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding the user' });
    }
  },

  assignTask: async (req, res) => {
    const { userEmail, taskDescription, dueTime } = req.body;
    const newTask = new Task({ userEmail, taskDescription, dueTime, taskStatus: 'pending' });

    try {
      await newTask.save();
      res.json({ message: 'Task assigned successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error assigning the task' });
    }
  },
};

export default adminController;
