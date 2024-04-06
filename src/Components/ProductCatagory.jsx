
const products = [
    {
        id: 1,
        name: 'Shutters',
        href: '#',
        icon: '/shutter.svg',
        imageSrc: '/p1.png',
    },
    {
        id: 2,
        name: 'Drapes',
        href: '#',
        icon: '/drapes.svg',
        imageSrc: '/p2.png',
    },
    {
        id: 3,
        name: 'Pergolas',
        href: '#',
        icon: '/pergolas.svg',
        imageSrc: '/p3.png',
    },
    {
        id: 4,
        name: 'Kitchen',
        href: '#',
        icon: '/kitchen.svg',
        imageSrc: '/p4.png',
    },
    {
        id: 5,
        name: 'Closets',
        href: '#',
        icon: '/closets.svg',
        imageSrc: '/p5.png',
    },
    {
        id: 6,
        name: 'Tv walls',
        href: '#',
        icon: '/tvwalls.svg',
        imageSrc: '/p6.png',
    },
    {
        id: 7,
        name: 'Floorings',
        href: '#',
        icon: '/floorings.svg',
        imageSrc: '/p7.png',
    },
    {
        id: 8,
        name: 'Bathroom',
        href: '#',
        icon: '/bathroom.svg',
        imageSrc: '/p8.png',
    }
];

function ProductCategory() {
    return (
        <div className='mx-auto max-w-2xl px-4 mt-10 sm:px-6  lg:max-w-7xl lg:px-8'>
            <div className='flex justify-center'>
                <div className='flex items-center space-x-2'>
                    <p className="text-[28px]  md:text-[32px] max-w-[800px] lg:text-[44px]  open-sans leading-[82px]  md:leading-[144px]  tracking-wide"> <span className='font-semibold'>Explore </span> the products </p>
                    <img className='mt-4 md:mt-8 w-4 h-1 md:w-auto md:h-auto' src="/88.png" alt="" /><div />
                </div>
            </div>
            <div className='flex justify-center'>


                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Map through the products array and render each product */}
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group relative">
                            <div className=" w-full overflow-hidden rounded-lg">
                                <img
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover  group-hover:opacity-75"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 ">
                                <img className='w-[74px]' src={product.icon} alt="" />

                                <div className='flex'>
                                    <span className="text-white open-sans  absolute bottom-4 right-2 font-semibold flex items-center space-x-2"> <p>{product.name}</p> <img className='w-4' src="/arrowr.svg" alt="" /></span>
                                </div>                        </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}


export default ProductCategory;
