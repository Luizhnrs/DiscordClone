"use client";

import { Stringifier } from "postcss";
import { UploadDropzone } from "@/lib/uploadthing";

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
    return (
        <div>
            File Upload Component 
        </div>
    )
}