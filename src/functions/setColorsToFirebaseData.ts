import { ref, set } from "firebase/database";

import { database } from "../configs/firebase";
import type { ColorsProps } from "../types/colors";

export async function setColorsToFirebaseData({
  userId,
  cube,
  cone,
  dodecahedron,
}: ColorsProps) {
  await set(ref(database, "userColors/" + userId), {
    cube,
    cone,
    dodecahedron,
  });
}
