import { ref, get } from "firebase/database";

import { database } from "../configs/firebase";

async function getFirebaseData(path: string) {
  const refData = ref(database, path);
  const data = await get(refData);
  return data.val();
}

export default getFirebaseData;
