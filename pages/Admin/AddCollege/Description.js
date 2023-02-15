import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import AddCollegeDetails from "../AddCollegeDetails";

const Stepper = () => {
  return (
    <ol className="flex items-center w-full text-sm font-medium p-5 bg-white text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <Link href="/Admin/AddCollege/CollegeDetail">
        <li className="flex md:w-full cursor-pointer items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">1</span>
            College <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
      </Link>
      <Link href="/Admin/AddCollege/AddDepartment">
        <li className="flex md:w-full cursor-pointer items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">2</span>
            Department{" "}
            <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
      </Link>

      <Link href="/Admin/TextEditor">
        <li className="flex items-center cursor-pointer  text-blue-600 dark:text-blue-500">
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Description
        </li>
      </Link>
    </ol>
  );
};
// import { buttonList } from "suneditor-react";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = () => {
  const CollegeTextEditor = () => {
    const [valueText, setValueText] = useState("");

    function handleChange(content) {
      setValueText(content);
    }
    return (
      <AddCollegeDetails>
        <Stepper />
        <div className=" container m-auto p-5 bg-white">
          <div className="">
            <div className="mb-5 ">
              <div>
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="InstituteCode"
                >
                  Institute Code :
                </label>
                <input
                  placeholder="Ex. 1001"
                  type="text"
                  name="ChoicceCode"
                  className="  rounded-sm outline-none  px-2 py-1 bg-white  border"
                />
                <button
                  type="button"
                  className="bg-red-500 px-5 text-white text-base font-semibold py-1 ml-5"
                >
                  Check
                </button>
              </div>
              <div className="text-xs mt-2 text-red-700 font-semibold  ">
                Institute already Exists
              </div>
            </div>

            <SunEditor
              // value={valueText}
              onChange={handleChange}
              placeholder="Write brief information"
              height="100%"
              setOptions={{
                mode: "Classic",

                rtl: false,

                katex: "window.katex",

                imageGalleryUrl:
                  "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",

                videoFileInput: false,

                tabDisable: false,
                buttonList: [
                  [
                    "undo",

                    "redo",

                    "font",

                    "fontSize",

                    "formatBlock",

                    "paragraphStyle",

                    "blockquote",

                    "bold",

                    "underline",

                    "italic",

                    "strike",

                    "subscript",

                    "superscript",

                    "fontColor",

                    "hiliteColor",

                    "textStyle",

                    "removeFormat",

                    "outdent",

                    "indent",

                    "align",

                    "horizontalRule",

                    "list",

                    "lineHeight",

                    "table",

                    "link",

                    "image",

                    "video",

                    "audio",

                    "math",

                    "imageGallery",

                    "fullScreen",

                    "showBlocks",

                    "codeView",

                    "preview",

                    "print",

                    "save",

                    "template",
                  ],
                ],

                "lang(In nodejs)": "en",
              }}
            />
            <button type="submit" className="pBtn px-10 mt-5 py-3">
              Submit
            </button>
          </div>
          <div className="mt-7 bg-white p-5">
            <h1 className="font-semibold text-slate-400 mb-5">Preview</h1>
            <CollegeData data={valueText} />
          </div>
        </div>
      </AddCollegeDetails>
    );
  };

  const CollegeCard = () => {
    return (
      <div className="flex flex-col w-full sm:w-80 bg-slate-100 cursor-pointer ">
        <p
          rel="noopener noreferrer"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            className="object-cover cursor-pointer w-full h-52 "
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </p>
        <div className="flex flex-col flex-1 p-6">
          <p
            rel="noopener noreferrer"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></p>
          <a
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >
            Convenire
          </a>
          <Link
            target="_blank"
            href={{
              pathname: `/CollegeDa/[id]`,
              query: {
                id: "HeyCollegeswala",
                cName: "COEP",
              },
            }}
          >
            <a
              target="_blank"
              className="flex-1 cursor-pointer py-2 text-lg font-semibold leading-snug"
            >
              Te nulla oportere reprimique his dolorum
            </a>
          </Link>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>June 1, 2020</span>
          </div>
        </div>
      </div>
    );
  };

  const CollegeData = (props) => {
    return (
      <>
        <div className="container bg-white rounded-sm  mx-auto space-y-12">
          <article className=" ">
            <div className="space-y-6 border-b-2 pb-5">
              <h1 className="text-4xl font-bold sm:text-3xl md:tracking-tight ">
                Suspendisse ut magna et ipsum sodales accumsan.
              </h1>
              <div className="flex items-start text-slate-400 justify-between w-full flex-row md:items-center ">
                <div className="flex items-center ">
                  <img
                    src="/img/logo.svg"
                    alt=""
                    className="w-4 h-4 border mr-2 rounded-full "
                  />
                  <p className="text-sm ">Gaurav Narnaware • July 19th, 2021</p>
                </div>
                <p className=" text-sm ">4 min read • 1,570 views</p>
              </div>
            </div>
            <div className="mt-5 overflow-x-scroll">
              <div dangerouslySetInnerHTML={{ __html: props.data }} />
            </div>
          </article>
          <div>
            <div className="flex flex-wrap py-6 space-x-2 border-b-2 border-dashed ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
              >
                #MambaUI
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
              >
                #TailwindCSS
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
              >
                #Angular
              </a>
            </div>
            <div className="space-y-2 mt-5">
              <h4 className="text-lg font-semibold">More Colleges</h4>
              <div className="flex  gap-5 flex-wrap ">
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <CollegeTextEditor />
    </>
  );
};

export default TextEditor;
