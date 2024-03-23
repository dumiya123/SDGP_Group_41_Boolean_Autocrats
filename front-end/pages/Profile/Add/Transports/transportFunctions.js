const ipAddress = "192.168.1.3";

export const addTransport = async (formData) => {
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/addTransport`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalPrice: formData.amount,
        transportDescription: formData.name,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      return {
        success: false,
        error: "Failed to submit data. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error while calling addTransport:", error);
    return {
      success: false,
      error: "An error occurred while submitting data. Please try again later.",
    };
  }
};
