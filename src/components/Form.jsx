import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { validationSchema } from "./ValidationSchema";
import { useNavigate } from "react-router";
import { formInfo } from "./FormSlice";
import { useDispatch } from "react-redux";
const Form = () => {
  const level = ["Slc", "+2", "Bachelors", "Masters"];
  const skill = ["Frontend", "Backend"];
  const workExp = ["Fresher", "Mid-Level", "Senior-Level"];
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-sky-900  flex justify-center items-center h-screen ">
      <Formik
        initialValues={{
          username: "",
          email: "",
          level: "",
          skill: "",
          frontend: "",
          backend: "",
          workExp: "",
          midLevel: "",
          seniorLevel: "",
          facebook:""
        }}
        onSubmit={(values) => {
          console.log("form submitted ", values);
          dispatch(formInfo(values));
          navigate("/about");
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="bg-sky-700  text-white flex flex-col h-[95%] w-[80%] space-y-9 "
            onSubmit={handleSubmit}
          >
            <h1 className="text-white mt-5 font-bold text-3xl">Form</h1>
            <div className="flex justify-center items-center ">
              <div className="">
                <div className="space-x-5">
                  <label className="text-xl font-medium " htmlFor="username">
                    Username
                  </label>
                  <input
                    className="rounded-sm h-9 p-4 text-black"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                </div>
                <span className="text-red-600">
                  <ErrorMessage name="username" />
                </span>
              </div>
            </div>
            <div>
              <div className="space-x-5">
                <label htmlFor="email" className="my-28 text-xl font-medium ">
                  E-mail
                </label>
                <input
                  className="rounded-sm p-4 h-9 text-black"
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <span className="text-red-600">
                <ErrorMessage className="text-red-600" name="email" />
              </span>
            </div>
            <div className="">
              <h1 className="font-semibold text-xl">Level</h1>
              <div className="flex space-x-14 justify-center">
                {level.map((item, index) => (
                  // {console.log("item",item)}

                  <div className="space-x-5">
                    <label
                      htmlFor="username"
                      className="my-28 text-xl font-medium "
                    >
                      {item}
                    </label>
                    <Field type="radio" name="level" value={item} />
                  </div>
                ))}

                {/* <div className='space-x-5'>
                <label htmlFor="username" className='my-28 text-xl font-medium '>+2</label>
                <input className=' p-4 text-black' name="email" type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                </div>

                <div className='space-x-5'>
               <label htmlFor="username" className='my-28 text-xl font-medium '>Bachelors</label>
                <input className='p-4  text-black' name="email" type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                </div>
                
                <div className='space-x-5'>
               <label htmlFor="username" className='my-28 text-xl font-medium '>Masters</label>
                <input className=' p-4 text-black' name="email" type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                </div> */}
              </div>
              <span className="text-red-600">
                <ErrorMessage name="level" />
              </span>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Skill</h1>
              <div className="flex space-x-14 justify-center">
                {skill.map((item, index) => (
                  // {console.log("item",item)}

                  <div className="space-x-5" key={index}>
                    <label
                      htmlFor="username"
                      className="my-28 text-xl font-medium "
                    >
                      {item}
                    </label>
                    <Field type="radio" name="skill" value={item} />
                  </div>
                ))}
              </div>
              <ErrorMessage name="skill" />
            </div>
            <div className="flex justify-center">
              {values.skill &&
                (values.skill === "Frontend" ? (
                  <div className="text-blue-600 text-xl">
                    <select
                      name="frontend"
                      value={values.frontend}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                    >
                      <option value="" label="Select your frontend language" />
                      <option value="React" label="React" />
                      <option value="Vue" label="Vue" />
                      <option value="Angular" label="Angular" />
                    </select>
                    <span className="text-red-600">
                      <ErrorMessage name="frontend" />
                    </span>
                  </div>
                ) : (
                  <div className="text-blue-600 font-semibold text-xl">
                    <select
                      name="backend"
                      value={values.backend}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: "block" }}
                    >
                      <option value="" label="Select your backend language" />
                      <option value="Node" label="Node" />
                      <option value=".Net" label=".Net" />
                      <option value="Laravel" label="Laravel" />
                    </select>
                    <span className="text-red-600">
                      <ErrorMessage name="backend" />
                    </span>
                  </div>
                ))}
            </div>

            <div>
              <h1>Work Experience</h1>
              <div className="flex space-x-5 justify-center">
                {workExp.map((item, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="space-x-3">
                        <label
                          htmlFor="workExp"
                          className="my-28 text-xl font-medium "
                        >
                          {item}
                        </label>
                        <Field type="radio" name="workExp" value={item} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="text-red-600">
                <ErrorMessage name="workExp" />
              </span>
            </div>
            {values.workExp === "Mid-Level" && (
              <div className="text-blue-700 text-xl">
                <select
                  name="midLevel"
                  value={values.midLevel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="Time Span" />
                  <option value="2" label="2 years" />
                  <option value="3-4" label="3-4 years" />
                  <option value="5" label="5 years" />
                </select>
                <br />
                <span className="text-red-600">
                  <ErrorMessage name="midLevel" />
                </span>
              </div>
            )}
            {values.workExp === "Senior-Level" && (
              <div className="text-blue-700 text-xl">
                <select
                  name="seniorLevel"
                  value={values.seniorLevel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="Time Span" />
                  <option value="6-8" label="6-8 years" />
                  <option value="10" label="10 years" />
                  <option value="10+" label="10+ years" />
                </select>
                <br />
                <span className="text-red-600">
                  <ErrorMessage name="seniorLevel" />
                </span>
              </div>
            )}

            <div className="space-x-5">
              <label htmlFor="facebook" className="my-28 text-xl font-medium ">
                FacebookID
              </label>
              <input
                className="rounded-sm p-4 h-9 text-black"
                name="facebook"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.facebook}
              /><br/>
              <span className="text-red-600"><ErrorMessage name="facebook" /></span>
            </div>

            <button
              type="submit"
              className="bg-teal-500 border-2 w-28 h-8 hover:bg-teal-900 m-auto font-bold text-xl"
            >
              submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
