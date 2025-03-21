import React from "react";

const stocks = [
    { id: 1, name: "Apple (AAPL)" },
    { id: 2, name: "Tesla (TSLA)" },
    { id: 3, name: "Amazon (AMZN)" },
];

export default function StockTable({ onSelect, onHover }) {
    return (
        <div>
            <h2>Stock List</h2>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.id} onClick={() => onSelect(stock)} onMouseEnter={() => onHover(stock)} style={{ cursor: "pointer", padding: "8px", borderBottom: "1px solid #ccc" }}>
                        {stock.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
