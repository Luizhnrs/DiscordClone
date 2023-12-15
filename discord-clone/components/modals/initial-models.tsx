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
            <DialogContent className="bg-white text-black p-0 
            overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                  <DialogTitle className="text-2xl text-center font-bold">
                    Customize Your Server
                  </DialogTitle>
                  <DialogDescription className="text-center text-zinc-500">
                    Leave your server with your face, with a name, an image, remembering that you can change this later
                  </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}