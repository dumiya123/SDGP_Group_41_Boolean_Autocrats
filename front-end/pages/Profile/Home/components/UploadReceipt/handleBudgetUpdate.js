const ipAddress = "192.168.1.6"; // Variable for IP address

export const handleBudgetUpdate = async (receiptDetails) => {
  console.log("efe", receiptDetails);
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/updateBudget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receiptDetails),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.error("Update failed:", data.message);
    }
  } catch (error) {
    console.error("Error during updating budget:", error);
  }
};
