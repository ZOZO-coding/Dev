import React, {createContext, Component} from "react";

// create a context
export const ThemeContext = createContext();

// create a class component with states which will be shared between components
class ThemeContextProvider extends Component {
    // we are going to share these state data to different components
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
     }
     
     // define a function to toggle the theme, pass that to the value property in the below jsx component, therefore, we can use that function inside the toggle component.
     toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
     }

    render() { 
        // create the context jsx tag
        return (
            // use the provider to wrap the components we want to share data with
            // use this.props.children to place the components which wrapped by the provide in app.js
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;