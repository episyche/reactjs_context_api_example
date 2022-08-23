import { Message_data } from "../context/context";
import { useContext } from "react";

export default function Home() {

  const { setMessage } = useContext(Message_data);

  function sendData() {
    var data = document.getElementById("context_id").value;
    setMessage(data);
  }

  return (
    <>
      <section>
        <div className="py-8 px-16">
          <h1 className="text-xl text-gray-600 my-4">
            Enter your content to pass another component
          </h1>
          <input
            type="text"
            id="context_id"
            className="border rounded border-gray-600 py-1 w-96"
          ></input>
          <div>
            <button
                onClick={() => sendData()}
              className="w-fit border bg-green-600 text-white py-1 px-4 rounded font-bold my-4 hover:bg-green-700
                cursor-pointer"
            >
              send
            </button>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
