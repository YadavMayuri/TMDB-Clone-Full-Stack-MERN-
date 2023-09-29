import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";
import MovieList from "./sliderMovies/MovieList";
import NowPlayingList from "./sliderMovies/NowPlayingList";

const Home = () => {
    return (
        <>
            <HeroSection />
            <SliderSection title="Trending">
                <MovieList />
            </SliderSection>
            <SliderSection title="Now Playing">
                <NowPlayingList />
            </SliderSection>

        </>
    )
}

export default Home;