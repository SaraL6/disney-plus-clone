import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const apiKey = process.env.REACT_APP_TMDB_API_KEY;



const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
        style={{
            ...style, display: "block", color: "white"
            ,
            transitionDuration: "300ms"
        }}
    >
        <ArrowBackIosIcon />
    </button >
);
const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
        style={{ ...style, display: "block", color: "white" }}

    >
        <ArrowForwardIosIcon />
    </button>
);

export const sliderSettings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    lazyLoad: true,
    autoplay: false,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />



}