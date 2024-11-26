import { MapPin, Phone, Mail, Wifi, Coffee, Utensils, Car, TreePine, Mountain, Camera } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Map from './components/Map';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  const amenities = [
    { icon: Wifi, label: 'Free Wi-Fi' },
    { icon: Coffee, label: 'Complimentary Breakfast' },
    { icon: Utensils, label: 'Traditional Cuisine' },
    { icon: Car, label: 'Parking Space' },
  ];

  const attractions = [
    { icon: TreePine, label: 'Nature Walks' },
    { icon: Mountain, label: 'Bird Watching' },
    { icon: Camera, label: 'Photography Tours' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section id="home" className="pt-32 bg-gradient-to-b from-emerald-50 to-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the Magic of SON BEEL
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Immerse yourself in the tranquil beauty of Assam's largest wetland from our cozy homestay. 
              Where traditional hospitality meets modern comfort.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Book Your Stay
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop"
              alt="Son Beel Homestay"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Accommodation */}
      <Section id="accommodation" className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Accommodations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Comfortable Rooms</h3>
            <p className="text-gray-600">
              Our rooms are thoughtfully designed to provide maximum comfort while maintaining the authentic charm of traditional Assamese architecture. Each room features modern amenities while offering stunning views of Son Beel or our garden.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Spacious rooms with private balconies</li>
              <li>Traditional and modern furnishings</li>
              <li>En-suite bathrooms</li>
              <li>Daily housekeeping service</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
              alt="Room Interior"
              className="rounded-lg object-cover h-full w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
              alt="Room View"
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>

      {/* Amenities */}
      <Section id="amenities" className="bg-emerald-50">
        <h2 className="text-3xl font-bold text-center mb-12">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="text-center">
              <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                <Icon size={24} className="text-emerald-600" />
              </div>
              <h3 className="font-medium">{label}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Attractions */}
      <Section id="attractions" className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Local Attractions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-gray-50 p-6 rounded-lg">
              <Icon size={24} className="text-emerald-600 mb-4" />
              <h3 className="font-medium mb-2">{label}</h3>
              <p className="text-gray-600">
                Explore the natural wonders of Son Beel and its surroundings through guided experiences.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" className="bg-emerald-50">
        <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            // "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop",
            // "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
            // "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop",
            // "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
            // "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop",
            // "https://images.unsplash.com/photo-1433477155337-9aea4e790195?q=80&w=2070&auto=format&fit=crop"
            "./media/p1.png",
            "./media/p2.jpeg",
            // "./media/p3.jpg",
            "./media/p3.jpg",
            "./media/p4.jpg",
            "./media/p5.jpg",
            "./media/p8.png"
          ].map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <img 
                src={src}
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="text-emerald-600" />
              <span>Son Beel, Karimganj District, Assam, India</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-emerald-600" />
              <span>+91 9101329707</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-emerald-600" />
              <span>travelsribhumi@gmail.com</span>
            </div>
            <Map />
          </div>
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;