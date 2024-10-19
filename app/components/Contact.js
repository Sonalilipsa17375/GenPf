// Contact.js
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-red-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <h2
                   className="text-center hover:underline"
                   href=
"https://instagram.com/geeks_for_geeks">
                    Phone No-
                    <span className="font-bold">
                        9998899999
                    </span>
                </h2>
                <a 
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://twitter.com/geeksforgeeks">
                    Email- 
                    <span className="font-bold">
                        sona8112@gmail.com
                    </span>
                </a>
            </div>
        </section>
    );
}
