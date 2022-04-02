# Pre-work - *Light and Sound Memory Game*

**Light and Sound Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aditya Majumdar**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/tourmaline-cosmic-plant)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Winning the game with mistakes](http://g.recordit.co/sLln2BgR7j.gif)
![Losing the game](http://g.recordit.co/eb9HtHzyOf.gif)
![going over-time](http://g.recordit.co/Z0IiKSVmhf.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[My biggest resource that I utilized was using the slack channel provided to ask for help and attend the office hours that the TA's provided. Other resources include W3Schools,Stackoverflow, and GeeksForGeeks.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[
The most difficult problem I faced was the implementation of the countdown timer with the help of setInterval and clearInterval. I first read all the explanations provided by the W3Schools and then watched youtube videos on how to use those functions properly to understand their implementation. Then, I wrote a pseudo-code with the help of the flowchart technique (like the one provided in prework)  and tested my logic. But when I tested my timer, I noticed that the remainingTime, after the game ended did not stop and still continued to negative values. I was confused since I thought I had correctly implemented the clearInterval() method. Hence I thought that it must be a bug and started to debug my code with the help of the console.log. After 20 minutes of debugging, I was still not able to rectify the error.  I then rechecked my flowcharts and traced back my steps to see if I was missing something. This is when I realised that my resetTimer() function was not reinitializing the value of the remamingTime interval since I was doing that in the playSequence() function as I thought if the person goes overtime, the sequence would restart and thus that is where I should restart my timer. Therefore, I implemented the coode in the resetTimer() function, which helped me solve the error. 
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[This was my first time coding in javascript and css, hence overall it was a new experience for me to see the amalgamation of three languages (HTML, Javascript, and CSS) forming a functioning website. I was really intrigued by the sound functionality usage in the project as I have never implemented sound in any of my programs. I would love to learn about how to include songs rather than single tones for the sound effect. Another thought I had was that what happens to websites as technology advances? Is the code being entirely rewritten, or is it being repurposed in any way? I also wondered how web developers collaborate on large scale applications since they must consist of thousands of lines, so if something goes wrong, which is inevitable, how do they debug their code? Along with that, do web developers use the same design techinque for desktops, phones,etc? These were some of the questions I had after completing my submission.  
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[These are the following implementations that I would've liked to added if I could spend some more hours for this prework:
1)Add tunes instead of singular tones for the sound effect
2)Change the graphics of the game and try to make the game design look like the original light and sound simon toy
3)I would like to add a feature which would let the user select the level of difficulty they wanted to play at, hard being less time to select the correct choice with a large number of buttons. 
4)I would like a video to pop up or confetti to come on screen when the user successfully completes the level. 
5)I would have written in depth comments so that it would have been more easier for the people to understand the logic of my code since in the industry collaboration skills are highly valued. ] 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://psu.mediaspace.kaltura.com/media/Aditya+Majumdar%27s+Personal+Meeting+Room/1_42mw9k4e)


## License

    Copyright Aditya Majumdar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
