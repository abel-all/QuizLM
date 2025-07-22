import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";

const CreateNewSection = () => {
  return (
    <div className="w-full flex justify-end">
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <Plus /> Create new
        </Button>
      </DialogTrigger>
    </div>
  );
};

export default CreateNewSection;
