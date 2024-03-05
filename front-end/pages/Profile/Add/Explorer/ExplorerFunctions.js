// ExplorerVegetablesFunctions.js

const ipAddress = "192.168.1.17";

const fetchExplorer = async (category) => {
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/filter`, {
      method: "POST", // Specify the request method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchExplorer };
