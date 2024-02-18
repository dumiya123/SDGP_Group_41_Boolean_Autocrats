import requests
import json

url = "https://ocr.asprise.com/api/v1/receipt"
image_path = "D:\SDGP Implementation\SDGP_Group_41_Boolean_Autocrats\\back-end\OCR-Feature\\10.jpg"

res = requests.post(url,
                    data={
                        'api_key': 'TEST',
                        'recognizer': 'auto',
                        'ref_no': 'oct_python_123'
                    },
                    files ={
                        'file':open(image_path,'rb')
                    })

with open("response1.json","w") as f:
    json.dump(json.loads(res.text), f)