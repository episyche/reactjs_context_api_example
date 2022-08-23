import { Message_data } from "../context/context";
import { useContext } from "react";

export default function Second(){
    const { message } = useContext(Message_data);

    return(
        <>
        <h1 className="mx-16 text-xl my-12">{message}</h1>
        </>
    )
}

