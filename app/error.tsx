"use client";

// import * as React from "react";
// import { NextPageContext } from "next";

// interface ErrorProps {
//   statusCode: number;
// }

// const Error = ({ statusCode }: ErrorProps) => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-md text-center">
//         <h1 className="text-4xl font-bold mb-4">Oops!</h1>
//         <p className="text-lg mb-4">
//           {statusCode
//             ? `An error ${statusCode} occurred on server`
//             : "An error occurred on client"}
//         </p>
//         <a href="/" className="text-blue-500 hover:underline">
//           Go back home
//         </a>
//       </div>
//     </div>
//   );
// };

// Error.getInitialProps = ({ res, err }: NextPageContext) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

// export default Error;
