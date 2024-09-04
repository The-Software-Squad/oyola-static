import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { stays } from "@/data/stays";
import ServiceHero from "@/components/service-hero";
import Section from "@/components/section";
import HowItWorks from "@/components/how-it-works";
import CallBackForm from "@/components/calllback-form";

export default function Page() {
    return (
        <main className="flex flex-col justify-between min-h-screen px-5 md:px-12 lg:px-24">
            <Navbar />
            <ServiceHero
            title="Book sleep explore"
            subtitle="Find the best stays in your destination"
            button_text="Explore the options"
            background_image="https://images.pexels.com/photos/4511053/pexels-photo-4511053.jpeg"
            />
            <Section
                title="Choose your stay"
                subtitle="We have a wide range of stays for you to choose from"
                data={stays}
                CardIcon={HomeModernIcon}
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
