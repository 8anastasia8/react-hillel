import React from "react";
import {Button} from "@mui/material";

export default function FilterButton({filter, filterName, children, changeFilter}){
return(
    <Button
        onClick={()=>changeFilter(filterName)}
        variant={filter === filterName ? 'contained' : null}
    >
        {children}
    </Button>
)

}