export const Projects = () => {
  const data = [
    {
      image: House1,
      HNO: "C-2",
      address: "Pitampura-110034",
      area: "2956 sq.ft." // Updated area for the first project
    },
    {
      image: House2,
      HNO: "D-16",
      address: "Rohini -110085",
      area: "3064 sq.ft." // Updated area for the second project
    },
    {
      image: House3,
      HNO: "H-32",
      address: "Rohini -110085",
      area: "3946 sq.ft." // Updated area for the third project
    },
  ];

  return (
    <div className="lg:max-w-[1290px] w-full mx-auto h-full lg:px-[18px] mt-[60px] mb-[40px]">
      <CommonHeading className="text-center">Our Projects</CommonHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-brown rounded-lg overflow-hidden border border-#575757 rounded-[5px]"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={item.image}
                alt={`House ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white group-hover:bg-brown group-hover:text-white transition duration-300 ease-in-out">
              <div className="flex items-center justify-between">
                <div className="flex flex-col text-xs mr-4">
                  <p className="text-black group-hover:text-white transition duration-300 ease-in-out">
                    {item.HNO}
                  </p>
                  <p className="text-black group-hover:text-white transition duration-300 ease-in-out">
                    {item.address}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                      src={HouseIcon}
                      alt="House"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      {item.area} // Area is dynamically displayed
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Area
                    </p>
                  </div>
                  {/* Other icons and their labels remain unchanged */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={TriangleIcon}
                      alt="Triangle"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      G + 3
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Floors
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={SquareIcon}
                      alt="Square"
                      width={24}
                      height={24}
                      className="mb-1 filter invert group-hover:invert-0 transition duration-300 ease-in-out"
                    />
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Package
                    </p>
                    <p className="text-black text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                      Classic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

export default Projects;
