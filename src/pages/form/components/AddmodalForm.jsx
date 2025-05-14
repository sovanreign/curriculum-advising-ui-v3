import React from "react";

function AddmodalForm({ isPlanModalOpen, setIsPlanModalOpen }) {
  const handleOpen = () => {
    setIsPlanModalOpen(!isPlanModalOpen);
  };
  return (
    <div>
      {isPlanModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg mb-4">Add Subject(s) to Plan</h3>
            {/* Filters for Year Level and Semester */}
            <div className="flex gap-4 mb-4">
              <select className="select select-bordered">
                <option value="All">All Year Levels</option>
                <option value="FIRST">First Year</option>
                <option value="SECOND">Second Year</option>
                <option value="THIRD">Third Year</option>
                <option value="FOURTH">Fourth Year</option>
              </select>
              <select className="select select-bordered">
                <option value="All">All Semesters</option>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
              </select>
            </div>

            {/* List of Available Subjects with Checkboxes */}
            <div className="overflow-x-auto my-4">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Units</th>
                    <th>Sem</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td>subject1</td>
                    <td>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    </td>
                    <td>3</td>
                    <td>1st</td>
                    <td>2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Actions */}
            <div className="modal-action">
              <button className="btn btn-success">Add to Plan</button>
              <button onClick={handleOpen} className="btn btn-ghost">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddmodalForm;
