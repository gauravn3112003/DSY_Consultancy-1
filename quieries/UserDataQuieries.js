import baseUrl from "directsecondyearadmission/baseUrl";

export async function getUserData(id) {
  const res = await fetch(baseUrl + "/api/User/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userData = await res.json();
  if (userData.error) {
    return {
      notFound: true,
    };
  }

  return userData;
}




