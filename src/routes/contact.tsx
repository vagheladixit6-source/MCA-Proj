import { Headings } from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import { ContactMessage } from "@/types"; // your interface
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from "sonner";

export const ContactUs = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    message: "",
    createdAt: Timestamp.now(),
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", createdAt: Timestamp.now() });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-6 px-8">
      <Headings
        title="Contact Us"
        description="We'd love to hear from you! Please fill out the form below."
      />
      <Separator className="my-8" />

      {loading ? (
        <Skeleton className="h-64 rounded-md" />
      ) : submitted ? (
        <div className="text-center p-10 bg-green-100 rounded-md text-green-800 font-semibold text-lg">
          Thank you for contacting us! We will get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-md border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full rounded-md border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              className="w-full rounded-md border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
