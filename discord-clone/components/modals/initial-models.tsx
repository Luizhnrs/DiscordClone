"use client";

import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

export const InitialModal = () => {
    return(
        <Dialog open>
            <DialogContent className="bg-White text-black p-0 
            overflow-hidden">
                <DialogHeader>
                    Customize Your Server
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}