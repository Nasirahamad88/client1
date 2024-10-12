"use client";
import Image from "next/image";

 // Client-side component

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Box Office!",
      description:
        "Discover how the entertainment industry is evolving with emerging trends in cinema and streaming platforms.",
        image: "/hd.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Tech Innovations in Film Production",
      description:
        "From virtual production to AI-powered editing, explore the latest technologies shaping the film industry.",
      image:"/hd.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Impact of Streaming Platforms",
      description:
        "Understand how streaming services are transforming consumer behavior and changing the entertainment landscape.",
      image:"/hd.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen py-12"
    style={{
        backgroundColor: "hsla(240, 100%, 4%, 1)",
        backgroundImage: `
          radial-gradient(at 51% 27%, hsla(240, 96%, 15%, 1) 0px, transparent 50%),
          radial-gradient(at 50% 66%, hsla(240, 96%, 15%, 1) 0px, transparent 50%)
        `,
        paddingTop: "150px",
      }}>
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        Latest Blogs
      </h1>

      <div className="container mx-auto  flex flex-col gap-12 px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="hero  text-white justify-between lg:w-[60%] mx-auto lg:h-96 shadow-2xl rounded-lg"
            style={{
                background: "linear-gradient(to right, #050a30, #050a30, #050a30)",
              color: "white",
              }} >
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
              <Image
              height={250}
              width={300}
                src={blog.image}
                alt={blog.title}
                className="lg:w-1/4 rounded-lg shadow-xl"
              />
              <div>
                <h2 className="text-4xl font-bold">{blog.title}</h2>
                <p className="py-6">{blog.description}</p>
                <a href={blog.link} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
