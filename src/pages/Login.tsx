import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { students } from "../data/students";

export default function Login() {
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = students.find((s) => s.regNo === regNo);

    if (!student) {
      setError(`User not found.`);
      return;
    }

    if (!student.eligible) {
      setError(
        `Your Attendance is below the eligibility criteria. You have attended ${student.attendance} days. but the minimum required attendance is 7 or above.`
      );
      return;
    }

    // Pass `name` in the state along with the student object
    navigate("/certificate", { state: { student, name: student.name } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Certificate Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="regNo"
              className="block text-sm font-medium text-gray-700"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="regNo"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your registration number"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
