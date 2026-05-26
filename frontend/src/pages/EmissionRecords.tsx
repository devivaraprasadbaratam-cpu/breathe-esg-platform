import { useEffect, useState } from "react";

import API from "../services/api";

export default function EmissionRecords() {

  const [records, setRecords] =
    useState<any[]>([]);

  const fetchRecords = async () => {

    try {

      const response =
        await API.get(
          "/emission-records/"
        );

      setRecords(
        response.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    fetchRecords();

  }, []);

  const updateStatus = async (
    id: number,
    status: string
  ) => {

    try {

      await API.patch(
        `/emission-records/${id}/`,
        {
          status,
        }
      );

      fetchRecords();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-bold">

            Emission Records

          </h1>

          <p className="text-gray-500 mt-2 text-lg">

            Review enterprise ESG submissions

          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">
                Category
              </th>

              <th className="text-left py-4">
                Scope
              </th>

              <th className="text-left py-4">
                Activity
              </th>

              <th className="text-left py-4">
                CO₂e
              </th>

              <th className="text-left py-4">
                Status
              </th>

              <th className="text-left py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className="border-b"
              >

                <td className="py-5">
                  {record.category}
                </td>

                <td className="py-5">
                  {record.scope}
                </td>

                <td className="py-5">
                  {record.activity_type}
                </td>

                <td className="py-5">
                  {record.co2e} kg CO₂
                </td>

                <td className="py-5">

                  <span
                    className={`px-4 py-2 rounded-full text-white text-sm ${
                      record.status === "APPROVED"
                        ? "bg-green-500"
                        : record.status === "PENDING"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >

                    {record.status}

                  </span>

                </td>

                <td className="py-5 flex gap-3">

                  <button
                    onClick={() =>
                      updateStatus(
                        record.id,
                        "APPROVED"
                      )
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >

                    Approve

                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        record.id,
                        "REJECTED"
                      )
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >

                    Reject

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}