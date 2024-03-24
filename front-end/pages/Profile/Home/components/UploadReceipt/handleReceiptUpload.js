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

    if (items) {
      // Call ChatGPT to categorize items
      const itemCategories = await Promise.all(
        items.map(async (item) => {
          const prompt = `Categorize "${
            item.description
          }" into one of the following categories: ${categories.join(
            ", "
          )} only give the category as response. do not give any other response. if no category matches return "other", there might be some spelling mistakes in the items, for example carrot can be carpot, guess the most suitable name`;
          console.log("ff", prompt);
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
            max_tokens: 64,
            n: 1,
            temperature: 0.7,
          });
          console.log(response.choices[0].message.content);
          return response.choices[0].message.content.trim();
        })
      );
      return {
        items: items.map((item, index) => ({
          ...item,
          category: itemCategories[index],
        })),
      };
    }
  } catch (error) {
    throw error;
  }
}

export default handleReceiptUpload;
