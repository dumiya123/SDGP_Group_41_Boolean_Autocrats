// ExplorerVegetablesFunctions.js

const ipAddress = "192.168.1.7";

const fetchExplorer = async (category) => {
  console.log("Fetching data for category:", category);
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/filterCategory`, {
      
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

    // Log the raw response data
    const rawResponse = await response.text();
    console.error("Raw Response:", rawResponse);
  
    throw error;
  }
};

export { fetchExplorer };
