import React from "react";
import { useDrag } from "react-dnd";

const TicketColumn = ({ cardDetails }) => {
  const [{ isDragging }, drag] = useDrag({
    item: cardDetails ? { type: "CARD", cardDetails } : null,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }} className="cursor-move">
      <div className="card-container p-4 border rounded border-gray-300 mb-4">
        <div className="flex items-between">
          <div className="text-gray-600 text-sm font-semibold">
            {cardDetails?.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketColumn;
