import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../Redux/Action/MovieAction";
import { seatMovieAction } from "../Redux/Action/seatMovieAction";
// function DetailMovie() {
//     const dispatch = useDispatch();
//     const { movie } = useSelector(state => state.movie)
//     const { selectMovie } = useSelector(state => state.selectMovie)
//     const { id } = useParams();
//     const nilaiId = parseInt(id);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [movieTitle, setMovieTitle] = useState("");
//     const [seatMovie, setSeatMovie] = useState(Array(64).fill(true));
//     const [allSelectedMovie, setAllSelectedMovie] = useState([]);
//     const [transactionError, setTransactionError] = useState("");
//     useEffect(() => {
//         dispatch(getMovie)
//         nameMovie()
//     }, []);
// const handleSelected = (seatNumber) => {
//     if (selectedSeats.includes(seatNumber)) {
//         setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//     } else {
//         setSelectedSeats([...selectedSeats, seatNumber]);
//     }

// };

//     const nameMovie = () => {
//         const title = movie.filter((item, index) => index === nilaiId).map((item) => item.title)
//         setMovieTitle(title[0])
//     }
//     const handleBooked = () => {
//         if (selectedSeats < 1) {
//             setTransactionError("Tidak ada bangku yang dipilih");
//         } else if (selectedSeats.length > 6) {
//             setTransactionError("Maksimal Pemesanan 6 bangku");
//         } else {
//             const updateSeat = seatMovie.map((data, index) =>
//                 selectedSeats.includes(index + 1) ? false : data
//             );
//             // untuk mencari seat mana yg sudah dipilih agar dikirim ke redux
//             const selectedBookedMovie = seatMovie.map((data, index) =>
//                 selectedSeats.includes(index + 1) ? data : false
//             )
//             // setmovieBooked(selectedBookedMovie)
//             setSeatMovie(updateSeat);
//             // membuat array baru yg berisi semua bangku yg sudah di booked
//             const x = [...allSelectedMovie, ...selectedSeats]
//             const y = x.map((data) => {
//                 return {
//                     nomor: data,
//                     title: movieTitle,
//                     movieId: nilaiId,
//                 }
//             })
//             // membuat state baru yang akan dikirmkan ke dalam redux
//             setAllSelectedMovie(y)
//             // Mengirimkan data ke redux
//             dispatch(selectMovieAction(allSelectedMovie))
//             setSelectedSeats([]);
//             setTransactionError("Transaksi Berhasil");

//         }
//     };



//     return (
// <>
//     <div className="bg-gray-900 grid content-center py-14">
//         {movie
//             .filter((element, index) => index === nilaiId)
//             .map((data) => {
//                 return (
//                     <>
//                         <div className="w-4/5 lg:w-3/5 py-5 lg:my-0 bg-gray-800 mx-auto lg:flex">
//                             <div className="lg:w-1/3 flex items-center lg:px-5 ">
//                                 <img src={data.poster_url} alt="" />
//                             </div>
//                             <div className="lg:w-2/3">
//                                 {/* section desc movie */}
//                                 <div className="movie-desc lg:p-5">
//                                     <table className="text-sm font-normal text-white text-left">
//                                         <tr>
//                                             <th className="w-2/5 ">Title : </th>
//                                             <th className="w-3/5 font-light">{data.title}</th>
//                                         </tr>
//                                         <tr>
//                                             <th>Release Date :</th>
//                                             <th className="font-light">{data.release_date}</th>
//                                         </tr>
//                                         <tr>
//                                             <th>Minimum Age :</th>
//                                             <th className="font-light">{data.age_rating}</th>
//                                         </tr>
//                                         <tr>
//                                             <th>Description :</th>
//                                             <th className="font-light">{data.description}</th>
//                                         </tr>
//                                         <tr>
//                                             <th>Ticket Price :</th>
//                                             <th className="font-light">
//                                                 Rp. {data.ticket_price}
//                                             </th>
//                                         </tr>
//                                     </table>
//                                 </div>

//                                 {/* section seats movie */}
//                                 <div className="grid gap-1 grid-cols-4 lg:grid-cols-8 lg:p-5">
//                                     {seatMovie.map((data, index) => {
//                                         return (
//                                             <>

//                                                 <button
//                                                     className={`bg-gray-600 p-2 hover:bg-gray-500 ${!data
//                                                         ? "unavailable"
//                                                         : selectedSeats.includes(index + 1)
//                                                             ? "selected"
//                                                             : ""
//                                                         }`}
//                                                     onClick={() => handleSelected(index + 1)}
//                                                 >
//                                                     {index + 1}
//                                                 </button>
//                                             </>
//                                         );
//                                     })}
//                                 </div>
//                                 <div className="grid justify-items-center">
//                                     <h6 className="pb-2 text-red-400 text-sm">{transactionError}</h6>
//                                     <button
//                                         className={`bg-red-950 text-white p-3 rounded-md hover:bg-red-700`}
//                                         onClick={handleBooked}
//                                     >
//                                         Book Ticket
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 );
//             })}
//     </div>
// </>
//     );
// }

function DetailMovie() {
    const { id } = useParams();
    const { seat } = useSelector(state => state.seatMovie)
    const dispatch = useDispatch();
    const [seatSelected, setSeatSelected] = useState([]);
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
        const [editSeat] = seat.filter((item) => item.id == id).map((item) => item.seat)
        const updateSeat = editSeat.map((data, index) =>
            seatSelected.includes(index + 1) ? false : data
        )

        const bb = seat.filter((item, index) => index == id).map((data) => {
            return {
                ...data,
                seat: updateSeat
            }
        })




        // const array2 = [0, 3];

        // array2.forEach(index => {
        //     if (index >= 0 && index < array1.length) {
        //         array1[index].status = false;
        //     }
        // });

        // console.log(array1);

        // const [editSeat] = seat.filter((item) => item.id == id).map((item) => item.seat)
        // console.log("ini editSeat", editSeat)

        // seatSelected.forEach(index => {
        //     if (index >= 0 && index < editSeat.length) {
        //         editSeat[index].status = true
        //     }
        // });

        // seatSelected.forEach((item, element) => console.log("ini item", item))
        // for (let i = 0; i < editSeat.length; i++) {
        //     seatSelected.forEach((item, index) => {
        //         if (editSeat[i] == item) {
        //             editSeat[i].status = false
        //         }
        //     })
        // }


    }


    console.log("ini seat selected nya", seatSelected)
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
                                                            className={`bg-gray-600 p-2 hover:bg-gray-500 `}
                                                            onClick={() => handleSelected(index + 1)}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    </>
                                                );
                                            })}
                                        </div>

                                        <div className="grid justify-items-center">
                                            <h6 className="pb-2 text-red-400 text-sm">pesan</h6>
                                            <button
                                                className={`bg-red-950 text-white p-3 rounded-md hover:bg-red-700`}
                                                onClick={handleBooked}
                                            >
                                                Book Ticket
                                            </button>
                                        </div>




                                        {/* section seats movie */}
                                        {/* <div className="grid gap-1 grid-cols-4 lg:grid-cols-8 lg:p-5">
                                        {seatMovie.map((data, index) => {
                                            return (
                                                <>

                                                    <button
                                                        className={`bg-gray-600 p-2 hover:bg-gray-500 ${!data
                                                            ? "unavailable"
                                                            : selectedSeats.includes(index + 1)
                                                                ? "selected"
                                                                : ""
                                                            }`}
                                                        onClick={() => handleSelected(index + 1)}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                </>
                                            );
                                        })}
                                    </div>
                                        <div className="grid justify-items-center">
                                        <h6 className="pb-2 text-red-400 text-sm">{transactionError}</h6>
                                        <button
                                            className={`bg-red-950 text-white p-3 rounded-md hover:bg-red-700`}
                                            onClick={handleBooked}
                                        >
                                            Book Ticket
                                        </button>
                                    </div> */}
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </>
    );
}

export default DetailMovie;

