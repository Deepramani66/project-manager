import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

function ProjectDetail({ open, onClose, project, projectary, setProjectary, onDeleteProject }) {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Sync tasks when project changes
  useEffect(() => {
    setTasks(project?.tasks || []);
  }, [project]);

  if (!project) return null;

  const updateProjectTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    const updatedProjects = projectary.map((proj) =>
      proj.id === project.id ? { ...proj, tasks: updatedTasks } : proj
    );
    setProjectary(updatedProjects);
  };

  const addTask = () => {
    if (!taskText.trim()) return;
    const newTasks = [
      ...tasks,
      { id: Date.now(), text: taskText.trim(), completed: false },
    ];
    updateProjectTasks(newTasks);
    setTaskText("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    updateProjectTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    updateProjectTasks(updatedTasks);
  };

  const handleDeleteProject = () => {
    if (onDeleteProject) onDeleteProject(project.id);
    onClose();
    toast.success("Project Deleted Successfully");
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="relative w-full sm:max-w-lg p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        
        {/* Header with Title and Delete Button */}
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="text-4xl sm:text-2xl md:text-3xl font-bold text-left">
            {project.title}
          </DialogTitle>

          <Button
            variant="destructive"
            className="text-sm sm:text-base px-2 sm:px-4"
            onClick={handleDeleteProject}
          >
            Delete Project
          </Button>
        </div>

        <DialogDescription className="text-gray-700 dark:text-gray-200 mb-4">
          Add Project Tasks and Manage Them.
        </DialogDescription>

        {/* Add Task */}
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="task" className="text-gray-900 dark:text-gray-100">
              New Task
            </Label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                id="task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter task..."
                className="flex-1"
              />
              <Button className="w-full sm:w-auto" onClick={addTask}>
                Add
              </Button>
            </div>
          </div>

          {/* Task List */}
          {tasks.length > 0 ? (
            <ul className="mt-4 space-y-2 max-h-64 overflow-y-auto border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-2 sm:p-4">
              {tasks.map((task, index) => (
                <li
                  key={task.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 border-b border-gray-200 dark:border-gray-600"
                >
                  <span
                    className={`flex-1 text-gray-900 dark:text-gray-100 ${
                      task.completed ? "line-through text-gray-400 dark:text-gray-400" : ""
                    }`}
                  >
                    {index + 1}. {task.text}
                  </span>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Button size="sm" onClick={() => toggleTask(task.id)}>
                      {task.completed ? "Undo" : "Done"}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 p-4 text-center border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium">
              This Project Does Not Have Any Tasks Yet.
            </div>
          )}
        </div>

        {/* Footer */}
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="secondary" className="w-full sm:w-auto">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetail;
