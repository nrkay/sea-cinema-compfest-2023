import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../Redux/Action/MovieAction";
function Landing() {
    // useSlector digunakan untuk mengambil state dari redux Store, yaitu store movie
    const { movie, isLoading } = useSelector(state => state.movie);
    // mengecek data dari redux
    console.log("ini dari redux", movie)

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    useEffect(() => {

        dispatch(getMovie())

    }, []);

    console.log(search);

    return (
        <>
            <div className="landing min-h-screen h-fit bg-gray-900">
                <div className="lg:mx-14 mx-5 pt-6">
                    <div className="">
                        <div className="form-searc grid grid-cols-4 lg:grid-cols-3 ">
                            <div class="relative z-0 w-full mb-6 group col-span-3 lg:col-span-1">
                                <input
                                    type="text"
                                    name="floating_password"
                                    id="floating_password"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder="search here... "
                                    required
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center lg:justify-start lg:pl-4">
                                <Link to={`/ticket`}>
                                    <img
                                        className="h-1/2"
                                        src="https://img.icons8.com/fluency/48/starred-ticket.png"
                                        alt="starred-ticket"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
                        {movie
                            .filter((item) => {
                                return search.toLowerCase() === ""
                                    ? item
                                    : item.title.toLowerCase().includes(search);
                            })
                            .map((data, index) => {
                                return (
                                    <>
                                        <Link to={`/movie/${index}`}>
                                            <div
                                                className="bg-gray-800 h-56 mt-4 rounded-md hover:scale-110 hover:bg-gray-700"
                                                key={index}
                                            >
                                                <div className="img-card h-1/2 rounded-t-md">
                                                    <img
                                                        className="max-h-full object-cover w-full rounded-t-md"
                                                        src={data.poster_url}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="desc-card p-2 ">
                                                    <div className="h-14">
                                                        <p className="text-xs lg:text-base font-bold text-white">
                                                            {data.title}
                                                        </p>
                                                    </div>

                                                    <p className="text-xs lg:text-sm font-semibold text-red-400">
                                                        Rp. {data.ticket_price}
                                                    </p>
                                                    <p className="text-xs lg:text-sm font-light text-blue-300">
                                                        Detail more
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                );
                            })}

                        {/* <div className="bg-red-300">p</div>
                        <div className="bg-red-300">p</div>
                        <div className="bg-red-300">p</div>
                        <div className="bg-red-300">p</div>
                        <div className="bg-red-300">p</div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
