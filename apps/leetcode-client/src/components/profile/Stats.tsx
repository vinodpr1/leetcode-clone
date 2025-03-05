const Stats = (profileData: any) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#1e293b"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset="200"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#10b981"
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset="240"
              transform="rotate(-90 50 50)"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#ef4444"
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset="270"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">
              {profileData.no_of_solved_questions}
            </p>
            <p className="text-sm text-gray-400">/3475</p>
            <p className="text-green-500 text-sm mt-1">Solved</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-400">38 Attempting</p>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-500">Easy</span>
          <span className="font-bold">
            {profileData.no_of_solved_questions}/863
          </span>
        </div>
        <div className="w-full bg-gray-700 h-2 mb-4 rounded-full">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: "21%" }}
          ></div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-yellow-500">Med.</span>
          <span className="font-bold">
            {profileData.no_of_solved_questions} /1806
          </span>
        </div>
        <div className="w-full bg-gray-700 h-2 mb-4 rounded-full">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: "12%" }}
          ></div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-red-500">Hard</span>
          <span className="font-bold">
            {profileData.no_of_solved_questions}/806
          </span>
        </div>
        <div className="w-full bg-gray-700 h-2 mb-4 rounded-full">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: "2%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
