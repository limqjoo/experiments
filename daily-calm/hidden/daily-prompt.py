# read the time
# dispense a prompt relevant to the time of the day

import random
import datetime

prompts = {
    "start_of_day":[
        "What am I grateful for today?",
        "How do I want to feel today?",
        "What is one goal I have for the day?",
        "What are my top priorities for today?",
        "What is one thing I can do to make today amazing?"
        ],
    "mid_day": [

    ],
    "end_of_day": [

    ]
}

def dispense_prompt(time_now):
    # this prints a journalling prompt based on the time given
    print(time_now)
    # print(random.choice(prompts[]))

# user acts when ready for prompt
response = ''
while (response.upper == "" | "N" ):
    print("Get ready your journal. Ready for your prompt? (Y/N)")
    response = input()
    if response.upper == 'Y':
        # get time now & dispense prompt relevant to time
        dispense_prompt(datetime.datetime.now())
        break

