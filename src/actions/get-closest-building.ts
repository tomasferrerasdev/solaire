const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function getClosestBuilding(location: any, apiKey = API_KEY) {
  const args = {
    "location.latitude": location.lat,
    "location.longitude": location.lng,
  };
  console.log("GET buildingInsights\n", args);

  const params = new URLSearchParams({
    ...args,
    key: `${apiKey}`,
  });
  return fetch(
    `https://solar.googleapis.com/v1/buildingInsights:findClosest?${params}`
  ).then(async (response) => {
    const content = await response.json();
    if (response.status != 200) {
      console.error("findClosestBuilding\n", content);
      throw content;
    }
    console.log("buildingInsightsResponse", content);
    return content;
  });
}
