export const caseStudiesData = {
  "gems-health-center": {
    name: "Gems Health Center",
    industry: "Healthcare",
    tagline: "Modern healthcare experience focused on accessibility and trust.",
    website: "https://gems-health-center.vercel.app/",
    image: "/images/projects/gems-health.png",
    overview: "Gems Health Center is a premier medical institution requiring a digital presence that balances medical authority with absolute user accessibility. The goal was to build a fluid portal where patients can explore clinical specialties, identify physicians, and schedule visits seamlessly.",
    challenge: {
      requirements: "The client requested a clean, accessible interface compliant with modern healthcare guidelines, offering instant loading and high mobile responsiveness.",
      businessProblem: "Traditional medical portals are often cluttered and confusing, leading to high drop-offs during appointment booking and an influx of avoidable support calls.",
      userChallenges: "Patients searching for immediate care are often stressed. Finding doctors and booking hours must be friction-free, load immediately, and feature legible typography.",
      industryChallenges: "Regulatory compliance, data security, and service reliability across fluctuating network connections are absolute priorities in healthcare portals."
    },
    strategy: {
      uxPlanning: "We mapped user journeys starting from direct organic search landing pages straight to the primary action button to booking confirmation in under 3 clicks.",
      infoArchitecture: "A highly structured catalog grouping medical departments logically under Clinical Specialties, alongside an intuitive Doctor Directory.",
      wireframes: "We designed desktop-first and mobile-first layouts prioritising contact numbers and booking widgets immediately in the header viewport.",
      designDecisions: "We selected a pure black and white theme with soft grey boundaries to reflect hygiene, simplicity, and professionalism, without typical bright hospital teals."
    },
    designSystem: {
      typography: "Space Grotesk for bold headers to convey modern stability; Inter for system body text to guarantee maximum contrast and legibility.",
      spacing: "A strict 8px layout grid with wide 120px padding gaps between sections to let elements breathe and avoid visual strain.",
      philosophy: "Content-first minimalism. We eliminated stock medical graphics in favor of clean layouts and modern iconography detailing clinics.",
      components: "Reusable cards for doctor profiles, responsive calendars, and clear, descriptive booking buttons.",
      hierarchy: "Large titles leading to crisp descriptive paragraphs, with high contrast primary interaction widgets."
    },
    process: {
      planning: "Weeks 1-2: Gathering requirements, stakeholder interviews, user persona mapping.",
      design: "Weeks 3-4: Constructing interactive wireframes, final layouts, and accessible component definitions.",
      development: "Weeks 5-8: React integration, setting up state systems, and responsive layout styling.",
      testing: "Week 9: Conducting extensive lighthouse checks, screen reader validations, and browser testing.",
      launch: "Week 10: Server hosting, production build pipeline setup, and domain pointing."
    },
    features: [
      { title: "Specialist Directory", desc: "An advanced, searchable index of all physicians with filtering by department, language, and availability." },
      { title: "Appointment Workflows", desc: "A smooth, step-by-step booking form built using light React state systems and instant confirmation alerts." },
      { title: "Mobile Accessibility", desc: "A completely responsive layout optimized for mobile screens, conforming to WCAG contrast standards." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "GSAP", "Vite"],
    results: [
      { number: "40%", label: "Increase in Bookings" },
      { number: "99%", label: "Lighthouse Performance" },
      { number: "30%", label: "Reduced Support Calls" }
    ]
  },
  "restroie": {
    name: "Restroie",
    industry: "Restaurant",
    tagline: "Elegant restaurant platform with immersive dining experience.",
    website: "https://restroie.vercel.app/",
    image: "/images/projects/restroie.png",
    overview: "Restroie is a luxury culinary brand that needed a web presence reflecting its fine dining excellence. We designed a dark-toned visual story highlighting artisanal dishes and integrating a booking flow to capture diners before they leave the page.",
    challenge: {
      requirements: "Deliver a visually immersive dining site that showcases high-quality culinary photography without compromising speed, combined with table reservation functions.",
      businessProblem: "Third-party reservation portals charge high margins. Restroie needed an independent portal to drive direct table bookings and build customer loyalty.",
      userChallenges: "Users looking for fine dining want to see the atmosphere, menu items, and secure a reservation in seconds. Delays or cluttered menus cause instant departures.",
      industryChallenges: "Integrating reservation times with physical kitchen capacity, managing peak dinner hours, and rendering heavy imagery on cellular mobile networks."
    },
    strategy: {
      uxPlanning: "We planned the page as an online journey, moving from atmospheric hero images to curated menus, culminating in a table scheduler.",
      infoArchitecture: "A clear structural separation between Menu, About the Chef, Reservation Form, and Location coordinates.",
      wireframes: "Bold typography offsets, large image blocks with smooth parallax movement, and static overlay buttons for booking.",
      designDecisions: "A dark editorial layout to mimic atmospheric candle-lit tables, leveraging high-contrast white serif typography."
    },
    designSystem: {
      typography: "Playfair Display paired with Inter to create a premium, editorial magazine style.",
      spacing: "Massive spacing blocks to mimic visual luxury, where image elements exist as independent art installations.",
      philosophy: "Elegant minimalism. Images do the talking, supported by minimal typography.",
      components: "Menu item listings, date-picker widgets, and visual review sliders.",
      hierarchy: "Dominant image banners followed by layout grids and subtle contact buttons."
    },
    process: {
      planning: "Weeks 1-2: Brand positioning analysis, layout discovery, target audience mapping.",
      design: "Weeks 3-5: UI design, image preparation, typography testing.",
      development: "Weeks 6-8: Setting up interactive transitions and lazy image loads in React.",
      testing: "Week 9: Responsive testing, performance optimization.",
      launch: "Week 10: Vercel deployment, setting up custom domain names."
    },
    features: [
      { title: "Table Scheduler", desc: "An inline booking engine allowing diners to reserve specific hours and seating arrangements." },
      { title: "Visual Digital Menu", desc: "A fast-loading, categorized menu detailing dietary preferences, allergens, and ingredients." },
      { title: "Immersive Parallax", desc: "A series of smooth scrolling layout blocks highlighting restaurant aesthetics." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite"],
    results: [
      { number: "55%", label: "Direct Reservations" },
      { number: "95%", label: "Lighthouse Score" },
      { number: "2x", label: "Page Views Increase" }
    ]
  },
  "haya-mart": {
    name: "Haya Mart",
    industry: "E-Commerce",
    tagline: "Modern shopping platform built for seamless online purchasing.",
    website: "https://haya-mart-eta.vercel.app/",
    image: "/images/projects/haya-mart.png",
    overview: "Haya Mart required an e-commerce platform that challenges traditional cluttered storefronts. We constructed a high-end shopping experience featuring clean layout grids, large product listings, and an optimized, checkout funnel.",
    challenge: {
      requirements: "Construct a robust online shop with dynamic product filtering, persistent shopping cart capabilities, and a lightning-fast checkout flow.",
      businessProblem: "Cart abandonment rates in standard e-commerce platforms average 70%. Cluttered screens and complex multi-page checkouts are the main reasons.",
      userChallenges: "Shoppers want to discover items, review details, select options, and check out without feeling overwhelmed by popups and banners.",
      industryChallenges: "Inventory synchronisation, secure payment gateway integrations, and fast rendering of large catalogs on mobile browsers."
    },
    strategy: {
      uxPlanning: "We simplified the conversion funnel. Products are added to a slide-out cart drawer, and checkout is completed on a single, clean page.",
      infoArchitecture: "Flat layout categories enabling users to find any item in two clicks. Filters are collapsible to save mobile space.",
      wireframes: "Grid-based product galleries, clean checkout fields with clear validation indicators.",
      designDecisions: "Pure black and white grid system with minimal borders to focus customer eyes purely on high-resolution product photography."
    },
    designSystem: {
      typography: "Inter font family across all components for clean, technical legibility.",
      spacing: "Uniform grid gaps, with clear separation between item name, price, and CTA buttons.",
      philosophy: "Functional minimalism. Eliminating unnecessary details, prioritizing item dimensions and material clarity.",
      components: "Product grid cards, filter slide-outs, floating cart counters.",
      hierarchy: "Dominant product imagery with clean metadata, leading to clear call-to-actions."
    },
    process: {
      planning: "Weeks 1-2: Product taxonomy definitions, checkout flow mapping.",
      design: "Weeks 3-5: Interface layouts, checkout forms design, filter UI wireframing.",
      development: "Weeks 6-9: Redux/State integration, cart actions, responsive layout grids.",
      testing: "Week 10: Checkout validation checks, API loading speeds.",
      launch: "Week 11: Production deployment and integration checks."
    },
    features: [
      { title: "Unified Catalog", desc: "A clean product catalog with real-time text searching and instant parameter filtering." },
      { title: "Slide-Out Cart", desc: "A responsive cart drawer updating items and prices instantly without page reloads." },
      { title: "One-Page Checkout", desc: "An optimized checkout page reducing fields and focusing on swift payment completion." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite"],
    results: [
      { number: "35%", label: "Lower Abandonment" },
      { number: "1.2s", label: "Average Page Load" },
      { number: "48%", label: "Mobile Sales Increase" }
    ]
  },
  "messmate": {
    name: "MessMate",
    industry: "Hostel Food Delivery",
    tagline: "Seamless food ordering platform connecting mess owners with hostel residents.",
    website: "https://messmate-ind.vercel.app/",
    image: "/images/projects/messmate.png",
    overview: "MessMate is a custom food ordering and delivery web application built to empower local mess owners. The app enables them to list menus, collect daily meal pre-orders from college hostel students, coordinate bulk deliveries, and track hostel gate drop-offs in real-time.",
    challenge: {
      requirements: "Create an intuitive mobile interface for students to order meals, alongside an operations dashboard for mess owners to organize bulk delivery schedules.",
      businessProblem: "Mess owners faced erratic order counts, leading to massive food waste or shortages, combined with disorganized delivery logistics across hostel blocks.",
      userChallenges: "Students need a rapid way to pre-order meals within strict time cut-offs, choose delivery windows, and submit exact hostel block numbers in seconds.",
      industryChallenges: "Coordinating high-volume concurrent orders during narrow meal break windows, and ensuring temperature quality and roster accuracy."
    },
    strategy: {
      uxPlanning: "We simplified the ordering funnel. Students can select their daily meal plan and confirm hostel block numbers in under two steps.",
      infoArchitecture: "A clear structure separating the Student Meal Menu, Order Tracking interface, and Mess Operator kitchen-prep queues.",
      wireframes: "A card-based meal directory, clean input fields for hostel blocks, and a persistent delivery status timeline.",
      designDecisions: "A high-contrast grid design focusing strictly on food listings, pricing transparency, and real-time delivery countdowns."
    },
    designSystem: {
      typography: "Space Grotesk for metrics and active order IDs; Inter for menus and system instructions.",
      spacing: "Compact grid padding to display all meal options clearly on mobile screens without scroll fatigue.",
      philosophy: "Speed-first minimalism. Eliminating heavy banners to keep menu options and checkout triggers primary.",
      components: "Meal card items, progress trackers, delivery wing selectors.",
      hierarchy: "Immediate order window countdowns, leading to menu categories and direct checkout buttons."
    },
    process: {
      planning: "Weeks 1-2: Interviewing mess operators, mapping hostel delivery points.",
      design: "Weeks 3-4: UI design, order status components, responsive layouts.",
      development: "Weeks 5-8: State systems configuration, cart setups, database mapping.",
      testing: "Week 9: Heavy traffic load simulations, gateway checks.",
      launch: "Week 10: Production release and field testing."
    },
    features: [
      { title: "Daily Meal Selector", desc: "A clean catalog for hostel residents to place single or recurring meal orders with clear cut-off times." },
      { title: "Kitchen Dispatch System", desc: "A dashboard for mess owners to auto-compile delivery lists sorted by hostel gates and wing rooms." },
      { title: "Roster Manager", desc: "A dashboard grouping active deliveries by hostel name, block number, and room wing." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "ASP.NET Core", "SQL Server", "Vite"],
    results: [
      { number: "90%", label: "Order Accuracy" },
      { number: "35%", label: "Reduced Waste" },
      { number: "95%", label: "Delivery Speed" }
    ]
  },
  "ananya-rahul": {
    name: "Ananya Rahul",
    industry: "Wedding Invitation Digital",
    tagline: "Personalized digital invitation experience.",
    website: "https://ananyarahul.vercel.app/",
    image: "/images/projects/ananya-rahul.png",
    overview: "Ananya Rahul is a personalized, luxury digital wedding invitation platform. We crafted a highly elegant website that details invitation events, tells the couple's story, maps directions, and manages guest RSVPs in a single visual experience.",
    challenge: {
      requirements: "Build an exquisite digital invitation with smooth scrolling storytelling, an RSVP collection system, and integration with mapping platforms.",
      businessProblem: "Physical invitation cards are costly to distribute globally and cannot collect RSVPs dynamically, causing major planning headaches for couples.",
      userChallenges: "Guests of varying ages must navigate the page, find event dates, read accommodations, and submit RSVP responses easily on their smartphones.",
      industryChallenges: "Ensuring cross-device compatibility for older mobile browsers, and managing immediate peaks in traffic when links are shared."
    },
    strategy: {
      uxPlanning: "A continuous vertical story that flows from header visual to story, event details, and finishes with the RSVP form.",
      infoArchitecture: "Sections ordered by logical guest priorities: Date & Time, Venue Map, Story, and RSVP Submit.",
      wireframes: "Delicate serif titles, layout grids showcasing high-quality couple photography, and centered forms.",
      designDecisions: "A refined white and soft-gold layout theme to evoke luxury celebration feelings, using high-end spacing."
    },
    designSystem: {
      typography: "Playfair Display for romantic headers; Inter for informational details.",
      spacing: "Generous whitespace margins to reflect the luxury of high-end stationary.",
      philosophy: "Sophisticated minimalism. Combining classic serif layouts with modern UI components.",
      components: "Countdown timers, interactive venue maps, custom RSVP inputs.",
      hierarchy: "Central hero message followed by card components and direct RSVP triggers."
    },
    process: {
      planning: "Week 1: Concept development, assets compilation.",
      design: "Weeks 2-3: Layout mockups, font selection, photo treatment.",
      development: "Weeks 4-5: Creating scrolling animations, form integration.",
      testing: "Week 6: Mobile testing, form validation checks.",
      launch: "Week 7: Domain launch and analytics tracking."
    },
    features: [
      { title: "RSVP Manager", desc: "A clean database-linked guest form collecting attendance, diet, and guest counts." },
      { title: "Countdown & Maps", desc: "An active digital timer combined with inline Google Maps directions for venues." },
      { title: "Interactive Timeline", desc: "A narrative timeline detailing events from ceremony to reception in order." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite"],
    results: [
      { number: "400+", label: "RSVPs Managed" },
      { number: "100%", label: "Digital Delivery" },
      { number: "97%", label: "Mobile Engagement" }
    ]
  },
  "nuhart": {
    name: "Nuhart",
    industry: "Calligraphy & Artwork",
    tagline: "Creative platform showcasing artistic expression.",
    website: "https://nuhart.vercel.app/",
    image: "/images/projects/nuhart.png",
    overview: "Nuhart is a creative artwork portfolio built to highlight modern calligraphy, custom lettering, and handcrafted artistic expressions. We constructed a gallery experience that lets the artwork dominate the screen.",
    challenge: {
      requirements: "Deliver a high-fidelity gallery layout with smooth panning views, quick load times, and custom inquiry options.",
      businessProblem: "Art portfolios are often hosted on generic platforms that look template-like, which devalues the bespoke quality of physical, hand-drawn art.",
      userChallenges: "Art buyers want to view brush strokes in high detail, browse collections without lagging scroll containers, and request custom orders.",
      industryChallenges: "Balancing high-resolution artwork uploads with fast page speed performance metrics."
    },
    strategy: {
      uxPlanning: "We planned the page as an online art exhibition, featuring large fullscreen grids and minimal text overlays.",
      infoArchitecture: "Collections divided by style (Calligraphy, Lettering, Canvas) with a direct Custom Request gateway.",
      wireframes: "A clean magazine-style grid featuring large asymmetrical image containers.",
      designDecisions: "Pure black and white gallery theme. Visual focus remains 100% on the art pieces."
    },
    designSystem: {
      typography: "Space Grotesk for titles; Inter for dimensions, medium descriptions, and prices.",
      spacing: "Asymmetrical layout gaps to echo creative expression and avoid corporate grids.",
      philosophy: "Exhibition-first design. Let the physical craftsmanship speak for itself.",
      components: "Artwork grid elements, image modal zooms, inquiry sheets.",
      hierarchy: "Hero art banner, followed by categorized gallery lists and contact forms."
    },
    process: {
      planning: "Weeks 1-2: Gathering art assets, setting scale targets.",
      design: "Weeks 3-4: Editorial layout design, image optimization.",
      development: "Weeks 5-7: Building responsive galleries and smooth modal states in React.",
      testing: "Week 8: Performance checks, image load parameters.",
      launch: "Week 9: Domain configuration, SEO setup."
    },
    features: [
      { title: "Art Gallery Grid", desc: "An asymmetrical, lazy-loading showcase grid optimized for high-resolution images." },
      { title: "Interactive Modal", desc: "A premium light-box overlay enabling detailed panning views of physical calligraphy." },
      { title: "Bespoke Request", desc: "A streamlined commission form capturing dimensions, media preferences, and references." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "GSAP", "Vite"],
    results: [
      { number: "70%", label: "Inquiry Growth" },
      { number: "99%", label: "SEO Score" },
      { number: "96%", label: "Accessibility Score" }
    ]
  },
  "felora": {
    name: "Felora",
    industry: "Fashion & Lifestyle",
    tagline: "Contemporary fashion and lifestyle brand experience.",
    website: "https://felora-teal.vercel.app/",
    image: "/images/projects/felora.png",
    overview: "Felora is a contemporary fashion brand requiring a digital home that speaks luxury, style, and seasonal stories. We delivered a layout inspired by luxury fashion lookbooks, utilizing high-quality transitions and editorial typography.",
    challenge: {
      requirements: "Deliver a fluid visual fashion catalogue that changes seasons dynamically and guides customers to retail outlets or stock lists.",
      businessProblem: "Fashion brands lose prestige when hosted on generic shopping layouts. Felora needed a customized lookbook that highlights brand values.",
      userChallenges: "Users want to browse lookbooks, check sizing details, explore fabrics, and locate retail locations without clunky interfaces.",
      industryChallenges: "Representing high-fidelity textile textures and color accuracy on varying display monitors."
    },
    strategy: {
      uxPlanning: "Focus on visual flows. Large fullscreen banners transition smoothly, telling a story before showing product sheets.",
      infoArchitecture: "Simple structure: Seasonal Campaigns, Editorial Lookbook, Store Finder.",
      wireframes: "Stark layout structures, large typography accents, fullscreen model galleries.",
      designDecisions: "A luxury editorial theme utilizing thin lines, stark borders, and massive whitespace frames."
    },
    designSystem: {
      typography: "Playfair Display paired with Inter for classic high-fashion editorial aesthetics.",
      spacing: "Extreme whitespace padding to convey exclusivity and elite brand value.",
      philosophy: "Lookbook minimalism. Eliminating buttons in favor of swipe motions and typography links.",
      components: "Campaign slider blocks, stock list directories, retail store locators.",
      hierarchy: "Stark campaign images, leading to editorial descriptions and collection lists."
    },
    process: {
      planning: "Weeks 1-2: Brand guide alignment, campaign asset collection.",
      design: "Weeks 3-5: Designing lookbook flows, hover effects, store locator maps.",
      development: "Weeks 6-8: Setting up transitions, video embeds, and grids in React.",
      testing: "Week 9: Optimization for high-end mobile screens.",
      launch: "Week 10: Production release on Vercel."
    },
    features: [
      { title: "Editorial Lookbook", desc: "An interactive digital showroom presenting seasonal collections with fluid transitions." },
      { title: "Campaign Slider", desc: "A fullscreen slide showcase optimized for video backgrounds and model showcases." },
      { title: "Retail Directory", desc: "A clean, responsive map database listing physical retail outlets and store partners." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "GSAP", "Vite"],
    results: [
      { number: "45%", label: "Engagement Increase" },
      { number: "95%", label: "Performance Score" },
      { number: "3x", label: "Stockist Inquiries" }
    ]
  },
  "zetrotech": {
    name: "ZetroTech",
    industry: "Technology",
    tagline: "Modern educational and technology-focused platform.",
    website: "https://zetrotech.vercel.app/",
    image: "/images/projects/zetrotech.png",
    overview: "ZetroTech is a learning platform that makes modern technology, coding, and engineering concepts accessible. We constructed a web platform featuring dashboard interfaces, structured curriculum maps, and modular classrooms.",
    challenge: {
      requirements: "Build an educational site showing course modules, learning paths, tech stacks, and user progress trackers.",
      businessProblem: "Many technical educational portals are dry, hard to navigate, and fail to keep students engaged due to boring interfaces.",
      userChallenges: "Students want a clean, organized learning dashboard where they can see their path, select modules, and track progress.",
      industryChallenges: "Structuring diverse curricula into a unified UI, and keeping the frontend fast with dynamic content updates."
    },
    strategy: {
      uxPlanning: "We organized the page into code modules. Users see clear, interactive learning nodes that highlight progress.",
      infoArchitecture: "A clear structural tree: Curriculum Tracks, Course Dashboard, Student Profile.",
      wireframes: "Grid-based dashboards, crisp typography, responsive dashboard sidebars.",
      designDecisions: "A tech-inspired dark-mode layout with precise borders and clean code blocks."
    },
    designSystem: {
      typography: "Fira Code or Space Grotesk for technical tags and code outputs; Inter for system labels.",
      spacing: "Structured grid layouts aligning text, cards, and modules with pixel precision.",
      philosophy: "Technical clarity. Prioritising curriculum trees, code samples, and course progress.",
      components: "Curriculum modules, code display boxes, progress charts.",
      hierarchy: "Course headers, followed by structured tracks and modular coding lessons."
    },
    process: {
      planning: "Weeks 1-2: Course outline analysis, database schema, user journeys.",
      design: "Weeks 3-4: Dashboard layout, progress charts, interface designs.",
      development: "Weeks 5-8: State controls, curriculum rendering, grid alignments.",
      testing: "Week 9: Testing interactive charts and responsive layouts.",
      launch: "Week 10: Production server hosting, configuration setup."
    },
    features: [
      { title: "Curriculum Map", desc: "An interactive tree layout detailing coding courses, modules, and lessons." },
      { title: "Course Dashboard", desc: "A dashboard displaying course videos, coding exercises, and student notes." },
      { title: "Progress Tracker", desc: "A real-time progress indicator visualizing completed lessons and grades." }
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite"],
    results: [
      { number: "50%", label: "Course Completion" },
      { number: "97%", label: "Lighthouse Score" },
      { number: "4.8/5", label: "Student Rating" }
    ]
  }
};
