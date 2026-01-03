import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";

export const AboutUs = () => {
  return (
    <div className="container mx-auto py-6 px-8">
      <Headings
        title="About MockEdge AI"
        description="AI driven mock interview platform to help you prepare better."
      />
      <Separator className="my-8" />

      <div className="space-y-6 max-w-4xl mx-auto text-neutral-700 text-base leading-relaxed">
        <p>
          Welcome to <strong>MockEdge AI</strong>, your ultimate platform for
          AI-driven mock interviews. Our mission is to empower job seekers and
          professionals by providing realistic, interactive interview
          experiences powered by cutting-edge artificial intelligence.
        </p>

        <p>
          At MockEdge AI, we understand that preparation is key to success.
          That’s why our platform offers tailored mock interviews that simulate
          real-world scenarios, helping you improve your skills, build
          confidence, and land your dream job.
        </p>

        <p>
          Our easy-to-use interface, comprehensive question bank, and detailed
          feedback system make MockEdge AI the perfect companion for your
          interview preparation journey.
        </p>

        {/* Sample images */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

          <div className="flex flex-col items-center">
            <img
              src="/assets/img/interview2.jpg"
              alt="AI powered platform"
              className="rounded-md shadow-md object-cover w-full h-48"
            />
            <p className="mt-2 text-sm text-neutral-600 text-center">
              AI-powered interview platform
            </p>
          </div>

          <div className="flex flex-col items-center">
            <video
              src="/assets/img/interview1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-md shadow-md object-cover w-full h-48"
            />
            <p className="mt-2 text-sm text-neutral-600 text-center">
              Realistic interview simulations
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/img/interview3.jpg"
              alt="User preparing for interview"
              className="rounded-md shadow-md object-cover w-full h-48"
            />
            <p className="mt-2 text-sm text-neutral-600 text-center">
              Users preparing with confidence
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
