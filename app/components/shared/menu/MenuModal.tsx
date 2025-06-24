// components/shared/MenuModal.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MenuModalProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  name: string;
  details: string;
};

export default function MenuModal({
  open,
  onOpenChange,
  name,
  details,
}: MenuModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{details}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
