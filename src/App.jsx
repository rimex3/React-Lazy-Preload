// normal

// import React, { useState, Suspense } from "react";
// import StockTable from "./StockTable";
// import StockChart from "./StockChart";

// console.time("StockChart Load Time");
// import("./StockChart").then(() => {
//     console.timeEnd("StockChart Load Time");
// });

// export default function App() {
//     const [selectedStock, setSelectedStock] = useState(null);

//     function handleStockHover() {}

//     function handleStockSelect(stock) {
//         console.log(`Stock selected: ${stock.name}`);
//         setSelectedStock(stock);
//     }

//     return (
//         <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//             <h1>Lazy Loaded Stock App</h1>
//             <StockTable onSelect={handleStockSelect} onHover={handleStockHover} />

//             {selectedStock && <StockChart stock={selectedStock} />}
//         </div>
//     );
// }


// Lazy Loaded Stock App with Suspense


// import React, { useState, Suspense } from "react";
// import StockTable from "./StockTable";
// const StockChart = React.lazy(() => import("./StockChart"));

// console.time("StockChart Load Time");

// export default function App() {
//     const [selectedStock, setSelectedStock] = useState(null);

//     function handleStockHover() {}

//     function handleStockSelect(stock) {
//         console.log(`Stock selected: ${stock.name}`);
//         setSelectedStock(stock);
//     }

//     return (
//         <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//             <h1>Lazy Loaded Stock App</h1>
//             <StockTable onSelect={handleStockSelect} onHover={handleStockHover} />

//             <Suspense fallback={<div>Loading...</div>}>{selectedStock && <StockChart stock={selectedStock} />}</Suspense>
//         </div>
//     );
// }


// Lazy Loaded and Preloaded Stock App with Suspense 


// import React, { useState, Suspense } from "react";
// import StockTable from "./StockTable";
// import { lazyWithPreload } from "./lazyWithPreload";

// const StockChart = lazyWithPreload(() => import("./StockChart"));

// export default function App() {
//     const [selectedStock, setSelectedStock] = useState(null);

//     function handleStockHover() {
//         console.time("StockChart Preload Time");
//         StockChart.preload();
//         console.timeEnd("StockChart Preload Time");
//     }

//     function handleStockSelect(stock) {
//         console.log(`Stock selected: ${stock.name}`);
//         setSelectedStock(stock);
//     }

//     return (
//         <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//             <h1>Lazy Loaded and Preloaded Stock App</h1>
//             <StockTable onSelect={handleStockSelect} onHover={handleStockHover} />

//             {selectedStock && <StockChart stock={selectedStock} />}
//         </div>
//     );
// }
