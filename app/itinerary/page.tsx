import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ServiceHero from "@/components/service-hero";
import Section from "@/components/section";
import HowItWorks from "@/components/how-it-works";
import CallBackForm from "@/components/calllback-form";
import { experiences } from "@/data/experiences";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <main className="flex flex-col justify-between min-h-screen px-5 md:px-12 lg:px-24">
            <Navbar />
            <ServiceHero
                title="Book your end to end travel experience"
                subtitle="Find the best travel Itinerary in your destination"
                button_text="Explore the options"
                background_image="https://images.pexels.com/photos/4511088/pexels-photo-4511088.jpeg"
            />
            <Section
                title="Choose your Itinerary"
                subtitle="We have a wide range of Itinerary for you to choose from"
                data={experiences}
                CardIcon={CalendarDateRangeIcon}
            />
            <HowItWorks />
            {/* Booking form */}
            <div id="callbackform">
                <CallBackForm title={"Book your stays"} form_type={"stays"} />
            </div>
            <Footer />
        </main>
    );
}
