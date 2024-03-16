const ipAddress = "192.168.1.9";

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

export const handleConfirmMeat = async (item, quantity) => {
  try {
    const endpoint = "addMeat"; // Assuming you have an endpoint for meat
    const response = await fetch(`http://${ipAddress}:8080/user/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meatName: item.name, // Assuming meat specific parameters
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
