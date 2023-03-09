import React, { useState } from "react";
import { Button, Typography, styled } from "@mui/material";

function App() {
    const [count, setCount] = useState(0);
    
    const Incbutton=styled(Button)`
        margin-right:10px;
    `
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px",backgroundColor:"peru" }}>
            <Typography variant="h3">Click Counter</Typography>
            <Typography variant="h5">Count: {count}</Typography>
            <Incbutton variant="contained" color="primary" onClick={handleIncrement}>
                Increment
            </Incbutton>
            <Button variant="contained" color="secondary" onClick={handleDecrement}>
                Decrement
            </Button>
        </div>
    );
}

export default App;

