import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/exper1.png";
import img2 from "../assets/exper2.png";
import img3 from "../assets/exper3.png";
import img4 from "../assets/exper4.png";
import star from "../assets/star.png";
import Button from "./Button";
import icon from "../assets/icon.png";


// const Practric = () => {
//   const arrObj = [
//     {
//       id: 1,
//       name: "Ralph Edwards",
//       position: "Global Marketing Director",
//       review:
//         "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
//       image: img2,
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: " Kristin Watson",
//       position: "  Global Marketing Director",
//       review:
//         "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
//       image: img3,
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Ralph Edwards",
//       position: "Global Marketing Director",
//       review:
//         "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
//       image: img1,
//       rating: 5,
//     },
//     {
//       id: 4,
//       name: "Ralph Edwards",
//       position: "Global Marketing Director",
//       review:
//         "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
//       image: img4,
//       rating: 5,
//     },
//   ];

//   return (
//     <div className=" bg-[#161A2D] text-white bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat  py-25 ">
//       <Container>
//         <SecHead
//           title="Testimonials"
//           heading="What our customers say about their experience"
//           className="w-197.5 mx-auto text-center text-white mb-20"
//           titleCss=" justify-center "
//           bgCss=" bg-white "
//         />

//         <div className="flex gap-4 justify-between  px-4  ">
//           {/* main content  */}
//           <div className=" group duration-200  hover:bg-primary shrink-0  p-10 w-86.5 h-105 rounded-[20px] bg-[#ffffff13] ">
//             <div className=" relative w-full h-10.5 rounded-full ">
//               <div className=" absolute  ">
//                 <img className="w-full h-full" src={img1} alt="" />
//               </div>
//               <div className=" absolute left-8 ">
//                 <img className="w-full h-full" src={img2} alt="" />
//               </div>
//               <div className=" absolute left-16 ">
//                 <img className="w-full h-full" src={img3} alt="" />
//               </div>
//               <div className=" absolute left-24  ">
//                 <img className="w-full h-full" src={img4} alt="" />
//               </div>
//             </div>
//             <p className=" leading-6.25 pt-4.5 pb-24.5 ">
//               Over 15,000+ Attendees{" "}
//               <span className="block">Connected Worldwide</span>
//             </p>
//             <h3 className="text-xl font-bold leading-5.5 mb-10 ">
//               Client Experience Speak For Themselves
//             </h3>
//             <Button btnCss=" duration-200 group-hover:bg-white group-hover:text-black ">
//               View All Reviews
//             </Button>
//           </div>

//           {/* content Arr-Obj */}
        
//               {arrObj.map((items) => (
            
//                 <div className=" group duration-200 hover:bg-primary shrink-0 p-10 w-133.25 h-105  rounded-[20px] bg-[#ffffff13] ">
//                   <div className="flex duration-200  group-hover:bg-[#8ab25cd6] p-1 rounded-[5px] border-b-2 border-transparent group-hover:border-white  gap-2 ">
//                     {[...Array(items.rating)].map((_, index) => (
//                       <img key={index} src={star} alt="" />
//                     ))}
//                   </div>
//                   <p className=" pt-6 pb-17.5 border-b border-[#cfbbbb26] text-lg font-semibold leading-7 ">
//                     {items.review}
//                   </p>
//                   <div className="flex justify-between items-center mt-10 ">
//                     <div className="flex gap-3 items-center">
//                       <img src={items.image} alt="" />
//                       <div>
//                         <h5 className=" font-bold text-xl leading-5.5 ">
//                           {items.name}
//                         </h5>
//                         <p className=" whitespace-nowrap ">{items.position}</p>
//                       </div>
//                     </div>
//                     <div className="group-hover:bg-[#8ab25cd6] p-0.5 rounded-full group-hover:border group-hover:border-white ">
//                       <img src={icon} alt="" />
//                     </div>
//                   </div>
//                 </div>
   
//             ))}
       
          

//         </div>

//         <div className="flex gap-3 mb-6 justify-center mt-6">
//           <button className="prev-btn w-2.5 h-2.5 rounded-full bg-[#ffffff13] text-black"></button>

//           <button className=" w-5 h-2.5 rounded-full bg-primary text-white"></button>
//           <button className="next-btn w-2.5 h-2.5 rounded-full bg-[#ffffff13] text-white"></button>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Practric;


 const Practric = () => {
   const arrObj = [
     {
       id: 1,
       name: "Ralph Edwards",
       position: "Global Marketing Director",
       review: "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
       image: img2,
       rating: 5,
     },
     {
       id: 2,
       name: " Kristin Watson",
       position: "Global Marketing Director",
       review: "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
       image: img3,
       rating: 5,
     },
     {
       id: 3,
       name: "Ralph Edwards",
       position: "Global Marketing Director",
       review: "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
       image: img1,
       rating: 5,
     },
     {
       id: 4,
       name: "Ralph Edwards",
       position: "Global Marketing Director",
       review: "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability. ",
       image: img4,
       rating: 5,
     },
   ];

   return (
     <div className=" bg-[#161A2D] text-white bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat  py-25 ">
       <Container>
         <SecHead
           title="Testimonials"
           heading="What our customers say about their experience"
           className="w-197.5 mx-auto text-center text-white mb-20"
           titleCss=" justify-center "
           bgCss=" bg-white "
         />

         <div className="flex gap-4 justify-between  px-4  ">
           {/* main content  */}
           <div className=" group duration-200  hover:bg-primary shrink-0  p-10 w-86.5 h-105 rounded-[20px] bg-[#ffffff13] ">
             <div className=" relative w-full h-10.5 rounded-full ">
               <div className=" absolute  ">
                 <img className="w-full h-full" src={img1} alt="" />
               </div>
               <div className=" absolute left-8 ">
                 <img className="w-full h-full" src={img2} alt="" />
               </div>
               <div className=" absolute left-16 ">
                 <img className="w-full h-full" src={img3} alt="" />
               </div>
               <div className=" absolute left-24  ">
                 <img className="w-full h-full" src={img4} alt="" />
               </div>
             </div>
             <p className=" leading-6.25 pt-4.5 pb-24.5 ">
               Over 15,000+ Attendees{" "}
               <span className="block">Connected Worldwide</span>
             </p>
             <h3 className="text-xl font-bold leading-5.5 mb-10 ">
               Client Experience Speak For Themselves
             </h3>
             <Button btnCss=" duration-200 group-hover:bg-white group-hover:text-black ">
               View All Reviews
             </Button>
           </div>

           {/* content Arr-Obj */}

           {arrObj.map((items) => (
             <div className=" group duration-200 hover:bg-primary shrink-0 p-10 w-133.25 h-105  rounded-[20px] bg-[#ffffff13] ">
               <div className="flex duration-200  group-hover:bg-[#8ab25cd6] p-1 rounded-[5px] border-b-2 border-transparent group-hover:border-white  gap-2 ">
                 {[...Array(items.rating)].map((_, index) => (
                   <img key={index} src={star} alt="" />
                 ))}
               </div>
               <p className=" pt-6 pb-17.5 border-b border-[#cfbbbb26] text-lg font-semibold leading-7 ">
                 {items.review}
               </p>
               <div className="flex justify-between items-center mt-10 ">
                 <div className="flex gap-3 items-center">
                   <img src={items.image} alt="" />
                   <div>
                     <h5 className=" font-bold text-xl leading-5.5 ">
                       {items.name}
                     </h5>
                     <p className=" whitespace-nowrap ">{items.position}</p>
                   </div>
                 </div>
                 <div className="group-hover:bg-[#8ab25cd6] p-0.5 rounded-full group-hover:border group-hover:border-white ">
                   <img src={icon} alt="" />
                 </div>
               </div>
             </div>
           ))}
         </div>

         <div className="flex gap-3 mb-6 justify-center mt-6">
           <button className="prev-btn w-2.5 h-2.5 rounded-full bg-[#ffffff13] text-black"></button>

           <button className=" w-5 h-2.5 rounded-full bg-primary text-white"></button>
           <button className="next-btn w-2.5 h-2.5 rounded-full bg-[#ffffff13] text-white"></button>
         </div>
       </Container>
     </div>
   );
 };

 export default Practric;
