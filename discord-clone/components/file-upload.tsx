"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css"
import { error } from "console";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}


export const FileUpload = ({
    onChange,
    value,
    endpoint 
}: FileUploadProps) => {
    const filetype = value?.split(".").pop();
    if(value && filetype !== "pdf") {
        return(
            <div className="relative h-20 w-20">
                <image
                fill
                src={value}
                alt="Upload"
                className="rounded-full"
                />
            </div>
        )
    }

    return (
       <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res)=> {
            onChange(res?.[0].url);
        }}
        onUploadError={(error: Error)=> {
            console.log(error);
        }}
       />
    )
}