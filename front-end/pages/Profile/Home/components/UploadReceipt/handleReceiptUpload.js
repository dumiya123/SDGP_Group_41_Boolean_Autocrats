import { OpenAI } from "openai";

const OPENAI_API_KEY = "";
// Set your OpenAI API key here
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function handleReceiptUpload(imageUri, categories) {
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
    console.log(responseJson);

    const items = responseJson.receipts[0].items;
    const merchantName = responseJson.receipts[0].merchant_name;
    const subTotal = responseJson.receipts[0].subtotal;
    const tax = responseJson.receipts[0].tax;
    const total = responseJson.receipts[0].total;

    if (responseJson) {
      // Call ChatGPT to categorize items
      const itemCategories = await Promise.all(
        items.map(async (item) => {
          const prompt = `Categorize "${
            item.description
          }" into one of the following categories: ${categories.join(", ")}`;
          console.log(prompt);
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: prompt,
              },
            ],
            max_tokens: 64,
            n: 1,
            temperature: 0.7,
          });
          console.log(response);
          return response[0].text.trim();
        })
      );
      return {
        items: items.map((item, index) => ({
          ...item,
          category: itemCategories[index],
        })),
        merchantName,
        subTotal,
        tax,
        total,
      };
    }
  } catch (error) {
    throw error;
  }
}

export default handleReceiptUpload;
