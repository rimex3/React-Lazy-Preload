import React from "react";

export default function StockChart({ stock }) {
    console.log(`Rendering StockChart for: ${stock.name}`);
    return (
        <div>
            <h2>Stock Chart for {stock.name}</h2>
            <p>📈 Chart data for {stock.name}!</p>
        </div>
    );
}
