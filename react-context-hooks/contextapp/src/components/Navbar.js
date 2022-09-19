import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// class Navbar extends Component {
//     // static contextType = ThemeContext;
//     render() {
//     // now if console.log(this.context), will have access to the value property in the ThemeContext component
//       return (
//         // use multiple Consumers
//         <AuthContext>{(authContext) => (
//         // use the consumer to share the states
//           <ThemeContext.Consumer>{(themeContext) => {
//             const { isAuthenticated, toggleAuth } = authContext;
//             const { isLightTheme, light, dark } = themeContext;
//             const theme = isLightTheme ? light : dark;
//             return (
//               <nav style={{ background: theme.ui, color: theme.syntax }}>
//                 <h1>Context App</h1>
//                 <div onClick={() => toggleAuth()}>
//                   { isAuthenticated ? 'Logged in' : 'Logged out' }
//                 </div>
//                 <ul>
//                   <li>Home</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//               </nav>
//             )
//           }}</ThemeContext.Consumer>
//         )}</AuthContext>
//       );
//     }
//   }

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}


export default Navbar;