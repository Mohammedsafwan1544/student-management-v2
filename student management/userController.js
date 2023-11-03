import Task from '../models/task';

const userController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ userEmail: req.userEmail });
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving tasks' });
    }
  },

  markTaskDone: async (req, res) => {
    const taskId = req.params.taskId;

    try {
      const updatedTask = await Task.findByIdAndUpdate(taskId, { taskStatus: 'completed' }, { new: true });
      if (updatedTask) {
        res.json({ message: 'Task marked as done' });
      } else {
        res.status(404).json({ message: 'Task not found or already completed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error marking the task as done' });
    }
  },
};

export default userController;

