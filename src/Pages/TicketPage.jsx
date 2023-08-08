import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../Redux/Action/MovieAction";
import { seatMovieAction } from "../Redux/Action/seatMovieAction";

function TicketPage() {
    const dispatch = useDispatch()
    const { seat } = useSelector(state => state.seatMovie)
    console.log("ini isi x", seat)
    useEffect(() => {
        dispatch(seatMovieAction())
    }, [])

    return (
        <>
            <h1>test</h1>
        </>
    );
}

export default TicketPage;