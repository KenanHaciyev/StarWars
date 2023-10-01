export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Error is occurred", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Error is occurred", error.message);
    return false;
  }
};
