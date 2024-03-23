
const ipAddress = "192.168.8.126";


export const handleConfirmVegetables = async (item, quantity) => {
  try {
    const endpoint = "addVeg";
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vegName: item.name,
        price: item.price,
        imgSrc: item.image,
        quantity: parseInt(quantity), // Convert quantity to integer
        unitPrice: parseFloat(item.price.replace(/\D/g, "")) / 100, // Assuming unit price is stored as rupees (convert to decimal)
      }),
    });

    const data = await response.json();
    console.log(`Response from ${endpoint} endpoint:`, data);
    return data;
  } catch (error) {
    console.error(`Error adding product to vegetables:`, error);
    throw error;
  }
};

export const handleConfirmFish = async (item, quantity) => {
  try {
    const endpoint = "addFish";
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fishName: item.name,
        price: item.price,
        imgSrc: item.image,
        quantity: parseInt(quantity),
        unitPrice: parseFloat(item.price.replace(/\D/g, "")) / 100,
      }),
    });

    const data = await response.json();
    console.log(`Response from ${endpoint} endpoint:`, data);
    return data;
  } catch (error) {
    console.error(`Error adding product to fish:`, error);
    throw error;
  }
};
export const handleConfirmBeverages = async (item, quantity) => {
  try {
    const endpoint = "addBeverages";
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        beverageName: item.name,
        price: item.price,
        imgSrc: item.image,
        quantity: parseInt(quantity),
        unitPrice: parseFloat(item.price.replace(/\D/g, "")) / 100,
      }),
    });

    const data = await response.json();
    console.log(`Response from ${endpoint} endpoint:`, data);
    return data;
  } catch (error) {
    console.error(`Error adding product to beverages:`, error);
    throw error;
  }
};
export const handleConfirmFrozenFood = async (item, quantity) => {
  try {
    const endpoint = "addFrozenFood";
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: item.name,
        price: item.price,
        imgSrc: item.image,
        quantity: parseInt(quantity),
        unitPrice: parseFloat(item.price.replace(/\D/g, "")) / 100,
      }),
    });

    const data = await response.json();
    console.log(`Response from ${endpoint} endpoint:`, data);
    return data;
  } catch (error) {
    console.error(`Error adding product to frozen food:`, error);
    throw error;
  }
};

export const handleConfirmMeat = async (item, quantity) => {
  try {
    const endpoint = "addMeat";
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meatName: item.name, // Ensure correct property name
        price: item.price,
        imgSrc: item.image,
        quantity: parseInt(quantity),
        unitPrice: parseFloat(item.price.replace(/\D/g, "")) / 100,
      }),
    });

    const data = await response.json();
    console.log(`Response from ${endpoint} endpoint:`, data);
    return data;
  } catch (error) {
    console.error(`Error adding product to meat:`, error);
    throw error;
  }
};

// ExplorerFunctions.js

export const fetchExplorer = async (category) => {
  console.log("Fetching data for category:", category);
  try {
    const response = await fetch(
      `http://${ipAddress}:8080/user/filterCategory`,
      {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
        }),
      }
    );

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
