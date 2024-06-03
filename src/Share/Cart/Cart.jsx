import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

const Cart = ({ item: { blogName, blogImage, shortDescription, _id } }) => {
  const [data, setData] = useState(null);

  const handleModal = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
      const blogsData = await response.json();
      setData(blogsData);
      document.getElementById(`modal-${id}`).showModal(); // Show the specific modal after setting the data
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
      data-aos="fade-up"
    >
      <div className="overflow-y-hidden h-72">
        <div className="flex flex-col h-full gap-10 transition-transform duration-500 translate-y-16 group-hover:translate-y-0">
          <div className="flex flex-col justify-between w-12 h-8">
            {blogImage ? (
              <img
                className="rounded-md bg-designColor"
                src={blogImage}
                alt=""
              />
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-300 md:text-2xl font-titleFont">
              {blogName}
            </h2>
            <p className="base">{shortDescription}</p>
            <button
              onClick={() => handleModal(_id)}
              className="text-2xl text-designColor"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}

      <dialog
        id={`modal-${_id}`}
        className="mx-auto text-black sm:modal-middle modal modal-bottom "
      >
        <div className="bg-gray-100 shadow-2xl modal-box">
          {/* Modal Card Data Start */}

          <div className="flex items-center gap-4">
            <img
              className="object-cover w-[100px] duration-300 rounded-md"
              src={data?.blogImage}
              alt={data?.projectName}
            />
            <div>
              <h2 className="text-2xl font-semibold text-black uppercase">
                {data?.blogName}
              </h2>
              <p>{data?.shortDescription}</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 mt-5">
            <p className="text-sm tracking-wide duration-300 hover:text-white">
              <div className="flex items-center justify-between"></div>
              <div className="mt-6 text-black">
                <h1 className="pb-2 font-semibold text-md">Description</h1>
                <span>{data?.detail}</span>
              </div>
            </p>
          </div>
          {/* Modal Card Data End */}

          <div className="modal-action">
            <form method="dialog">
              <button className="text-white transition-all bg-gray-600 hover:bg-gray-800 btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
