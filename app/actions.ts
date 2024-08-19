import { IGenUser } from "@/json-server-db/types";

// FROM SESSION LIKE PROCESS WE GET THE CURRENT USER ID TO BE 1
const currentUserId: IGenUser["id"] = 1;

export async function getcurrentUser() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_USERS_ENDPOINT}`
  );

  if (!res.ok) throw new Error("Failed to fetch users");

  const users: IGenUser[] = await res.json();

  const currentUser = users.find(
    (user: IGenUser) => user.id === JSON.stringify(currentUserId)
  );
  if (!currentUser) throw new Error("Failed to find current user");

  return currentUser;
}
