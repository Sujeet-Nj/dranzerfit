export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-tips-for-beginners",
    title: "5 Tips Every Beginner Should Know Before Starting the Gym",
    excerpt:
      "Starting your fitness journey can feel overwhelming. Here are 5 practical tips to set you up for success.",
    content:
      "Starting your fitness journey can feel overwhelming, but it doesn't have to be. First, focus on consistency over intensity — showing up three times a week for a month beats one brutal session followed by two weeks off. Second, learn proper form before adding heavy weight; watching tutorials or asking gym staff prevents injury. Third, track your workouts, even simply in a notes app, so you can see progress over time. Fourth, prioritize sleep and nutrition alongside training, since recovery is where actual muscle growth happens. Finally, be patient with yourself. Visible results take weeks to months, not days, and sticking with the process matters more than any single workout.",
    category: "Beginner",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    slug: "protein-myths-debunked",
    title: "Protein Myths Debunked: What You Actually Need to Know",
    excerpt:
      "There's a lot of misinformation about protein intake. Let's separate fact from fiction.",
    content:
      "Protein is one of the most misunderstood topics in fitness. A common myth is that you need enormous amounts of protein to build muscle — in reality, most active individuals thrive on roughly 1.6 to 2.2 grams per kilogram of bodyweight daily, not the excessive amounts often marketed by supplement companies. Another myth is that protein timing (the so-called anabolic window) is critical; while spreading intake across the day helps, total daily protein matters far more than eating it within a specific 30-minute window. Finally, plant-based protein sources are frequently dismissed as inferior, but a varied plant-based diet can absolutely meet all essential amino acid needs.",
    category: "Nutrition",
    date: "June 8, 2026",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    slug: "recovery-and-rest-days",
    title: "Why Rest Days Are Just as Important as Training Days",
    excerpt:
      "Skipping rest days might feel productive, but it could be sabotaging your progress.",
    content:
      "It's tempting to think more training always equals more progress, but your body actually builds muscle and gets stronger during rest, not during the workout itself. Training breaks down muscle fibers; recovery is when they repair and grow back stronger. Skipping rest days consistently can lead to overtraining syndrome, characterized by fatigue, irritability, and even decreased performance. Aim for at least one to two full rest days per week, and consider active recovery like walking or light stretching on those days. Sleep is equally critical, as most muscle repair and hormone regulation happens during deep sleep. Treat rest as a training tool, not a lack of discipline.",
    category: "Recovery",
    date: "May 29, 2026",
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=800&q=80",
  },
];