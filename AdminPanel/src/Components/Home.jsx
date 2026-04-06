import { BsFillBellFill, BsArchiveFill, BsPeopleFill, BsGrid3X3GapFill } from 'react-icons/bs';

function Home() {
    return (
        <div className="main_container m-4">
            <div className="main_title font-bold text-xl p-2">
                <h3>Dashboard</h3>
            </div>

            <div className="main_cards grid grid-flow-col gap-5 text-lg font-medium ">
                <div className="card shadow-md p-4 bg-blue-600 rounded-xl">
                    <div className="inner_card ">
                        <h3>Products</h3>
                        <BsGrid3X3GapFill className="icon" />
                    </div>
                    <h1 className='items-center'>100</h1>
                </div>

                <div className="card shadow-md bg-red-600 rounded-xl p-4 ">
                    <div className="inner_card">
                        <h3>Categories</h3>
                        <BsArchiveFill className="icon" />
                    </div>
                    <h1>12</h1>
                </div>

                <div className="card shadow-md bg-orange-600 rounded-xl p-4 ">
                    <div className="inner_card">
                        <h3>Customers</h3>
                        <BsPeopleFill className="icon" />
                    </div>
                    <h1>35</h1>
                </div>

                <div className="card shadow-md bg-yellow-600 rounded-xl p-4 ">
                    <div className="inner_card">
                        <h3>Alerts</h3>
                        <BsFillBellFill className="icon" />
                    </div>
                    <h1>10</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;