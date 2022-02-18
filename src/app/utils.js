import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const apiKey = process.env.REACT_APP_TMDB_API_KEY;





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "white" }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </div>
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "white" }}
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </div>
    );
}

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
    nextArrow: <SampleNextArrow className="slick-arrows" />,
    // prevArrow: (
    //     <button className="arrow-button">

    //         <SamplePrevArrow className="slick-arrows" />
    //     </button>

    // )
}