const logs = [

  {
    id: 1,
    action: "Approved emission record",
    user: "Analyst A",
    timestamp: "2026-05-25 10:30 AM",
  },

  {
    id: 2,
    action: "Uploaded SAP fuel dataset",
    user: "Operations Team",
    timestamp: "2026-05-25 09:10 AM",
  },

  {
    id: 3,
    action: "Flagged suspicious utility bill",
    user: "Analyst B",
    timestamp: "2026-05-24 05:45 PM",
  },

  {
    id: 4,
    action: "Rejected travel emission record",
    user: "Compliance Team",
    timestamp: "2026-05-24 02:15 PM",
  },

];

export default function AuditLogs() {

  return (

    <div className="p-8">

      <div className="mb-8">

        <h1 className="text-5xl font-bold">

          Audit Logs

        </h1>

        <p className="text-gray-500 mt-2 text-lg">

          Full enterprise activity tracking system

        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="space-y-6">

          {logs.map((log) => (

            <div
              key={log.id}
              className="border rounded-2xl p-6 flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-semibold">

                  {log.action}

                </h2>

                <p className="text-gray-500 mt-2">

                  Performed by:
                  {" "}
                  {log.user}

                </p>

              </div>

              <div className="text-gray-400">

                {log.timestamp}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}