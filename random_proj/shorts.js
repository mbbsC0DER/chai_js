const shortsData = [
  {
    username: "Alex_R",
    likeCount: 245,
    isLiked: false,
    commentCount: 32,
    shareCount: 12,
    isFollowed: false,
    caption: "Chasing dreams one step at a time.",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  },
  {
    username: "MiaStories",
    likeCount: 981,
    isLiked: true,
    commentCount: 104,
    shareCount: 55,
    isFollowed: true,
    caption: "A new beginning.",
    video: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4"
  },
  {
    username: "TechBoy",
    likeCount: 152,
    isLiked: false,
    commentCount: 18,
    shareCount: 9,
    isFollowed: false,
    caption: "This gadget blew my mind!",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
  },
  {
    username: "FoodieQueen",
    likeCount: 1290,
    isLiked: true,
    commentCount: 210,
    shareCount: 87,
    isFollowed: true,
    caption: "Trying a new spicy recipe.",
    video: "https://sample-videos.com/video321/mp4/720/big_buck_bunny.mp4"
  },
  {
    username: "TravelWithSam",
    likeCount: 670,
    isLiked: false,
    commentCount: 54,
    shareCount: 30,
    isFollowed: false,
    caption: "Lost in the beauty of nature.",
    video: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
  },
  {
    username: "GameMaster",
    likeCount: 405,
    isLiked: false,
    commentCount: 41,
    shareCount: 25,
    isFollowed: true,
    caption: "Leveling up like a boss.",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
  },
  {
    username: "DanceVibes",
    likeCount: 1124,
    isLiked: true,
    commentCount: 95,
    shareCount: 60,
    isFollowed: true,
    caption: "Feel the beat!",
    video: "https://sample-videos.com/video123/mp4/480/asdasdas2.mp4"
  },
  {
    username: "FashionFi",
    likeCount: 300,
    isLiked: true,
    commentCount: 22,
    shareCount: 17,
    isFollowed: false,
    caption: "Today's look!",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
  }
];
shortsData.forEach( (i) =>{
    // console.log (i)
})

const video = document.querySelector(".video video")
const section = document.querySelector("section")

const apiKey = "53431037-f8dde84085bc195e4078aeb06"
fetch(`https://pixabay.com/api/videos/?key=${apiKey}&per_page=10&orientation=vertical`)
.then ( (response) =>{
    return response.json()
})
.then( (data) =>{
    // video.src = "data.videos.video_files[0].link"
    console.log (data.hits)
    renderVideo(data.hits);
    setAutoplay();
})
.catch( (err) =>{
    console.error ("There is an error in fetching data" , err)
})  

function renderVideo(video){
    video.forEach( (i) =>{
        
        const videoLarge = Object.values(i.videos).filter ( v=>{
            v.height > v.width ;
        })
        let  file  ; 
        if (videoLarge.length > 0){
            videoLarge.sort ( (a,b) => b.height - a.height)
            file = videoLarge[0].url
        }else {
            file = i.videos.large.url;
        }
        
        const container = document.createElement("div");
        container.classList.add("container")
        container.innerHTML = `
            <div class="elements">
                    <div class="like-element">
                        <div class="like btn">
                            <i class="ri-thumb-up-line"></i>
                        </div>
                        <div class="like-number inner">${Math.floor(Math.random() * 2000)}</div>
                    </div>
                    <div class="dislike-element">

                        <div class="dislike btn">
                            <i class="ri-thumb-down-line"></i>
                        </div>
                        <div class="inner">Dislike</div>
                    </div>
                    <div class="comment-element">
                        <div class="comment btn">
                            <i class="ri-message-2-line"></i>
                        </div>
                        <div class="comment-number inner">${Math.floor(Math.random() * 500)}</div>
                    </div>
                    <div class="share-element">
                        <div class="share btn">
                            <i class="ri-share-forward-line"></i>
                        </div>
                        <div class="inner">Share</div>
                    </div>
                    
                    <div class="more btn">
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div> 
                
                <div class="video">
                    <video src=${file} playsinline preload="metadata" muted ></video>
                    <div class="bottom"></div>
                </div>
                <div class="text">
                    <div class="head">
                        <h3>${i.user.name}</h3>
                        <button>Follow</button>
                    </div>
                    <p>this si for example</p>
                </div>
                `

        section.appendChild(container)
    })
}

function setAutoplay(){
    const options = {threshold : 0.7} ;
    
    const observer = new IntersectionObserver( entries =>{
        entries.forEach ( (entry) =>{
            const vid = entry.target.querySelector("video")
            if(entry.isIntersecting){
                vid.play()
                console.log ("played")
            }
            else {
                vid.pause()
            }
        } , options)
    })
    document.querySelectorAll(".container")
        .forEach( (i) => observer.observe(i));
}