import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

const Students = () => {
  return (
    <div className="">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 bg-base-200">
        <Navbar />

        <div className="p-8">
          <h1 className="font-bold text-xl mb-8 pl-4">List of Students</h1>

          <div className="card bg-white w-full shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search students here..."
                    className="input input-bordered w-72"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex space-x-4">
                  <select
                    className="select select-bordered"
                    // value={yearLevel}
                    // onChange={(e) => setYearLevel(e.target.value)}
                  >
                    <option value="ALL">All Years</option>
                    <option value="FIRST">1st Year</option>
                    <option value="SECOND">2nd Year</option>
                    <option value="THIRD">3rd Year</option>
                    <option value="FOURTH">4th Year</option>
                  </select>
                  <select
                    className="select select-bordered"
                    // value={program}
                    // onChange={(e) => setProgram(e.target.value)}
                  >
                    <option value="ALL">All Programs</option>
                    {/* {programs.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.code}
                      </option>
                    ))} */}
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button
                    className="btn btn-xs btn-outline"
                    // onClick={() => setIsModalOpen(true)}
                  >
                    Add Student
                  </button>
                  <button
                    className="btn btn-xs btn-outline"
                    // onClick={() => setIsUploadModalOpen(true)}
                  >
                    Upload Students
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-xs bg-gray-900 text-white hover:bg-gray-800"
                    // onClick={handleDownloadCsv}
                  >
                    Download as csv
                  </button>
                </div>
              </div>

              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Student No.</th>
                    <th>Email</th>
                    <th>Year Level</th>
                    <th>Program</th>
                    <th>Curriculum</th>
                    <th>School Term</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <td>test</td>
                </tbody>
                {/* <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>
                        {student.firstName} {student.lastName}
                      </td>
                      <td>{student.studentId}</td>
                      <td>{student.email}</td>
                      <td>{formatYearLevel(student.yearLevel)}</td>
                      <td>{student.program.code}</td>
                      <td>
                        {student.studentCourse[0]?.course.curriculum.code ||
                          "None"}
                      </td>
                      <td>
                        {student.studentCourse[0]?.schoolTerm
                          ? `${student.studentCourse[0].schoolTerm.sy} - ${
                              student.studentCourse[0].schoolTerm.semester ===
                              "FIRST"
                                ? "1st"
                                : "2nd"
                            } Sem`
                          : "N/A"}
                      </td>
                      <td className="flex flex-col space-y-2">
                        <button
                          className="btn btn-xs btn-outline"
                        //   onClick={() => handleViewDetails(student)}
                        >
                          View details
                        </button>
                        <button
                          className="btn btn-xs btn-outline"
                        //   onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody> */}
              </table>

              <div className="flex justify-between items-center mt-4">
                <p className="text-sm">1 of 1</p>
                <div className="flex space-x-2">
                  <button className="btn btn-outline">&lt;</button>
                  <button className="btn btn-outline">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      {/* {isModalOpen && ( */}
      {/* <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Students</h3>
          <form
              onSubmit={handleSubmit(onSubmit)}
            className="mt-4 grid grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm">First Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
              />
              {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Last Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
              />
              {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Student ID</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("studentId", {
                    required: "Student ID is required",
                  })}
              />
              {errors.studentId && (
              <span className="text-red-500 text-sm">
                {errors.studentId.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Username</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Course</label>
              <select
                className="select select-bordered w-full"
                  {...register("programId", { required: "Course is required" })}
              >
                <option value="">Select Course</option>
                {programs.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.code}
                    </option>
                  ))}
              </select>
              {errors.programId && (
              <span className="text-red-500 text-sm">
                {errors.programId.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                value="password"
                disabled
                  {...register("password")}
              />
            </div>
            <div className="modal-action col-span-2 flex justify-between">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                  onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div> */}
      {/* )} */}

      {/* View Student Modal */}
      {/* {isViewModalOpen && ( */}

      {/* <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Student Information</h3>
          <form
              onSubmit={handleSubmit(onSubmit)}
            className="mt-4 grid grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm">First Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
              />
              {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Last Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Student ID</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("studentId", {
                    required: "Student ID is required",
                  })}
              />
              {errors.studentId && (
              <span className="text-red-500 text-sm">
                {errors.studentId.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Username</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("username", {
                    required: "Username is required",
                  })}
              />
              {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Course</label>
              <select
                className="select select-bordered w-full"
                  {...register("programId", { required: "Course is required" })}
              >
                <option value="">Select Course</option>
                {programs.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.code}
                    </option>
                  ))}
              </select>
              {errors.programId && (
              <span className="text-red-500 text-sm">
                {errors.programId.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Email Address</label>
              <input
                type="email"
                className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
              )}
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <input
                type="text"
                className="input input-bordered w-full"
                  {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
              )}
            </div>

            <div className="modal-action col-span-2 flex justify-between">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                  onClick={() => setIsViewModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* )} */}
      {/* Upload Students Modal */}
      {/* {isUploadModalOpen && (


      <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Students</h3>
          <div className="mt-4">
            <label className="block text-sm">CSV File</label>
            <input
              type="file"
              accept=".csv"
              className="file-input file-input-bordered w-full"
              onChange={(e) => setCsvFile(e.target.files[0])}
            />
          </div>
          <div className="modal-action">
            <button
              className="btn bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setIsUploadModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      )} */}
    </div>
  );
};

export default Students;
