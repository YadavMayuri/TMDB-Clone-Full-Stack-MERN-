import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";
import MovieList from "./sliderMovies/MovieList";

const Home = () => {
    return (
        <>
            <HeroSection />
            <SliderSection title="Trending">
                <MovieList/>
            </SliderSection>

        </>
    )
}

export default Home;