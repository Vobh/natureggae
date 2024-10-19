import Image from "next/image";
import ReservationSideBar from "@/app/components/products/ReservationSideBar";

const ProductDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="mt-4 w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src='/beach_1.jpg'
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Product name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 badrooms - 2 bathrooms
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic_1.jpg"
                            width={80}
                            height={80}
                            className="rounded-full"
                            alt="The user name"
                        />

                        <p><strong>John Doe</strong> is the vendor</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum lskdjflskdl lf lsdk lsd fldk
                    </p>
                </div>

                <ReservationSideBar />                
            </div>
        </main>
    )
}

export default ProductDetailPage;