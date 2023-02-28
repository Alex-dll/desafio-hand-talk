import { ref, get } from "firebase/database";

import { database } from "~/configs/firebase";
import type { getColorToUserReturn } from "~/types/colors";

type getColorToUser = {
  userId: string;
};

export async function getUserColorsFirebaseData({
  userId,
}: getColorToUser): Promise<getColorToUserReturn> {
  const refData = ref(database, "userColors/" + userId);
  const data = await get(refData);
  return data.val();
}
