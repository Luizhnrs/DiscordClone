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
import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        resolver: zodResolver(fromSchema),
        defaultValues:{
            name:"",
            imageUrl:"",
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
        console.log(values)
    }


    return(
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 
            overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                  <DialogTitle className="text-2xl text-center font-bold">
                    Customize Server
                  </DialogTitle>
                  <DialogDescription className="text-center text-zinc-500">
                    Leave your server with your face, with a name, an image, i change this later
                  </DialogDescription>
                </DialogHeader>
                <Form{...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    
                </div>
                </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}