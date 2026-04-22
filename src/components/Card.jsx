function Card({ title, value, change }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <p className="text-2xl font-semibold mt-2">{value}</p>

      {change && (
        <p
          className={`text-sm mt-1 ${
            change.includes("+") ? "text-green-500" : "text-red-500"
          }`}
        >
          {change} this week
        </p>
      )}
    </div>
  );
}

export default Card;