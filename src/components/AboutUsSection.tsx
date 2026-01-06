import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Heart, Shield, Users, Award, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUsSection() {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every decision we make is guided by our love for animals and commitment to their wellbeing."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We verify all shelters and provide secure transactions to ensure safe adoptions."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a network of pet lovers, volunteers, and advocates working together."
    }
  ];

  const stats = [
    { icon: Heart, number: "50K+", label: "Pets Adopted" },
    { icon: Users, number: "200+", label: "Partner Shelters" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Target, number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">About Wow Pets Palace</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Connecting Hearts,
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Changing Lives</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2020, we've been on a mission to make pet adoption easier, more accessible, 
            and more successful for both pets and their human families.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wow Pets Palace was born from a simple belief: every pet deserves a loving home, 
                and every family deserves the perfect companion. What started as a small local 
                initiative has grown into a comprehensive platform connecting thousands of pets 
                with their forever families.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work tirelessly with verified shelters, rescue organizations, and responsible 
                breeders to ensure that every pet on our platform is healthy, happy, and ready 
                for their new adventure.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize pet adoption by creating a trusted, user-friendly platform that 
                makes finding the perfect pet companion as easy and joyful as it should be, while 
                supporting animal welfare organizations worldwide.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600"
                  alt="Happy pets and owners"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">Award Winner</span>
                </div>
                <p className="text-sm text-muted-foreground">Best Pet Platform 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/90 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Meet Our Team</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our passionate team of pet lovers, developers, and animal welfare advocates 
            work around the clock to make pet adoption dreams come true.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
}