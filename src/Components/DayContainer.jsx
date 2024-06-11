import Conditions from "./Conditions";
import Time from "./Time";
import Day from "./Day";
import App from "../App";

function DayContainer (props) {
    return (
        <div className="dayContainer">
            <Time time={weatherForecasts[0].time} />
            <Day />
            <Conditions />
        </div>
    )
}