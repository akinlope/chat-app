import { users } from "../helpers"

const Friends = () => {
    return (
        <div className=" p-2">
            {/* user info */}
            <div className=" border-b mb-5">
                <p className=" text-redText text-2xl font-bold">TOLU PROFILE</p>
            </div>

            {
                users.map((user) => {
                    return (
                        <>
                            <div className=" flex items-center mb-4">
                                <div className=" w-10 h-10 rounded-full mr-2">
                                    <img className="w-10 h-10 rounded-full" src={user.img} alt="" />
                                </div>
                                <div>
                                    <p className=" text-whiteText text-1xl font-bold cursor-pointer">{user.name}</p>
                                    <div className=" flex items-center">
                                        <div className=" w-2 h-2 rounded-full bg-[#90ee90] mr-1"></div>
                                        <span className=" text-whiteText text-sm">Online</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }



        </div>
    );
}

export default Friends;