import { currentUser, redirectToSignIn, RedirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { Award } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn;
  }

  const profile = await db.profile;

};
