type RecordType = {
  id?: number;
  category: string;
  emissions_kg_co2e: number;
  status: string;
};

export default function EmissionTable({
  records,
}: {
  records: RecordType[];
}) {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg mt-10">

      <h2 className="text-3xl font-bold mb-6">

        Analyst Review Queue

      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-4">
                Category
              </th>

              <th className="text-left p-4">
                Emissions
              </th>

              <th className="text-left p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {records.map((record, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="p-4">

                  {record.category}

                </td>

                <td className="p-4">

                  {record.emissions_kg_co2e} kg CO₂

                </td>

                <td className="p-4">

                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full">

                    {record.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}