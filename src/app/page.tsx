import Image from "next/image";
import IllustrationDesktop from "../../public/images/illustration-box-desktop.svg";
import OnlineMobile from "../../public/images/illustration-woman-online-mobile.svg";
import OnlineDesktop from "../../public/images/illustration-woman-online-desktop.svg";
import BgMobile from "../../public/images/bg-pattern-mobile.svg";
import BgDesktop from "../../public/images/bg-pattern-desktop.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  id: number;
  trigger: string;
  content: string;
}

export default function Home() {
  const Faq: Faq[] = [
    {
      id: 0,
      trigger: "How many team members can I invite?",
      content:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: 1,
      trigger: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 2,
      trigger: "How do I reset my password?",
      content:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: 3,
      trigger: "Can I cancel my subscription?",
      content:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: 4,
      trigger: "Do you provide additional support?",
      content:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <main className="min-h-screen w-screen bg-gradient bg-cover bg-no-repeat grid place-items-center py-8">
      <div className="bg-white rounded-3xl relative w-[90vw] mx-auto max-w-screen-md px-8 pb-16 pt-28 md:py-16 md:pl-0 md:pr-24 grid md:grid-cols-2 md:items-center shadow-2xl shadow-primary-blue">
        <div className="absolute -top-4 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-mobile bg-no-repeat bg-contain md:hidden bg-[0_90%] py-8">
          <Image src={OnlineMobile} alt="" loading="lazy" />
        </div>
        <Image
          src={IllustrationDesktop}
          alt=""
          loading="lazy"
          className="hidden md:block absolute top-[39%] -left-[14%] scale-[0.6] z-10"
        />
        <div className="md:overflow-hidden h-full">
          <div className="md:bg-desktop bg-no-repeat bg-contain bg-[0%_90%] relative -left-14 hidden md:grid md:gap-0 md:items-center md:h-full">
            <Image
              src={OnlineDesktop}
              alt=""
              loading="lazy"
              className="absolute -left-0"
            />
          </div>
        </div>
        <section className="grid gap-4">
          <h1 className="uppercase text-center md:text-left text-primary-blue text-4xl font-bold">
            faq
          </h1>
          <Accordion type="single" collapsible>
            {Faq.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </main>
  );
}
