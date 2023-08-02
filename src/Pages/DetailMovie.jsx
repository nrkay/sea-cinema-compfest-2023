import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Data/SeatMovie";
function DetailMovie() {
    const { id } = useParams();
    const nilaiId = parseInt(id);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatMovie, setSeatMovie] = useState(Array(64).fill(true))
    const [movieSelect, setMovieSelect] = useState(false);
    const [movieBooking, setMovieBooking] = useState([]);
    const [data, setData] = useState([]);
    const movieNow = data.filter((element, index) => index === nilaiId).map((data) => data.title)
    const movieTitle = movieNow[0];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://seleksi-sea-2023.vercel.app/api/movies');
                setData(response.data);

                // const seats = () => {
                //     const newSeatMovie = [];
                //     for (let i = 1; i <= 64; i++) {
                //         newSeatMovie.push({
                //             movie: "",
                //             number_seat: i,
                //             status: true
                //         });
                //     }
                //     setSeatMovie(newSeatMovie);
                // };

                // seats()
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleBooking = (data, e) => {
        e.preventDefault()
        console.log("ini data yg di booking", movieBooking)
        movieBooking.push(data)
    }

    const handleSelectMovie = (seatNumber, e) => {
        e.preventDefault()
        console.log("ini seat number", seatNumber)
    }




    // function untuk menambahkan bangku di setiap movie
    // const seats = () => {
    //     const newSeatMovie = [];
    //     for (let i = 1; i <= 64; i++) {
    //         newSeatMovie.push({
    //             movie: movieTitle,
    //             number_seat: i
    //         });
    //     }
    //     setSeatMovie(newSeatMovie);
    // };





    // const filterData = () => {

    //     const hasil = data.filter((element, index) => index === nilaiId)
    //     console.log("ini hasil", hasil)
    // }

    return (
        <>
            <div className="bg-gray-900 grid content-center lg:h-screen">
                {data.filter((element, index) => index === nilaiId).map((data) => {
                    return (
                        <>
                            <div className="w-4/5 lg:w-3/5 my-3 lg:my-0 bg-gray-800 mx-auto lg:flex">
                                <div className="lg:w-1/3 bg-red-300">
                                    <img src={data.poster_url} alt="" />
                                </div>
                                <div className="lg:w-2/3">
                                    {/* section desc movie */}
                                    <div className="movie-desc lg:p-5">
                                        <table className="text-sm font-normal text-white text-left">
                                            <tr>
                                                <th className="w-2/5 ">Title : </th>
                                                <th className="w-3/5 font-light">{data.title}</th>
                                            </tr>
                                            <tr>
                                                <th>Release Date :</th>
                                                <th className="font-light">{data.release_date}</th>
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
                                                <th className="font-light">Rp. {data.ticket_price}</th>

                                            </tr>
                                        </table>
                                    </div>

                                    {/* section seats movie */}
                                    <div className="grid gap-1 grid-cols-4 lg:grid-cols-8 lg:p-5">
                                        {seatMovie.map((data, index) => {
                                            return (
                                                <>
                                                    {/* <button key={index} className={`bg-gray-500 hover:bg-gray-950 hover:text-white ${!data.status ? 'unavailable' : selectedSeats.includes(index + 1) ? 'selected' : ''} `} onClick={(e) => handleBooking(data, e)}>{data.number_seat}</button> */}
                                                    <button key={index} className={` ${!data.status ? 'unavailable' : selectedSeats.includes(index + 1) ? 'selected' : ''} `} onClick={(e) => handleSelectMovie(index + 1, e)}>{index + 1}</button>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    );
}

export default DetailMovie;