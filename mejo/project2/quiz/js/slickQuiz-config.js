// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "<p>Let's see how well you know PANDA DIPLOMACY now!</p>",
        "results": "<h5>You made it!</h5><p>Hope you enjoyed Learning about PANDA DIPLOMACY.</p>"// no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Do the offspring of the loaned pandas belong to China?",
            "a": [
                {"option": "Yes",      "correct": true},
                {"option": "No",     "correct": false},
                {"option": "I don't know",      "correct": false}
            ],
            "correct": "<p><span>That's right!</span> They need to return to Chian at the age of 3.</p>",
            "incorrect": "<p><span>Uhh no.</span> There's also a curb tax. Look it up in page5.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answers
            "q": "When did the cooperative research agreement start?",
            "a": [
                {"option": "1888",               "correct": false},
                {"option": "1990",   "correct": true},
                {"option": "2000",               "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm.</span> It's either too early or too late.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following zoos have pandas? Select ALL that apply.",
            "a": [
                {"option": "Memphis Zoo",           "correct": true},
                {"option": "Zoo Atlanta",                  "correct": false},
                {"option": "San Diego Zoo",  "correct": true},
                {"option": "Smithsonian National Zoo",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. DOn't forget to visit them!</p>",
            "incorrect": "<p><span>Not Quite.</span> Are you sure there's no more?</p>" // no comma here
        }// no comma here
    ]
};
