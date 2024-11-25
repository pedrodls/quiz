// components/Modal.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Play } from "./Play";
import { PlayDialogProps } from "./types";

export const PlayDialog = ({
  isOpen,
  onClose,
  mode,
  topic,
}: PlayDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>
      <DialogContent className=" max-h-[80vh] overflow-auto p-6 bg-white rounded-lg shadow-lg">
        <Play mode={mode} topic={topic} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
