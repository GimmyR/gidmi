import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Gidmi",
    description: "You can contact us with this page."
};

export default async function ContactPage() {
    return (
        <div className="min-vh-100 mt-5 pt-5">
            <Contact/>
        </div>
    );
}