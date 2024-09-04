import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { FlagIcon } from "@heroicons/react/24/outline";
import ServiceHero from "@/components/service-hero";
import Section from "@/components/section";
import HowItWorks from "@/components/how-it-works";
import CallBackForm from "@/components/calllback-form";
import { experiences } from "@/data/experiences";

export default function Page() {
    return (
        <main className="flex flex-col justify-between min-h-screen px-5 md:px-12 lg:px-24">
            <Navbar />
            <ServiceHero
                title="Experience the nature"
                subtitle="Explore the experiences that you will never forget"
                button_text="Explore the options"
                background_image="https://images.pexels.com/photos/4511088/pexels-photo-4511088.jpeg"
            />
            <Section
                title="Choose your experience"
                subtitle="We have a wide range of experiences for you to choose from"
                data={experiences}
                CardIcon={FlagIcon}
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
