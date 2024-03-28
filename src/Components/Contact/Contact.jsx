const Contact = () => {
    return (
        <div className="max-w-md mx-auto mt-12 shadow-xl p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
                </div>

                <button type="submit" className="bg-[#23BE0A] text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
