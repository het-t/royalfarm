import CategoryCardList from "../components/CategoryCardList";
import Footer from "../components/Footer";
import HeroVideoContainer from "../components/HeroVideoContainter";
import MissionSection from "../components/MissionSection";
import TopHeader from "../components/TopHeader";

export default function MainContainer() {
    return <>
        <TopHeader />

        <HeroVideoContainer />

        <CategoryCardList />
        
        <MissionSection />

        <div className="pad-md">
            <Footer />
        </div>
    </>
}