import {useDispatch, useSelector} from "react-redux";
import { changeFilter } from "../store/filters/reducer";
import {Paper} from "@mui/material";
import {styled} from "@mui/material";
import FilterButton from "./FilterButton";
import {FILTER_ALL, FILTER_DONE, FILTER_TODO} from "../constants/filters";

const PaperContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function Filters(){
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    function changeFilterClick(filter){
        dispatch(changeFilter(filter));
    }

    return(
        <PaperContainer>
            <FilterButton
                changeFilter={changeFilterClick}
                filter={filter}
                filterName={FILTER_ALL}
            >
                All
            </FilterButton>
            <FilterButton
                changeFilter={changeFilterClick}
                filter={filter}
                filterName={FILTER_DONE}
            >
                Done
            </FilterButton>
            <FilterButton
                changeFilter={changeFilterClick}
                filter={filter}
                filterName={FILTER_TODO}
            >
                Todo
            </FilterButton>
        </PaperContainer>
    )

}