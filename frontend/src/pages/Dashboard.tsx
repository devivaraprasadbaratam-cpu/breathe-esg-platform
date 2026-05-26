import { useEffect, useState } from "react";
import API from "../services/api";
import EmissionTable from "../components/EmissionTable";
import EmissionChart from "../components/EmissionChart";

export default function Dashboard() {

  const [records, setRecords] = useState([]);

  useEffect(() => {

    API.get("/emission-records/")
      .then((response) => {

        setRecords(response.data);

        console.log(response.data);

      })

      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

    <div>

      <h1 className="text-4xl font-bold">

        ESG Emissions Dashboard

      </h1>

      <p className="text-gray-600 mt-2">

        Enterprise Carbon Data Review System

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <p className="text-gray-500">

            Total Records

          </p>

          <h2 className="text-5xl font-bold mt-4">

            {records.length}

          </h2>

        </div>

        <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg">

          <p>

            Approved Records

          </p>

          <h2 className="text-5xl font-bold mt-4">

         {
  records.filter(
    (r: any) => r.status === "APPROVED"
  ).length
}
          </h2>

        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow-lg">

          <p>

            Pending Review

          </p>

          <h2 className="text-5xl font-bold mt-4">
{
  records.filter(
    (r: any) => r.status === "PENDING"
  ).length
}  

          </h2>

        </div>

        <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg">

          <p>

            Suspicious Rows

          </p>

          <h2 className="text-5xl font-bold mt-4">

          {
  records.filter(
    (r: any) => r.is_suspicious
  ).length
} 

          </h2>

        </div>

      </div>

      <div className="w-full h-[400px] mt-10">

        <EmissionChart />

      </div>

      <EmissionTable records={records} />
    </div>

  );
}