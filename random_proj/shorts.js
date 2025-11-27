const section = document.querySelector("section")

const apiKey = "53431037-f8dde84085bc195e4078aeb06"
fetch(`https://pixabay.com/api/videos/?key=${apiKey}&per_page=10&orientation=vertical`)
.then ( (response) =>{
    return response.json()
})
.then( (data) =>{
    // video.src = "data.videos.video_files[0].link"
    console.log (data.hits)
    let portraitVideos = data.hits.filter((i)=>{
        const vid = i.videos.large
        return vid.height > vid.width
    })
    console.log (portraitVideos)
    renderVideo(portraitVideos);
    setAutoplay();
})
.catch( (err) =>{
    console.error ("There is an error in fetching data" , err)
})  

function renderVideo(video){
    video.forEach( (i , idx) =>{
        
        let  file = i.videos.large.url;
        
        const container = document.createElement("div");
        container.classList.add("container")
        container.innerHTML = `
            <div class="elements">
                    <div class="like-element" id="${idx}">
                        <div class="like btn">
                            <i class="ri-thumb-up-line"></i>
                        </div>
                        <div class="like-number inner">${i.likes}</div>
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
                        <div class="comment-number inner">${i.comments}</div>
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
                        <h3>${i.user}</h3>
                        <button>${(i.views > 1000) ? "Unfollow" : "Follow" }</button>
                    </div>
                    <p>${i.userURL}</p>
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

const container = document.querySelector(".container")
section.addEventListener( "click" , (e)=>{
    console.log (e.target)
})