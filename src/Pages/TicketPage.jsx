import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../Redux/Action/MovieAction";
import { seatMovieAction } from "../Redux/Action/seatMovieAction";

function TicketPage() {
    const dispatch = useDispatch()
    const { seat, seatUpdate } = useSelector(state => state.seatMovie)
    console.log("cek ecek nya", seatUpdate)

    // filter element mana yg ada pada array seatUpdate memiliki seat berelement false
    var ticketBooked = seatUpdate.filter(item => item.seat.some(seat => seat === false))
    console.log("bismillah", ticketBooked)
    useEffect(() => {
        dispatch(seatMovieAction())
    }, [])

    return (
        <>
            <div className="ticket bg-gray-800 min-h-screen h-fit pt-3">
                {ticketBooked.map((item, index) => {
                    return (
                        <div className="card-bookedMovie bg-gray-700 py-6 mx-3 mb-3 rounded-md grid grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:w-1/2">
                            <div className="img-card">
                                <div className="relative w-36 h-36 mx-auto">
                                    <img className="absolute w-full h-full mx-auto rounded-md" src={item.poster} alt="" />
                                </div>
                            </div>
                            <div className="desc">
                                <div className="flex">
                                    <h3 className="mr-3 font-bold text-gray-300">Title : </h3>
                                    <h3 className="text-gray-200">{item.name}</h3>
                                </div>
                                <div className="flex">
                                    <h3 className="mr-3 font-bold text-white">Date : </h3>
                                    <h3 className="text-gray-200">{item.relase_date}</h3>
                                </div>
                                <div className="flex">
                                    <p className="mr-2 font-bold text-white">Seat :</p>
                                    {item.seat.filter(item => item === false).map((item, index) => {
                                        return (
                                            <p className="text-gray-200 mr-1">{index + 1}, </p>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default TicketPage;