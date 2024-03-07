async function handleReceiptUpload(imageUri) {
  const url = "https://ocr.asprise.com/api/v1/receipt";

  const formData = new FormData();
  formData.append("api_key", "TEST");
  formData.append("recognizer", "auto");
  formData.append("ref_no", "oct_python_123");
  formData.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "receipt.jpg",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const responseJson = await response.json();

    const items = responseJson.receipts[0].items;
    const merchantName = responseJson.receipts[0].merchant_name;
    const subTotal = responseJson.receipts[0].subtotal;
    const tax = responseJson.receipts[0].tax;
    const total = responseJson.receipts[0].total;

    return {
      items,
      merchantName,
      subTotal,
      tax,
      total,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = handleReceiptUpload;
