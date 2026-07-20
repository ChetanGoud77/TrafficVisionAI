function LiveVideo(){

return(

<div
style={{

background:"#1E293B",

padding:"20px",

borderRadius:"15px",

marginTop:"30px"

}}
>

<h2
style={{color:"white"}}
>

🎥 Live CCTV Feed

</h2>

<img

src="http://127.0.0.1:8000/video_feed"

alt="Live"

style={{

width:"100%",

borderRadius:"10px"

}}

/>

</div>

)

}

export default LiveVideo;