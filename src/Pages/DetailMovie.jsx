import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seatMovieAction, editSeatBookedMovie } from "../Redux/Action/seatMovieAction";

function DetailMovie() {
    const { id } = useParams();
    const { seat, seatUpdate } = useSelector(state => state.seatMovie)
    const dispatch = useDispatch();
    const [seatSelected, setSeatSelected] = useState([]);
    const [messageTransaction, setMessageTransaction] = useState("");
    console.log("ini seat", seat)

    useEffect(() => {
        dispatch(seatMovieAction())
    }, [])

    const handleSelected = (data) => {
        if (seatSelected.includes(data)) {
            setSeatSelected(seatSelected.filter((item) => item !== data))

        } else {
            setSeatSelected([...seatSelected, data])
        }
    }

    const handleBooked = () => {
        // mengecek transaksi tidak boleh lebih dari 6 bangku
        if (seatSelected.length === 0) {
            setMessageTransaction("Tidak ada bangku yang dipilih")
        } else if (seatSelected.length > 6) {
            setMessageTransaction("Pembelian tidak boleh lebih dari 6")
        } else {
            // membuat array baru bernama editSeat yg berisi seat.seat
            const [editSeat] = seat.filter((item) => item.id == id).map((item) => item.seat)

            // membuat array baru bernama updateSeat yg berisi editSeat yg sudah di booked dengan cara mem-false element yg sudah di booked
            const updateSeat = editSeat.map((data, index) =>
                seatSelected.includes(index + 1) ? false : data
            )

            // membuat array baru yang akan diisi sama update array seat
            var newSeat = [];
            if (seatUpdate.length === 0) {
                newSeat = [].concat(seat)
                for (var index = 0; index < newSeat.length; index++) {
                    if (index == id) {
                        newSeat[index].seat = updateSeat
                    }

                }
                // mengirimkannya ke redux
                dispatch(editSeatBookedMovie(newSeat))
                setMessageTransaction("Pembelian Berhasil")
                setSeatSelected([])
            } else {
                // mencari element mana dalam array newSeat, kemudian di looping untuk
                // mengganti element newSeat.seat
                newSeat = [].concat(seatUpdate)
                for (var index = 0; index < newSeat.length; index++) {
                    if (index == id) {
                        newSeat[index].seat = updateSeat
                    }

                }
                // mengirimkannya ke redux
                dispatch(editSeatBookedMovie(newSeat))
                setMessageTransaction("Pembelian Berhasil")
                setSeatSelected([])

                console.log("ini newS", newSeat)

            }
        }



    }


    console.log("ini seat selected nya", seatSelected)

    // menampilakn ui
    if (seatUpdate.length === 0) {
        return (
            <>
                <div className="bg-gray-900 grid content-center py-14">
                    {seat
                        .filter((element, index) => index == id)
                        .map((data) => {
                            return (
                                <>
                                    <div className="w-4/5 lg:w-3/5 py-5 lg:my-0 bg-gray-800 mx-auto lg:flex">
                                        <div className="lg:w-1/3 flex items-center lg:px-5 ">
                                            <img src={data.poster} alt="" />
                                        </div>
                                        <div className="lg:w-2/3">
                                            {/* section desc movie */}
                                            <div className="movie-desc lg:p-5">
                                                <table className="text-sm font-normal text-white text-left">
                                                    <tr>
                                                        <th className="w-2/5 ">Title : </th>
                                                        <th className="w-3/5 font-light">{data.name}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Release Date :</th>
                                                        <th className="font-light">{data.relase_date}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Minimum Age :</th>
                                                        <th className="font-light">{data.age_rating}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Description :</th>
                                                        <th className="font-light">{data.description}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Ticket Price :</th>
                                                        <th className="font-light">
                                                            Rp. {data.ticke_price}
                                                        </th>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div className="grid gap-1 grid-cols-4 lg:grid-cols-8 lg:p-5">
                                                {data.seat.map((data, index) => {
                                                    return (
                                                        <>

                                                            <button
                                                                className={`bg-gray-600 p-2 hover:bg-gray-500 ${!data ? "unavailable" : seatSelected.includes(index + 1) ? "selected" : ""}`}
                                                                onClick={() => handleSelected(index + 1)}
                                                            >
                                                                {index + 1}
                                                            </button>
                                                        </>
                                                    );
                                                })}
                                            </div>

                                            <div className="grid justify-items-center">
                                                <h6 className="pb-2 text-red-400 text-sm">{messageTransaction}</h6>
                                                <button
                                                    className={`bg-red-950 text-white p-3 rounded-md hover:bg-red-700`}
                                                    onClick={handleBooked}
                                                >
                                                    Book Ticket
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="bg-gray-900 grid content-center py-14">
                    {seatUpdate
                        .filter((element, index) => index == id)
                        .map((data) => {
                            return (
                                <>
                                    <div className="w-4/5 lg:w-3/5 py-5 lg:my-0 bg-gray-800 mx-auto lg:flex">
                                        <div className="lg:w-1/3 flex items-center lg:px-5 ">
                                            <img src={data.poster} alt="" />
                                        </div>
                                        <div className="lg:w-2/3">
                                            {/* section desc movie */}
                                            <div className="movie-desc lg:p-5">
                                                <table className="text-sm font-normal text-white text-left">
                                                    <tr>
                                                        <th className="w-2/5 ">Title : </th>
                                                        <th className="w-3/5 font-light">{data.name}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Release Date :</th>
                                                        <th className="font-light">{data.relase_date}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Minimum Age :</th>
                                                        <th className="font-light">{data.age_rating}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Description :</th>
                                                        <th className="font-light">{data.description}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Ticket Price :</th>
                                                        <th className="font-light">
                                                            Rp. {data.ticke_price}
                                                        </th>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div className="grid gap-1 grid-cols-4 lg:grid-cols-8 lg:p-5">
                                                {data.seat.map((data, index) => {
                                                    return (
                                                        <>

                                                            <button
                                                                className={`bg-gray-600 p-2 hover:bg-gray-500 ${!data ? "unavailable" : seatSelected.includes(index + 1) ? "selected" : ""}`}
                                                                onClick={() => handleSelected(index + 1)}
                                                            >
                                                                {index + 1}
                                                            </button>
                                                        </>
                                                    );
                                                })}
                                            </div>

                                            <div className="grid justify-items-center">
                                                <h6 className="pb-2 text-red-400 text-sm">{messageTransaction}</h6>
                                                <button
                                                    className={`bg-red-950 text-white p-3 rounded-md hover:bg-red-700`}
                                                    onClick={handleBooked}
                                                >
                                                    Book Ticket
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </>
        );
    }

}

export default DetailMovie;

