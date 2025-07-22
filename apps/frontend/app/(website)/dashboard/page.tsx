import React from "react";
import CreateNewSection from "../_components/CreateNewSection";
import QuizzesSection from "../_components/QuizzesSection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Dashboard = () => {
  return (
    <div>
      <Dialog>
        <CreateNewSection />
        <QuizzesSection />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add sources</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
