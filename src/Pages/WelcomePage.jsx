import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserShield } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-[#752A72]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#752A72] bg-opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="./logo.png" className='w-48' alt="" />
          </div>
          <p className="text-xl md:text-2xl text-[#8a3a87] max-w-2xl">
            Une transparence de qualité à grande échelle. Au service de la construction et du design avec du verre brut d'exception.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <Link
            to="/login"
            className="group relative flex items-center justify-center px-8 py-4 bg-[#752A72] text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-[#8a3a87] hover:shadow-lg hover:shadow-[#752A72]/30"
          >
            <span className="relative z-10 flex items-center">
              <FaUserShield className="mr-3" />
              Connexion
              <FaArrowRight className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#8a3a87] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
          </Link>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-[#752A72] opacity-10"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#8a3a87] opacity-10"
        />
      </div>
    </div>
  );
};

export default WelcomePage;

// import { Link } from 'react-router-dom';
// import { FaArrowRight, FaUserShield } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const WelcomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white bg-opacity-10"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               width: Math.random() * 100 + 50,
//               height: Math.random() * 100 + 50,
//             }}
//             animate={{
//               x: [null, Math.random() * window.innerWidth],
//               y: [null, Math.random() * window.innerHeight],
//               transition: {
//                 duration: Math.random() * 20 + 10,
//                 repeat: Infinity,
//                 repeatType: 'reverse',
//               },
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <div className="flex items-center justify-center mb-6">
//             <img src="./loggo.png" className='w-20' alt="" />
//             <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
//               ORIMEX SA
//             </h1>
//           </div>
//           <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
//           Une transparence de qualité à grande échelle. Au service de la construction et du design avec du verre brut d’exception.
//           </p>
//         </motion.div>

//         {/* Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-6 mt-8"
//         >
//           <Link
//             to="/login"
//             className="group relative flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/30"
//           >
//             <span className="relative z-10 flex items-center">
//               <FaUserShield className="mr-3" />
//               Connexion
//               <FaArrowRight className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
//           </Link>
//         </motion.div>

//         {/* Animated decorative elements */}
//         <motion.div
//           animate={{
//             y: [0, -15, 0],
//             transition: {
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//           }}
//           className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-blue-500 opacity-20"
//         />
//         <motion.div
//           animate={{
//             y: [0, 15, 0],
//             transition: {
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             },
//           }}
//           className="absolute top-10 right-10 w-20 h-20 rounded-full bg-indigo-500 opacity-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;