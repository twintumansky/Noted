// import { useContext } from "react";
import TypingAnimation from "../components/animations/TypingAnimation";
// import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
// import "../App.css";


function Intro() {
    //   const { darkMode } = useContext(ThemeContext);
    const mainText = "noted...";
    const subText = [
        "< A TRULY MINIMAL NOTE TAKING APP >",
        "< CAPTURE YOUR THOUGHTS >",
        "< ORGANIZE YOUR IDEAS >",
    ];
    const navigate = useNavigate();


    const handleArrowClick = (e) => {
        e.preventDefault();
        navigate('/main');
    };

    return (
        <>
            <div className="h-dvh w-dvw flex flex-column items-center justify-center text-center relative bg-[#dbdcd5] text-[#0c0c0c] overflow-x-hidden">
                <div className="inline-block">
                    <h1 className="text-[4rem] font-mono overflow-y-hidden tracking-tighter">
                        <TypingAnimation
                            text={[mainText]}
                            loop={1}
                            typeSpeed={160}
                            deleteSpeed={0}
                            delaySpeed={5000}
                        />
                    </h1>
                    <p className="text-[1.1rem] min-h-[2rem]  visible mt-[0.5rem]">
                        <TypingAnimation
                            text={subText}
                            loop={Infinity}
                            typeSpeed={100}
                            delaySpeed={1000}
                        />
                    </p>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 overflow-y-hidden">
                    <Link
                        className="inline-block text-[2rem] text-[#0c0c0c] cursor-pointer animate-bounce no-underline"
                        to="/main"
                        onClick={handleArrowClick}
                    >
                        &#x25BE;
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Intro;
