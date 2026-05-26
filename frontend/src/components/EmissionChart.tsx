import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

import {

  useEffect,
  useState,

} from "react";

import API from "../services/api";

export default function EmissionChart() {

  const [data, setData] =
    useState<any[]>([]);

  useEffect(() => {

    fetchChartData();

  }, []);

  const fetchChartData =
    async () => {

      try {

        const response =
          await API.get(
            "/emission-records/"
          );

        const records =
          response.data;

        const groupedData = [

          {
            scope: "Scope 1",
            emissions: 0,
          },

          {
            scope: "Scope 2",
            emissions: 0,
          },

          {
            scope: "Scope 3",
            emissions: 0,
          },

        ];

        records.forEach(
          (record: any) => {

            const scope =
              groupedData.find(
                (item) =>
                  item.scope ===
                  record.scope
              );

            if (scope) {

              scope.emissions +=
                Number(
                  record.co2e
                );

            }

          }
        );

        setData(
          groupedData
        );

      } catch (error) {

        console.error(error);

      }

    };

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

      <h2 className="text-3xl font-bold mb-6">

        Emissions Overview

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={data}>

          <XAxis dataKey="scope" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="emissions"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}