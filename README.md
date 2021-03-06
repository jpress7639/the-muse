# Project Overview

## The Muse

https://jpress7639.github.io/the-muse/

## What is The Muse?

The Muse is a brainstorming app for all artists to find more inspiration to continue creating new work. This will be done in three phases. When started, the user first will be present with a prompt. This prompt will be of their choosing (it would be either a series of pictures and/or a quote provided depending on the user's choosing) After a a timed session to write a stream of consciousness, the user will then log whichever words or phrases interest them into an unordered list for their own record. The user will then be challenged to try to start creating a new work (whether it's a song, painting, drawing, poem, prose, etc.).

## API and Data Sample

For the purposes of this project

```JSON 
{
    "total": 1259631,
    "totalHits": 500,
    "hits": [
        {
            "id": 5255326,
            "pageURL": "https://pixabay.com/photos/landscape-fantasy-sky-clouds-5255326/",
            "type": "photo",
            "tags": "landscape, fantasy, sky",
            "previewURL": "https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_150.jpg",
            "previewWidth": 150,
            "previewHeight": 100,
            "webformatURL": "https://pixabay.com/get/53e2d0464950aa14f1dc846096293177103fd7e5534c704c7c2e7dd09f4fc458_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 427,
            "largeImageURL": "https://pixabay.com/get/53e2d0464950aa14f6da8c7dda7936781c3adeec53516c4870267ad29345c759b8_1280.jpg",
            "imageWidth": 7087,
            "imageHeight": 4724,
            "imageSize": 3912235,
            "views": 20169,
            "downloads": 16766,
            "favorites": 61,
            "likes": 130,
            "comments": 83,
            "user_id": 3764790,
            "user": "enriquelopezgarre",
            "userImageURL": "https://cdn.pixabay.com/user/2020/06/03/11-05-03-625_250x250.jpg"
        }
```

## Wireframes

https://wireframe.cc/pDz2Pf

### MVP/PostMVP

#### MVP 


- Find and use external api (Pixabay currently)
- Have a prompt appear at random when the user begins to use the app
- Allow a clock countdown for the user to begin their prompt
- When the clock hits zero, have the user begin to annotate their stream of consciousness and be able to log it into the unordered list 
- And have another open prompt for the writer to begin writing their own work for their next piece song, poem, book, etc.

#### PostMVP  


- Add second API (quotes or prompt) to offer differentiation in the prompts
- I do want to make a star design in the background to make them shoot as the user progresses through the exercise
- To be able to save whatever the final result is from this type of writing sequence.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Project Prompt | Complete
|June 9| Finishing Layout Structure, Wireframe, and Beginning HTML/CSS| Complete
|June 10| Continuing Core Application Structure (HTML, CSS, etc.) and start beginning JS | Complete
|June 11| Continue JS Work / Be Able to Render Data from API | Complete
|June 12| MVP should be complete | Complete
|June 13-14 | Polish App and implement Post-MVP if time allows | Complete
|June 15| Present the Project | Complete

## Priority Matrix

https://res.cloudinary.com/dkhiieq9p/image/upload/v1591712396/Screen_Shot_2020-06-09_at_10.19.19_AM_qgjpzt.png

## Timeframes

This will track my estimation on how much time I will be spending on. I think this how long each aspect of this app will take as it is a fairly simple design. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API / Rendering Data | H | 6 hrs | 3 hrs | 4 hrs |
| Other JS Work (Click Functions, Words List, and Ending Prose) | H | 7 hrs | 6 hrs | 5 hrs|
| CSS Design and Animation | M | 8 hrs | 5 hrs | 5 hrs|
| HTML Structure | L | 2 hrs | 45min | 30 min |
| Phone Media Query | M | 2 hrs | 1 hr | 1 hr |
| Post-MVP Work | L | 6 hrs | 3 hrs | 3 hrs |
| Total | H | 31 hrs | 18 hrs | 17.5 hrs |

## Code Snippet

```
function saveProse(e) {
    e.preventDefault()
    let prose = finalInput.value
    if (prose !== "") {
        navigator.clipboard.writeText(prose)
        .then(() => {
          alert('Text copied to clipboard');
        })
        .catch(err => {
          // In case the clipboard API Provides an Error or they can't copy for some reason
          console.error('Could not copy text: ', err);
        });
    } else {
        alert("It's always better to get the text out. Who knows? Maybe you'll find some treasure")
    }
}
```

## Change Log
  
- (6/8) Constructed first readMe for the Project Proposal
- (6/9) Project Approved and Began Basic HTML and CSS Structuring, Set Up API Data Rendering 
- (6/10) Worked on other JS functionality (Countdown Clock and List Making)
- (6/11) Finished MVP, Began advanced CSS Design and implemented Post-MVP
- (6/12) Completed Post MVP work and began touching up loose details
- (6/13-6/14) Monitored Code for Any Glitches or Bugs in Use of App
- (6/15) Deployed Project and Ready for Presentation