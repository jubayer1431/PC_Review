import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import ReviewRoutes from "../ReviewRoutes/ReviewRoutes";

const HomeRoutes = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div
          className={
            "flex justify-between items-center container w-full mt-32 bg-slate-800 text-gray-100"
          }
      >
        <div className="w-full space-y-8">
          <h1 className={"text-7xl font-semibold tracking-wider"}>
            Your Next PC
            <span className={"mt-4 block text-orange-600"}>Your Best PC</span>
          </h1>
          <p className={"w-5/6 text-2xl tracking-wide"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            assumenda aut eveniet ex fugit id numquam quas, tempore unde! Nisi
            sunt vel veniam vero? Adipisci aliquid aspernatur at blanditiis et
          </p>
          <button
              className={"p-4 bg-orange-500 rounded text-white text-2xl"}
              onClick={() => navigate("/")}
          >
            Live Demo
          </button>
        </div>
        <div className=" w-full">
          <img
              className={"w-full"}
              src={require("./../../img/banner.jpg")}
              alt="Banner"
          />
        </div>
      </div>

      <div className={'flex items-center justify-center flex-col mt-32 mb-8 w-full'}>
        <h2 className={'text-3xl'}>Reviews (3)</h2>
        <ReviewRoutes>
         3
        </ReviewRoutes>
        <button onClick={()=>navigate('/reviews')} className={'px-6 py-3 bg-red-600 rounded text-2xl'}>See All Reviews</button>

      </div>


    </Fragment>
  );
};

export default HomeRoutes;
