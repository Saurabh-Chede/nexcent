import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      image: "/images/img_image_18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "/images/img_image_19.png",
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "/images/img_image_20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#4d4d4d] text-center mb-2">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] text-center text-sm max-w-xl mx-auto mb-12">
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="bg-[#f5f7f9] rounded-md shadow-md p-4 mx-4 -mt-16 relative z-10">
                <h3 className="text-[#717171] font-semibold text-center mb-6 text-sm">
                  {post.title}
                </h3>
                <div className="flex justify-center">
                  <a href="#" className="text-[#4caf4f] font-semibold text-sm flex items-center">
                    Readmore
                    <img 
                      src="/images/img_24_arrows_directions_right.svg" 
                      alt="Arrow right" 
                      className="w-4 h-4 ml-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;