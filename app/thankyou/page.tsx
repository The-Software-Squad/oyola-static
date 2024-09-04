import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Page() {
    return (
        <main className="flex flex-col justify-between min-h-screen px-5 md:px-12 lg:px-24">
            <Navbar />
            <div className="">
                <div className="flex flex-col justify-center items-center h-[50vh]">
                    <h1 className="text-4xl font-bold font-dm_sans">
                        Thank you for booking with us
                    </h1>
                    <p className="text-gray-700 text-lg font-poppins">
                        We will get back to you soon
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
