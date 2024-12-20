'use client'
import CountUp from "react-countup"

export function Stats(){
    const data=[
        {heading:120,
            headAddOn:"K",
            subheading: "Employees work in all parts of the world" 

        },
        {heading:315,
            subheading: "Projects Completed all over India" 

        },
        {heading:10,
            headAddOn: " Years",
            subheading: "10 years warranty provided " 

        },

    ]
    return (
        // <div className="w-full bg-red-300">
<div className="flex max-w-2xl    items-center justify-between gap-6   bg-white p-4 md:rounded-tl-2xl md:rounded-tr-2xl absolute -right-4 bottom-0 ">
{data.map(({heading, subheading, headAddOn}) => (
    <div key={heading} className="flex flex-col items-start gap-2 ">
        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-black"><CountUp  start={0} end={heading} duration={4} suffix={headAddOn  } /> </div>
        <div className="text-gray-400 text-sm sm:text-base">{subheading} </div>

    </div>
))}
</div>
// </div>
    )
}