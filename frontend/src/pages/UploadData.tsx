import { useState } from "react";

import API from "../services/api";

export default function UploadData() {

  const [file, setFile] =
    useState<File | null>(null);

  const [message, setMessage] =
    useState("");

  const [uploads, setUploads] =
    useState<any[]>([]);

  const handleUpload = async () => {

    if (!file) {

      alert("Please select file");

      return;
    }

    const formData = new FormData();

    formData.append(
      "file",
      file
    );

    try {

      const response =
        await API.post(
          "/upload/",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      setMessage(
        response.data.message
      );

      setUploads([
        ...uploads,
        {
          name: file.name,
          time:
            new Date().toLocaleTimeString(),
          status: "Uploaded",
        },
      ]);

    } catch (error) {

      console.error(error);

      setMessage(
        "Upload failed"
      );

    }

  };

  return (

    <div className="p-8">

      <h1 className="text-5xl font-bold">

        Upload ESG Data

      </h1>

      <p className="text-gray-500 mt-2 text-lg">

        Upload enterprise sustainability datasets

      </p>

      <div className="bg-white p-10 rounded-2xl shadow-lg mt-10 max-w-3xl">

        <input
          type="file"
          onChange={(e) => {

            if (e.target.files) {

              setFile(
                e.target.files[0]
              );

            }

          }}
          className="mb-6"
        />

        <br />

        <button
          onClick={handleUpload}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >

          Upload File

        </button>

        {message && (

          <p className="mt-6 text-green-600 font-semibold">

            {message}

          </p>

        )}

      </div>

      {uploads.length > 0 && (

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">

            Upload History

          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  File Name
                </th>

                <th className="text-left py-3">
                  Upload Time
                </th>

                <th className="text-left py-3">
                  Status
                </th>
                <th className="text-left py-3">
                 Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {uploads.map(
                (upload, index) => (

                 <tr
  key={index}
  className="border-b"
>

  <td className="py-4">
    {upload.name}
  </td>

  <td className="py-4">
    {upload.time}
  </td>

  <td className="py-4">

    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm">

      {upload.status}

    </span>

  </td>

  <td className="py-4">

    <button
      onClick={() => {

        const updatedUploads =
          uploads.filter(
            (_, i) => i !== index
          );

        setUploads(
          updatedUploads
        );

      }}
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >

      Delete

    </button>

  </td>

</tr> 

)
              )}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}