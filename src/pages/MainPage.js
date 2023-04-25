import Friends from "../components/Friends";
import Message from "../components/Message";

const MainPage = () => {
    return (
        <>
            <div className=" flex flex-row">
                <div className=" basis-1/3">
                    <Friends />
                </div>
                <div className=" basis-2/3">
                    <Message />
                </div>
            </div>
        </>
    );
}

export default MainPage;