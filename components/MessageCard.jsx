import { Span } from "next/dist/trace";

const MessageCard = ({ message }) => {
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      <h2 className="text-xl mb-4">
        <Span className="font-bold">Property Inguiry:</Span>{" "}
        {message.property.name}
      </h2>
    </div>
  );
};

export default MessageCard;
