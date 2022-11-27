import { Recipe } from "./Recipe";
import recipes from '../recipes.json'


export const App = () => {
  return (
    <div>
      <Recipe recipe={recipes[0]} />
      <Recipe recipe={recipes[1]} />
      <Recipe recipe={recipes[2]} />
      <Recipe recipe={recipes[3]} />
    </div>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template Hi! ))
//     </div>
//   );
// };
