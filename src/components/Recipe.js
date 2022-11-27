import { BsAlarm, BsBorderBottom } from "react-icons/bs";
import { HiOutlineChartPie, HiOutlineChartBar } from "react-icons/hi";

export const Recipe = ({ recipe: { name, time, servings, calories, image } }) => { 
    // const { name, time, servings, calories} = recipe
    return <div style={{ borderBottom: "1px solid black" }}>
        <img src={image}
            alt={name}
            width="320"
        />
        <h2>{name}</h2>
        <ul>
            <li>
                <div><BsAlarm size="20"/>{time} min</div>
                <div><HiOutlineChartPie size="20"/>{servings} servings</div>
                <div><HiOutlineChartBar size="20"/>{calories} calories</div>
            </li>
        </ul>
        <div>
            <h3>Difficulty</h3>
            <div>
                <span>Easy</span>
                <span>Medium</span>
                <span>Hard</span>
            </div>
        </div>

    </div>
};