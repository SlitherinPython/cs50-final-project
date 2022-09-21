# 🧊 Chill 🧊

#### Video Demo: IN PROGRESS
<br> <br>

#### Description: A desktop application made for windows, macOS, and Linux (electron) that reminds users to take a break from staring at their PC screens after a certain amount of time.

Installation instructions: <br>
```
git clone https://github.com/SlitherinPython/cs50-final-project
npm install eslint
```

**To Run:** <br>
`npm start`

Thoughts before I started building the app: 

Making a desktop programme that could operate on several operating systems is my aim for this project. I am really motivated to create a programme that would help computer users with a particular issue. After wasting hours looking for inspiration online, I came to understand the true issue that many of us confront. Control. After a long programming session, we always look up at a clock and realise that we just spent our entire afternoon fixing this bug. Time easily passes while we stare lifelessly at a screen of pixels. I set out to come up with a solution with the intention of solving this issue. How could I create a kind of alert to remind the user to take a break after a certain amount of time while still making it delightful and interesting for them so that they would oblige? My initial thinking was to use the knowledge I gained from CS50 to do this. Simply said, I could create a website that visitors could access. But I felt it was a little too easy and not difficult enough.

I then examined desktop programmes. Spotify, Vscode, and Discord. I use all these apps every day without thinking about them. How can I create these? I was clueless. I began to conduct some research online and learned they were typically built with C++ or C#. I searched the internet for further information because I didn't feel like learning entirely new languages just for CS50's final assignment. And it was at that point when I discovered Electron. It stated that I could develop desktop programmes using html, CSS, and javascript. Woah! I got to work right away.

  
<br>

## **Roadmap**

<hr>

*Day 1: Learning Electron* <br>
I looked through youtube and electron's documentation to slowly learn about the way that electron was used. I didn't really spend a long time learning it though. As soon as I got my first application running, I began to work on my idea.


**Day 2 (App development starts here):**

*Figuring out how I could play audio in Electron* <br>
I wanted my app to feature a timer that would change screens and start playing music when it rang, allowing the user to stretch and look out the window to rest their eyes.
I searched for a dependable music platform where I could play music from and settled on Soundcloud. I intended to create a new, hidden window, put the entire soundcloud website inside of it, and then play music. After loads of url and electron fiddling, I did successfully get it to function. However, the song only started playing after waiting for over six seconds (roughly). 

*Designing the start menu* <br>
After getting a nice looking logo from some logo designing website, I did a little designing in canva. After implementing about 75% of the start menu, I spent quite a bit of time trying to make the start button play a sound effect. AND FAILED. Yeah long story short, I couldn't do it, so I spent another hour using a workaround. (Now it shows an animation while going to the new page and playing the sound effect) 

**Day 3:**

*Added it to a git repository* <br>
After almost breaking everything after switching a few files over to new folders for organisation purposes, I decided to finally put my git skills learned in the git seminar to use. I created a private git repository and pushed all my code.

*Added settings logo to start menu* <br>
Gosh that was way harder than I thought it'd be. There was so many elements with weird margins and paddings that I had to remove. The positioning was not too bad but required a few workarounds.

*Designed the timer html page* <br>
After another two hours of trying to get the positioning right, I've finally finished my structure of my timer page. It consists of a timer and a stop button. I also added some animations as you enter the timer page.

*Added timer functionality* <br>
I remembered there were these things called classes in python, that were able to store multiple values and functions in them. After some research, I decided to use that as the brains behind the timer. I used the set interval function to pause in between seconds. Furthermore, I added functionality for the stop button, which allows users to stop the timer and return to the home screen. I reused my animation code from the start menu button.

**Day 4:**

*Semi-fixed the music problem* <br>
The main reason why the music took so long to load was the rendering time. So I thought if I could prerender it before the timer runs out, it could play without any delay. After some more research, I found out that javascript could click a tags, which just so happened to be the play/pause button of the soundcloud website. So after a bit of coding, I managed to prerender it and pause it (so that I could press play whenever I want to and play the music without delay). However, there was still a delay between the website rendering and my code pausing the music so the user could still hear about 5 seconds of the music playing as my app prerendered the music. My solution would be to mute the window as it prerenders and unmute it after I've paused the music. However, all the functions provided by electron didn't seem to work. 

**Day 5:**

*Music function fixed* <br>
Phew! That was crazy. After a ton of tinkering with the audio function and even the chromium command line, I went back to my original code and because of a small change (me setting the browserwindow object to a global object) it just started working! I have no clue why that happened but yeah I've finally fixed that.

*Fixed an issue where music would still continue playing even after main window is closed* <br>
Because the soundcloud window was hidden, when we closed the main window, electron would still think that it was still active. I added an event listener to when the main window was closed and when the event happened close the soundcloud window as well. 

*Made the music.html file* <br>
I took a wave animation from codepen and added a timer using the setInterval function as before. Then I looped it back to timer.html when it was done, and made timer.html loop back to it when it was done. 

*Added transitions* <br>
I added transitions using the past methods and a new css library. Audio in between transitions is still pending.

**Day 6:**

*Added audio between timer/music transitions* <br>
I looked for a few suitable sound effects online and added the appropriate delays for the music to play properly between transitions.

**Day 7:**

*I added a settings page* <br>
I created a settings logo in the start menu early on in the project and I finally got to working on it. I used a bootstrap and some simple html.

*Added settings functionality (doesn't include using the settings chosen by user yet)* <br>
I used a json file to store the user preferences and linked the renderer file to the main process (which basically means I get to access the file system and therefore allow me to edit config.json with just javascript). Now, I can get the json file in the renderer process and edit the json file in the renderer process. This'll allow me to render the user's previous settings and implement their new settings when they save their changes. 

**Day 8:** 

*Implemented the users settings* <br>
I finally linked everything together by using the settings chosen by the user with the actual applications. I had a problem with asynchronicity that I resolved after a fair bit of looking at stackoverflow. I had one global variable that wouldn't change because the function that changed it was an async function (default in javascript I think) so I used the fix provided.

Post app development thoughts: 
I really had fun developing this program. Although I faced loads of issues, I feel a great sense of accomplishment that I managed to learn and adapt to a new framework on my own without any assistance. I could read the documentation independently and have definitely learnt a lot from this experience. I would like to say thank you to all the cs50 staff and especially David (for being such a great lecturer), curiouskiwi (for helping me so much in my previous assignments), and the whole discord community for being such a welcoming place.

