import requests
import json
dlrapi_url = ''
sampledata = {'key': 'Random key here',
              'credits': 12345678}

data_json = json.dumps(sampledata)

stuff = requests.post(api_url, data_json)
response = stuff.text
print(response)
