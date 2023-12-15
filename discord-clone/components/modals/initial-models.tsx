"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

const fromSchema = z.object({
    name: z.string().min(1,{
        message:"Server Name is Required"
    }),
    imageUrl: z.string().min(1,{
        message: "Server Image is Required"
    })
})


export const InitialModal = () => {
    const form = useForm({
        defaultValues:{
            name:"",
            imageUrl:"",
        }
    });

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