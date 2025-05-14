import React from "react";
import { Sidebar } from "../../components/ui/Sidebar";
import { Navbar } from "../../components/ui/Navbar";
import { useState } from "react";
import AddmodalForm from "./components/AddmodalForm";
function Form() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const handleOpen = () => {
    setIsPlanModalOpen(true);
  };
  return (
    <div>
      <Sidebar />
      <div className="ml-60 bg-base-200">
        <Navbar />
        <div className="p-8">
          <div className="card bg-white p-8 rounded-t-2xl">
            <div>
              <select
                name=""
                id=""
                className="float-right border px-4 py-1 rounded-sm"
              >
                <option value="">School year 1</option>
                <option value="">School year 2</option>
                <option value="">School year 3</option>
              </select>
            </div>
            <div className="border-b border-slate-400 py-4">
              <h1 className="text-center font-medium text-xl">
                Academic Advising Form
              </h1>
            </div>

            <div className="grid grid-cols-2 py-4 gap-4">
              <div>
                <div className="font-medium text-md">
                  <div className="space-y-3">
                    <div className="flex items-end gap-5">
                      <p>Student Number:</p>
                      <div className="border-b border-slate-700 w-60 px-2">
                        <p>21-43525</p>
                      </div>
                    </div>

                    <div className="flex items-end gap-8">
                      <p>Student Name:</p>
                      <div className="border-b border-slate-700 w-60 px-2">
                        <p>Maraiah Queen Arceta</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto mt-5">
                  <table className="table">
                    {/* head */}
                    <thead className="text-slate-900  ">
                      <tr>
                        <th></th>
                        <th>
                          <p className="italic text-base font-normal">
                            Subject(s) Currently Enrolled
                          </p>
                          <p> 1st Semester 2023 - 2024</p>
                        </th>
                        <th>Units Earned</th>
                        <th>Final Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>1</th>
                        <td>Networking and Communications 2</td>
                        <td>3</td>
                        <td></td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>2</th>
                        <td>Advanced Database Systems</td>
                        <td>3</td>
                        <td></td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>3</th>
                        <td>Introduction to Software Engineering</td>
                        <td>3</td>
                        <td></td>
                      </tr>

                      {/* total units */}
                      <tr>
                        <th></th>
                        <td className="text-right font-medium uppercase text-xl">
                          <p>Total units:</p>
                        </td>
                        <td>
                          <div className="size-4 px-8 py-3 bg-slate-400 flex items-center justify-center">
                            <p>3</p>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div className="font-medium text-md">
                  <div className="space-y-3">
                    <div className="flex items-end gap-5">
                      <p>Course:</p>
                      <div className="border-b border-slate-700 min-w-80 px-2">
                        <p>BS in Information Technology</p>
                      </div>
                    </div>

                    <div className="flex items-end gap-8">
                      <p>Year Level:</p>
                      <div className="border-b border-slate-700 w-60 px-2">
                        <p>1st Year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* plan of action */}
          <div className="mt-2">
            <h1 className="text-center font-medium text-xl">PLAN OF ACTIONS</h1>
          </div>
          <div className="card bg-white p-8 rounded-b-2xl mt-4">
            <div>
              <button
                onClick={handleOpen}
                className="btn float-right rounded-xl bg-slate-600 px-6 text-slate-100"
              >
                Add Plan
              </button>
            </div>
            <div className="grid grid-cols-2 pb-2 gap-4">
              <div>
                <div className="overflow-x-auto mt-5">
                  <table className="table">
                    {/* head */}
                    <thead className="text-slate-900  ">
                      <tr>
                        <th></th>
                        <th>
                          <p className="italic text-base font-normal">
                            Subject(s) plan to enroll this
                          </p>
                          <p>2nd Semester 2023 - 2024</p>
                        </th>
                        <th className="font-normal">Regular offering</th>
                        <th className="font-normal">Off- Cycle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>1</th>
                        <td>Networking and Communications 2</td>
                        <td>
                          <div className="size-5 bg-green-800"></div>
                        </td>
                        <td>
                          <div className="size-5 bg-slate-500"></div>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>2</th>
                        <td>Advanced Database Systems</td>
                        <td>
                          <div className="size-5 bg-green-800"></div>
                        </td>
                        <td>
                          <div className="size-5 bg-slate-500"></div>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>3</th>
                        <td>Introduction to Software Engineering</td>
                        <td>
                          <div className="size-5 bg-green-800"></div>
                        </td>
                        <td>
                          <div className="size-5 bg-slate-500"></div>
                        </td>
                      </tr>

                      {/* total units */}
                      <tr>
                        <th></th>
                        <td className="text-right font-medium uppercase text-xl">
                          <p>Total units:</p>
                        </td>
                        <td>
                          <div className="size-4 px-8 py-3 bg-slate-400 flex items-center justify-center">
                            <p>0</p>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <textarea
                className="textarea w-full border border-slate-400 focus:outline-none placeholder:text-slate-800 placeholder:font-medium"
                placeholder="Coach’s Remarks:"
              ></textarea>
            </div>

            <div className="w-full flex justify-center items-center mt-5">
              <button className="btn rounded-xl bg-slate-600 px-6 text-slate-100">
                Send AcadForm
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddmodalForm
        isPlanModalOpen={isPlanModalOpen}
        setIsPlanModalOpen={setIsPlanModalOpen}
      />
    </div>
  );
}

export default Form;
