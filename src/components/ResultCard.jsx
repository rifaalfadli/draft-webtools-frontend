export default function ResultCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Windload</p>
          <p className="font-semibold text-gray-800">{data.windload}</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-500">Moment</p>
          <p className="font-semibold text-gray-800">{data.moment}</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            data.status === "OK"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {data.status}
        </span>
      </div>
    </div>
  );
}
