import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingDots() {
    return (
        <Loader
            type="ThreeDots"
            color= "#FFFFFF"
            height={40}
            width={80}
        />
    );
}

function LoadingSpinner() {
    return (
        <Loader
            type="TailSpin"
            color= "#FFFFFF"
            height={400}
            width={150}
        />
    );

}

export {
    LoadingDots,
    LoadingSpinner,
}