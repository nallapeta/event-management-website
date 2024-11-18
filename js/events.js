const eventsData = [
    {
        image: "/img/jazz.jpg",
        title: "Jazz Under the Stars",
        description: "Immerse yourself in an unforgettable evening of live jazz music under the stars at our annual Jazz Under the Stars event. Held at the stunning Skyline Amphitheater, this outdoor concert brings together some of the best jazz musicians for a night filled with smooth melodies and captivating rhythms. The evening will feature a variety of performances, from classic jazz standards to contemporary interpretations, set against the backdrop of a breathtaking night sky. Whether you're a long-time jazz enthusiast or new to the genre, this event promises to offer something for everyone. Enjoy delicious food from local vendors, sip on handcrafted cocktails, and relax as the music fills the air. This is the perfect event for a romantic date night, a group of friends, or anyone looking to unwind and enjoy the magic of live music in an incredible setting.",
        date: "2024-12-02",
        location: "Skyline Amphitheater",
        cost: "Free",
        organiser: "Night Sky Events"
    },
    {
        title: "Space Exploration Summit",
        description: "Join us for the Space Exploration Summit, where leading scientists, astronauts, and engineers come together to explore the future of space exploration. This event will delve into the exciting advancements in interplanetary travel, focusing on the latest developments in spacecraft technology, mission planning, and the search for habitable planets. The summit will feature keynote speakers from top space agencies and private space companies, as well as panel discussions on the challenges and opportunities that lie ahead for humanity's journey to the stars. If you're passionate about the future of space and want to be part of the conversation, this summit is for you. Attendees will also have the chance to network with industry experts, participate in hands-on workshops, and experience the latest space-related innovations.",
        date: "2024-11-20",
        location: "Space Research Center",
        cost: 75,
        organiser: "Global Space Alliance",
        image: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg"
    },
    {
        title: "Pop Fusion Fest",
        description: "Dive into a sensational evening of pop music at 'Pop Fusion Fest,' where today's biggest chart-toppers hit the stage for an unforgettable concert experience. Hosted at the vibrant CityPulse Arena, this event will feature electrifying performances, dazzling visuals, and non-stop energy. From catchy beats to heart-thumping anthems, get ready to sing along and dance the night away. Whether you're a fan of upbeat pop hits or soulful ballads, this event promises something for everyone. Grab your friends, enjoy great food and drinks, and be part of a night full of music, fun, and memories!",
        date: "2024-12-05",
        location: "CityPulse Arena",
        cost: 60,
        organiser: "Starburst Events",
        image: "https://img.freepik.com/premium-photo/photo-pop-star-concert-front-crowd-people_849906-14475.jpg?w=1200"
    },
    {
        title: "Neon Nights Live",
        description: "Step into a world of vibrant lights and catchy pop tunes at 'Neon Nights Live,' a concert that brings the hottest pop stars together on one stage. Taking place at the iconic Skylight Dome, this event promises an exhilarating mix of high-energy performances, captivating choreography, and an electrifying atmosphere. Feel the pulse of the music, soak in the colorful neon glow, and dance the night away with fans from all over. This is the perfect way to celebrate the pop music you love with your friends and fellow fans. Don't miss out on an evening of unforgettable hits and good vibes!",
        date: "2024-12-12",
        location: "Skylight Dome",
        cost: 75,
        organiser: "Neon Lights Productions",
        image: "https://thumbs.dreamstime.com/b/vibrant-s-pop-concert-boy-band-metallic-stage-lasers-fans-waving-glow-sticks-vibrant-s-pop-concert-boy-band-metallic-321487356.jpg"
    }, 
    {
        title: "Outdoor Adventure Expo",
        description: "Calling all outdoor enthusiasts! The Outdoor Adventure Expo is your one-stop destination to discover the latest gear, trends, and techniques for outdoor activities. From hiking and camping to rock climbing and kayaking, this event showcases products and services from top outdoor brands. Whether you're a seasoned adventurer or just starting out, the expo offers something for everyone. Attend live demonstrations, participate in hands-on workshops, and learn from experts in the field. There will also be opportunities to connect with fellow adventurers, share stories, and get advice on how to enhance your outdoor experiences. Plus, check out the latest innovations in outdoor gear, from high-performance jackets to eco-friendly camping equipment. Whether you,re looking to upgrade your gear or simply find some inspiration for your next adventure, the Outdoor Adventure Expo is the place to be.",
        date: "2024-11-28",
        location: "Mountainview Park",
        cost: 20,
        organiser: "Outdoor Life Co.",
        image: "https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a"
    },
    {
        title: "Tech Talk: Innovations in AI",
        description: "Join us for an in-depth exploration of the latest advancements in Artificial Intelligence at Tech Talk: Innovations in AI. This event will bring together AI researchers, developers, and industry leaders to discuss cutting-edge technologies, breakthroughs, and the potential future impact of AI across various sectors. Topics will include machine learning, neural networks, autonomous systems, and AI ethics, offering valuable insights into how AI is shaping industries such as healthcare, finance, transportation, and more. Attendees will have the opportunity to participate in interactive sessions, engage with thought leaders, and network with professionals in the AI field. Whether you're a tech enthusiast, a startup founder, or a corporate leader, this event will equip you with the knowledge and connections needed to stay ahead in the rapidly evolving world of AI.",
        date: "2024-11-22",
        location: "Innovation Hub",
        cost: 55,
        organiser: "AI Futures",
        image: "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-1536x1024.jpg"
    },
    {
        title: "Sunset Beach Party",
        description: "Join us for an unforgettable evening at the Sunset Beach Party, where the sun meets the sea and the music flows all night long. Held at the scenic Oceanview Beach, this event promises to be a night of relaxation, fun, and good vibes. Enjoy live music from local bands, chill out on the beach with friends, and dance barefoot in the sand as the sun sets behind you. With food trucks offering delicious snacks and cold drinks, there's no better way to unwind after a long week. The Sunset Beach Party is the ultimate way to enjoy the natural beauty of the coastline while having a blast with great company. Whether you're looking to catch up with friends, make new ones, or simply enjoy a laid-back evening by the ocean, this event has everything you need to make memories that will last a lifetime.",
        date: "2024-11-30",
        location: "Oceanview Beach",
        cost: 25,
        organiser: "Seaside Events",
        image: "https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg"
    },
    {
        title: "Food Truck Festival",
        description: "Get ready to indulge in a culinary adventure at the Food Truck Festival! This exciting event will feature a wide variety of food trucks serving up delicious dishes from around the world. Whether you're craving gourmet burgers, savory tacos, fresh sushi, or decadent desserts, there will be something for everyone to enjoy. The festival will also include live entertainment, games, and family-friendly activities, making it the perfect outing for all ages. With so many flavors to choose from, food lovers are sure to find something that satisfies their cravings. In addition to great food, the festival will showcase local food vendors and artisans, offering an opportunity to support small businesses. Come hungry and ready for a fun day of eating, exploring, and enjoying the vibrant atmosphere of the Food Truck Festival.",
        date: "2024-12-05",
        location: "Riverfront Plaza",
        cost: "Free",
        organiser: "Foodie World",
        image: "https://www.partyone.in/suploads/2024/Feb/05/34408/1707118405weeding_food_truck.webp"
    },
    {
        title: "Photography Masterclass",
        description: "Take your photography skills to the next level with our Photography Masterclass. This event is designed for both beginner and experienced photographers who want to improve their technical skills and creativity. Led by renowned professional photographers, the masterclass will cover a wide range of topics, including lighting techniques, composition, and post-processing. Whether you're using a DSLR, mirrorless camera, or smartphone, you'll learn valuable tips and tricks to capture stunning images in any setting. The class will also include hands-on shooting sessions, where participants will have the chance to apply what they've learned in real-world scenarios. Whether you're interested in landscape photography, portraits, or street photography, this masterclass offers expert guidance to help you enhance your photography portfolio.",
        date: "2024-12-08",
        location: "Photo Studio NYC",
        cost: 120,
        organiser: "Lens Masters",
        image: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg"
    },
    {
        title: "Classical Music Gala",
        description: "Experience an evening of elegance and sophistication at the Classical Music Gala, where world-class musicians perform timeless masterpieces in an intimate concert setting. Held at the Grand Hall Theater, this event features a carefully curated program of classical music, including works by legendary composers such as Beethoven, Mozart, and Tchaikovsky. Whether you're a lifelong fan of classical music or new to the genre, this gala will transport you to another world with its powerful performances. Attendees can enjoy an exquisite night of music in a stunning venue, complete with breathtaking acoustics. The gala is perfect for music lovers, cultural enthusiasts, or anyone seeking a memorable evening out. Don't miss this chance to hear some of the best classical performances of the year, and celebrate the beauty of classical music in a beautiful setting.",
        date: "2024-11-26",
        location: "Grand Hall Theater",
        cost: 90,
        organiser: "Royal Music Society",
        image: "https://aze.media/wp-content/uploads/2021/10/Classical-Music-Wallpaper-e1633331488947.jpeg"
    },
    {
        title: "Vegan Cooking Workshop",
        description: "Join us for an immersive Vegan Cooking Workshop, where you'll learn how to create delicious, plant-based meals from scratch. Our expert chefs will guide you through every step of preparing a range of vegan dishes, from hearty breakfasts to decadent desserts. The workshop will focus on using fresh, seasonal ingredients and healthy cooking techniques that allow you to make the most of plant-based foods. Whether you're new to vegan cooking or looking to expand your culinary skills, this workshop will provide you with the tools and recipes you need to create tasty, nutritious meals at home. At the end of the session, you'll enjoy a full meal and take home a recipe booklet to continue your culinary journey.",
        date: "2024-12-10",
        location: "Healthy Eats Kitchen",
        cost: 40,
        organiser: "Green Kitchen Co.",
        image: "https://bansaloilandfoods.com/wp-content/uploads/2022/12/scale.jpg"
    },
    {
        title: "Farmers Market Festival",
        description: "Step into the heart of the community and support local farmers and artisans at the Farmers Market Festival. This lively event brings together the best local produce, handmade goods, and craft items, all in one vibrant location. You’ll find everything from fresh fruits and vegetables to homemade jams, organic honey, and hand-knitted scarves. In addition to shopping, enjoy live music, food trucks, and fun activities for the whole family. It's a great opportunity to connect with local farmers, learn about sustainable practices, and discover new products while supporting small businesses. Whether you're looking to stock up on healthy produce or just enjoy a day out in the fresh air, the Farmers Market Festival is the place to be.",
        date: "2024-12-12",
        location: "Greenwood Square",
        cost: "Free",
        organiser: "Farmers Market Co.",
        image: "https://www.abc4.com/wp-content/uploads/sites/4/2023/05/FarmersMarkets_ABC4Utah.jpeg?w=1000"
    },
    {
        title: "Paint and Sip Night",
        description: "Unleash your inner artist at Paint and Sip Night, where creativity flows as freely as the wine! Whether you're a seasoned painter or a complete beginner, this relaxed event offers a fun, supportive environment to create your own masterpiece. Guided by an experienced instructor, you'll follow along as you learn how to paint step-by-step, all while enjoying a glass of wine or two. The night is designed to be social, so bring friends, family, or come solo and meet fellow art lovers. At the end of the session, you'll leave with your own painting and a sense of accomplishment. No prior painting experience is necessary—just bring your creativity and a willingness to have fun!",
        date: "2024-12-15",
        location: "Art Studio 101",
        cost: 30,
        organiser: "Creative Vibes",
        image: "https://as2.ftcdn.net/v2/jpg/08/90/63/43/1000_F_890634375_ScS5jmzQhbdYteumang8qXlOlXR3op39.jpg"
    },   
    {
        title: "Winter Wonderland Run",
        description: "Get into the holiday spirit with the Winter Wonderland Run! This festive 5K race takes place through a beautifully decorated winter landscape, with twinkling lights and holiday-themed surprises along the route. Whether you're a seasoned runner or just looking for a fun way to enjoy the season, this event is perfect for all fitness levels. Participants are encouraged to wear holiday costumes or festive attire, and prizes will be awarded for the best-dressed runners. After the race, enjoy hot cocoa and holiday treats at the finish line while listening to live music and celebrating with fellow runners. This is a great way to stay active during the winter months while embracing the joy of the season.",
        date: "2024-11-22",
        location: "Winter Park",
        cost: 15,
        organiser: "Holiday Run Co.",
        image: "https://img.pikbest.com/wp/202345/snow-flake-snowboarder-is-flying-down-a-mountain-as-flakes-fall_9586263.jpg!bw800"
    },
    {
        title: "Guitar Masterclass",
        description: "Take your guitar playing to the next level with this exclusive Guitar Masterclass. Whether you're a beginner or intermediate guitarist, this event is designed to enhance your skills and expand your musical knowledge. Led by a renowned guitar virtuoso, the masterclass will focus on various playing techniques, from fingerstyle to shredding, as well as theory, improvisation, and songwriting. Participants will also have the opportunity to ask questions and receive personalized feedback. Whether you play acoustic or electric guitar, this session will provide valuable insights and inspiration to help you grow as a musician. Bring your guitar and get ready to learn some new tricks and tips that will take your playing to new heights.",
        date: "2024-12-25",
        location: "Music Studio",
        cost: 70,
        organiser: "Guitar Pros",
        image: "https://plus.unsplash.com/premium_photo-1671934973818-8529ac9c4d2d?fm=jpg&q=60&w=1000"
    }
];


export default eventsData;