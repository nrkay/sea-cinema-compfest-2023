import img from '../Assets/contoh.jpg'
function Card() {
    return (
        <>

            <div className="max-h-fit max-w-fit flex bg-gray-800 rounded-sm px-3 py-5">
                <div className="card-img">
                    <img className='max-h-32 max-w-xs rounded-lg' src={img} alt="" />
                </div>
                <div className="card-desc">
                    <p>ini judul</p>
                    <p>harga</p>
                </div>
            </div>

        </>
    );
}

export default Card;