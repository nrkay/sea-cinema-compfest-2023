import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../Redux/Action/MovieAction";
import { seatMovieAction } from "../Redux/Action/seatMovieAction";
import nothing from "../Assets/nothing.png"

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

    // menampilkan ui
    if (ticketBooked.length === 0) {
        return (
            <div className="ticket bg-gray-800 min-h-screen h-fit grid justify-items-center content-center">
                <div className="">
                    <h1 className="text-white font-bold text-2xl">Not Found</h1>
                    <img className="mt-3 w-14 h-14 ml-10" src={nothing} alt="" />
                </div>
            </div>
        )

    } else {
        return (
            <>
                <div className="ticket bg-gray-800 min-h-screen h-fit pt-3">

                    {ticketBooked.map((item, index) => {
                        return (
                            <div className="card-bookedMovie bg-gray-700 py-6 mx-3 mb-3 rounded-md grid grid-cols-2 lg:mx-auto lg:w-1/2">
                                <div className="img-card">
                                    <div className="relative w-36 h-36 mx-auto">
                                        <img className="absolute w-full h-full mx-auto rounded-md" src={item.poster} alt="" />
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3 className="font-bold text-gray-300 text-center text-sm md:text-lg">{item.name}</h3>
                                    <h3 className="text-gray-200 text-center text-sm md:text-lg mt-2">{item.relase_date}</h3>
                                    <p className="text-center font-bold text-white text-sm md:text-lg">Seat :</p>
                                    <div className="flex mt-2">
                                        {item.seat.filter(item => item === false).map((item, index) => {
                                            return (
                                                <p className="text-center text-gray-200 mr-1 text-sm md:text-lg p-1 border-2 border-white">{index + 1}</p>
                                            )
                                        })}
                                    </div>



                                    {/* <p className="text-center font-bold text-white text-sm md:text-lg">Seat :</p>
                                    {item.seat.filter(item => item === false).map((item, index) => {
                                        return (
                                            <p className="text-center text-gray-200 mr-1 text-sm md:text-lg">{index + 1}</p>
                                        )
                                    })} */}


                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }


}

export default TicketPage;