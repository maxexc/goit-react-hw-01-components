import PropTypes from 'prop-types'
import { BsAlarm } from "react-icons/bs";
import { HiOutlineChartPie, HiOutlineChartBar } from "react-icons/hi";

export const Recipe = ({ recipe: { name, time, servings, calories, image } }) => { 
    // const { name, time, servings, calories} = recipe
    return <div style={{ borderBottom: "1px solid black" }}>
        <img src={image}
            alt={name}
            width="320"
        />
        <h2>{name}</h2>        
        <div className="menu">
            <div><BsAlarm size="20"/>{time} min</div>
            <div><HiOutlineChartPie size="20"/>{servings} servings</div>
            <div><HiOutlineChartBar size="20"/>{calories} calories</div>
        </div>        
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

Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired
}

// Recipe.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     servings: PropTypes.number.isRequired,
//     calories: PropTypes.number.isRequired,
//   }),
// };