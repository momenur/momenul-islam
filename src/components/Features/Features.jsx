import Title from "../../Share/Title/Title";
import Cart from "../../Share/Cart/Cart";
import { useEffect, useState } from "react";

const Features = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/blogs");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(blogs);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <section
      id="features"
      className="w-full pb-20  border-b-[1px] border-b-black"
    >
      <Title title="Blogs" description="Tech Spectrum"></Title>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
        {blogs?.map((blog) => (
          <Cart key={blog._id} item={blog}></Cart>
        ))}
      </div>
    </section>
  );
};

export default Features;
