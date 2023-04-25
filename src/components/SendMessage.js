import { AiFillFolderAdd, AiOutlineSend } from "react-icons/ai"

const SendMessage = () => {
    return (
        <div className=" flex ">

            {/* Add file */}
            <div className="">
                <AiFillFolderAdd w={50} />
            </div>
            {/* Type message */}
            <div>
                <textarea className=" resize-none rounded-md bg-bgColor border border-greenText" name="" id="" cols="50" rows=""></textarea>
            </div>
            {/* Send message */}
            <div>
<AiOutlineSend />
            </div>
        </div>
    );
}

export default SendMessage;