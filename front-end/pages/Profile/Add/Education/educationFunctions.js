import { format } from "path";

const ipAddress = "192.168.8.126";

export const addEducation = async (formData) => {
  console.log("formData", formData.amount, formData.name);
  console.log(formData);
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/addEducation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        totalPrice: formData.amount,
        educationDescription: formData.name,
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
    console.error("Error while calling addEducation:", error);
    return {
      success: false,
      error: "An error occurred while submitting data. Please try again later.",
    };
  }
};
