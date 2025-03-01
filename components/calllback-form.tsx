
export default function CallBackForm({ title, form_type }: { title: string, form_type: string }) {
    const handleDateInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.type = "date";
    };
    return (
        <div className="w-full flex flex-col justify-center items-center mt-20">
            <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-5 text-center">
                {title}
            </h2>
            <h2 className="text-xl tracking-wide font-light font-dm_sans text-gray-400 text-center md:px-6 lg:px-24">
                Our executive will contact you within 24 hours to confirm your booking
                and payment details. Or you can call us at <a href="tel:+919618434488" className="text-gray-900 font-semibold">+91 9618434488</a> or <a href="tel:098936293565" className="text-gray-900 font-semibold">098936293565</a> for instant booking.
            </h2>
            <form
                action="https://formsubmit.co/vijaynaranji@gmail.com"
                method="POST"
                className="flex flex-col my-10 w-full items-center justify-center "
            >
                <input type="hidden" name="_template" value="table" />

                <input
                    type="hidden"
                    name="_subject"
                    value={`New Booking for ${form_type}!`}
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://oyola.in/thankyou" />
                <input type="hidden" name="_autoresponse" value="your custom message" />
                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                    required
                />

                <input
                    type="number"
                    name="Phone"
                    placeholder="Phone"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                    required
                />
                <input
                    type="text"
                    
                    name="from"
                    id="fromDate"
                    placeholder="Select checkin date"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                />
                <input
                    type="text"
                    
                    name="to"
                    id="toDate"
                    placeholder="Select checkout date"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                />
                <select
                    name="Type"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                    required
                    defaultValue={"default"}
                >
                    <option value="default" hidden>
                        select the serivce
                    </option>
                    <option value="Stays">Stays</option>
                    <option value="Cars">Cars</option>
                    <option value="Trips">Trips</option>
                    <option value="Trekking">Trekking</option>
                    <option value="Camping">Camping</option>
                    <option value="Tribal Village">Tribal Village experience</option>
                    <option value="Tribal cuisine">Tribal cuisine</option>
                    <option value="Dhimsa Dance">Dhimsa Dance</option>
                    <option value="Waterfalls">Waterfalls</option>
                    <option value="School Trips"> School Trips</option>
                    <option value="Others">Others</option>
                </select>

                <textarea
                    name="Message"
                    placeholder="Message"
                    className="w-full md:w-96 border-2 border-gray-200 rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full md:w-96 bg-gray-900 text-white rounded-lg p-2 my-2 focus:outline-none focus:border-gray-400"
                >
                    Place a call back
                </button>
            </form>
        </div>
    );
}
