export default function HeroVideoContainer() {
    return (
        <div className="mar-sm"
            style={{ overflow: "hidden" }}
        >
            <video 
                className="rounded-md "
                width="100%"
                loop
                autoPlay
                muted    
            >
                <source src="main-hero-video.mp4" 
                    type="video/mp4"
                ></source>
            </video>
        </div>
    )
}