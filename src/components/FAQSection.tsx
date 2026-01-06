import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: "How do I adopt a pet through Wow Pets Palace?",
      answer: "Adopting a pet is simple! Browse our available pets, click on one you're interested in, fill out our adoption application, and we'll connect you with the shelter or rescue organization. They'll guide you through their specific adoption process, which may include a meet-and-greet, home visit, and adoption fee."
    },
    {
      question: "Are all pets on your platform vaccinated and health-checked?",
      answer: "Yes! We work only with verified shelters and rescue organizations that ensure all pets are up-to-date on vaccinations, spayed/neutered (when age appropriate), and have received proper medical care. Each pet's medical history and current health status is provided in their profile."
    },
    {
      question: "What if I need to return an adopted pet?",
      answer: "While we hope every adoption is successful, we understand that sometimes circumstances change. Most of our partner shelters have return policies in place. Contact us immediately if you're facing challenges - we offer support resources and can facilitate the return process if absolutely necessary."
    },
    {
      question: "How much do pet adoptions cost?",
      answer: "Adoption fees vary by shelter and pet type, typically ranging from $50-$500. These fees help cover the pet's medical care, vaccinations, spaying/neutering, and shelter operations. The exact fee is listed on each pet's profile, and some shelters offer special promotions or reduced fees for senior pets."
    },
    {
      question: "Can I adopt if I live in an apartment?",
      answer: "Absolutely! Many pets are perfectly suited for apartment living. When browsing pets, look for those marked as 'apartment-friendly.' Consider factors like the pet's size, energy level, and exercise needs. Some shelters may require landlord approval or pet deposits."
    },
    {
      question: "Do you offer pet supplies and products?",
      answer: "Yes! Our marketplace features a wide range of pet supplies including food, toys, bedding, grooming products, and accessories. We partner with trusted retailers to offer quality products at competitive prices, with convenient delivery options."
    },
    {
      question: "How do I know if a pet is right for my family?",
      answer: "Each pet profile includes detailed information about temperament, energy level, compatibility with children and other pets, and special needs. We also offer a pet compatibility quiz and encourage meeting pets in person. Our support team can help match you with the perfect companion."
    },
    {
      question: "What support do you provide after adoption?",
      answer: "We provide ongoing support including access to training resources, veterinary guidance, behavioral tips, and a community forum. Our customer support team is available 24/7, and many of our partner shelters offer post-adoption support as well."
    },
    {
      question: "How do I list my pet for adoption if I can't keep them?",
      answer: "If you need to rehome your pet, we recommend contacting local shelters or rescue organizations first. We can help connect you with appropriate resources. For safety reasons, we don't facilitate direct owner-to-owner transfers, but we can guide you to reputable organizations."
    },
    {
      question: "Are there age restrictions for pet adoption?",
      answer: "Generally, you must be 18 or older to adopt independently. Some shelters may allow younger adopters with parental consent and involvement. Age requirements may vary by location and shelter policies. Contact us for specific guidance based on your situation."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "1-800-WOW-PETS"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed questions",
      action: "support@wowpetspalace.com"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Got Questions?
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> We've Got Answers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about pet adoption, our services, and how to get started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Support Options */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Still Need Help?</h3>
            <p className="text-muted-foreground">Our support team is here to assist you every step of the way</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">{option.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        {option.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary to-secondary rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your Perfect Pet?</h3>
          <p className="text-white/90 mb-6">
            Join thousands of happy pet parents who found their companions through Wow Pets Palace
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Pet Journey
          </Button>
        </div>
      </div>
    </section>
  );
}