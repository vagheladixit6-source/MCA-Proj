import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, ChartLine, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "AI-Powered Mock Interviews",
      description:
        "Experience realistic interview sessions with our advanced AI interviewer that adapts to your skills and chosen role.",
      icon: <Brain className="w-10 h-30 text-blue-600" />,
      image: "/assets/img/service1.jpg",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Get instant, detailed insights on your answers, tone, and confidence — helping you improve after every session.",
      icon: <MessageSquare className="w-10 h-30 text-green-600" />,
      image: "/assets/img/service2.jpg",
    },
    {
      title: "Performance Analytics",
      description:
        "Track your growth over time with AI-generated performance reports and improvement suggestions tailored just for you.",
      icon: <ChartLine className="w-10 h-30 text-purple-600" />,
      image: "/assets/img/service3.jpg",
    },
    {
      title: "Multi-Role Interview Practice",
      description:
        "Prepare for technical, HR, and behavioral rounds with our dynamic, scenario-based AI modules.",
      icon: <Users className="w-10 h-30 text-orange-600" />,
      image: "/assets/img/service4.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-6 px-8">
      <Headings
        title="Our Services"
        description="Discover the powerful tools that make MockEdge AI your best interview preparation partner."
      />

      <Separator className="my-8" />

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 border border-neutral-200 bg-white"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                {service.icon}
                <CardTitle className="text-xl font-semibold text-neutral-900">
                  {service.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="text-neutral-600 text-base text-center px-4 pb-6">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
