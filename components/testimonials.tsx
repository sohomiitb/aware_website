import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I’m not alone. Nearly nine in 10 U.S. adults struggle to understand and use health information, which leads to worse outcomes and more than $200 billion in avoidable healthcare costs every year. Patients often feel powerless in their own care, and dependent on others to explain what’s happening in their bodies.",
      name: "Fidji Simo",
      title: "CEO, Open AI Applications",
      avatar: "FS",
    },
    {
      quote:
        "Today’s health management systems… are all hospital-centric, not patient-centric… Your data is scattered among a dozen or two dozen separate databases, one for every provider you’ve ever visited. This fragmentation causes tremendous problems.",
      name: "Larry Ellison",
      title: "CEO, Oracle",
      avatar: "LE",
    },
    {
      quote:
        "Much of what physicians do (checkups, testing, diagnosis, prescription, behavior modification, etc.) can be done better by sensors, passive and active data collection, and analytics. But, doctors aren't supposed to just measure. They're supposed to consume all that data, consider it in context of the latest medical findings and the patient's history, and figure out if something's wrong.",
      name: "Vindo Khosla",
      title: "Founder, Khosla Ventures",
      avatar: "VK",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Future of Healthcare.   
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See what the leaders of AI and healthcare have to say.           
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
