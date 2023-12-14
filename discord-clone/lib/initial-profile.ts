import { currentUser, redirectToSignIn, RedirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { Award } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { use } from "react";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
};
