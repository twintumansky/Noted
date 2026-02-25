import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
    const [editor, setEditor] = useState();

    return (
        <CanvasContext.Provider value={{editor, setEditor}}>
            {children}
        </CanvasContext.Provider>
    )
};

export const useCanvas = () => useContext(CanvasContext);

CanvasProvider.propTypes = {
    children: PropTypes.node,
};