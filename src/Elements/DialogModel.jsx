import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DialogModel = ({ datalog }) => {
  const navigate = useNavigate();

  const title = useRef(null);
  const description = useRef(null);
  const date = useRef(null);

  const handleSavechanges = (e) => {
  e.preventDefault();

  const projectdata = {
    id: crypto.randomUUID(),
    title: title.current?.value?.trim() || "",
    description: description.current?.value?.trim() || "",
    date: date.current?.value || "",
  };

  if (!projectdata.title) {
    toast.error("Title is required");
    return;
  }

  if (!projectdata.description) {
    toast.error("Description is required");
    return;
  }

  if (!projectdata.date) {
    toast.error("Please select a due date");
    return;
  }

  datalog(projectdata);

  toast.success("Project added successfully!");

  setTimeout(() => navigate("/home"), 100);
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Project</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25">
        <form onSubmit={handleSavechanges}>
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>
              Create a new project with title, description, and due date.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 pt-6">
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input ref={title} placeholder="Enter project title" />
            </div>

            <div className="grid gap-2">
              <Label>Description</Label>
              <Input ref={description} placeholder="Enter project description" />
            </div>

            <div className="grid gap-2">
              <Label>Due Date</Label>
              <Input ref={date} type="date" />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
            </DialogClose>

            <Button className='cursor-pointer' type="submit">Save Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModel;
