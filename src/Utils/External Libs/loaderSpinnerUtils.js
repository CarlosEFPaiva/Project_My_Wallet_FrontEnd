import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingDots() {
    const color = "#FFFFFF";
    return (
        <Loader
            type="ThreeDots"
            color= {color}
            height={40}
            width={80}
        />
    );
}

export {
    LoadingDots,
}