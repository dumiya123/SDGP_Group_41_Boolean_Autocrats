export const handleBudgetUpdate = async (receiptDetails) => {
  try {
    const response = await fetch(`http://192.168.1.10:8080/user/updateBudget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: receiptDetails,
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Update successful");
    } else {
      console.error("Update failed:", data.message);
    }
  } catch (error) {
    console.error("Error during updating budget:", error);
  }
};
