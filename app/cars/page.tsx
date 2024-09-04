import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { TruckIcon } from "@heroicons/react/24/outline";
import ServiceHero from "@/components/service-hero";
import Section from "@/components/section";
import HowItWorks from "@/components/how-it-works";
import CallBackForm from "@/components/calllback-form";
import { cars } from "@/data/cars";

export default function Page() {
    return (
        <main className="flex flex-col justify-between min-h-screen px-5 md:px-12 lg:px-24">
            <Navbar />
            <ServiceHero
            title="Travel with comfort"
            subtitle="Get the best car rentals in your destination"
            button_text="Explore the options"
            background_image="https://images.unsplash.com/photo-1590137303600-a3ba9a8a8a24"
            />
            <Section
                title="Choose your car"
                subtitle="We have a wide range of cars for you to choose from"
                data={cars}
                CardIcon={TruckIcon}
            />
            <HowItWorks />
            {/* Booking form */}
            <div id="callbackform">
                <CallBackForm 
                title={"Book your car"}
                form_type={"car"}
                />
            </div>
            <Footer />
        </main>
    );
}
