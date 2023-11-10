import React from "react";

const Card = ({ name, btnText = "visit me" }) => {
  // console.log(props);
  return (
    <div>
      <div className="w-[300px] rounded-md border">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h2>{name}</h2>
          <h1 className="text-lg font-semibold">About Macbook</h1>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// Props Passing Foundation & Now Old Way To Pass Props

// const Card = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <div className="w-[300px] rounded-md border">
//         <img
//           src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
//           alt="Laptop"
//           className="h-[200px] w-full rounded-md object-cover"
//         />
//         <div className="p-4">
//           <h1 className="text-lg font-semibold">About Macbook</h1>
//           <p className="mt-3 text-sm text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
//             debitis?
//           </p>
//           <button
//             type="button"
//             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Read
//           </button>
//           <div>
//             <h1>Props</h1>
//             <p>{props.myStr}</p>
//             <p>{props.myNum}</p>
//             <p>{props.myBool}</p>
//             <p>{props.myObj.username}</p>
//             <p>{props.mySrr[0].age}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;