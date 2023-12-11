import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <div className="flex flex-col"> 
      <p className="Text-3xl font-bold text-indigo-500"> 
      This a Discord Clone</p>
      <Button>
        Click On Me
        </Button>
      </div>
  )
}
