import kandy from "./../assets/images/pakcages/kandy.png";
import kandydes from "./../assets/images/pakcages/kandydes.jpg";
import sigiriya from "./../assets/images/pakcages/sigiriya1.jpg";
import yala from "./../assets/images/pakcages/yala.png";

export const generalFaqItems = [
  {
    title: "What is the purpose of your immigration consulting services?",
    des: "Our services aim to guide individuals and businesses through the complex immigration process with personalized support, ensuring each step is clear and smooth."
  },
  {
    title: "Why should I choose your agency over others?",
    des: "With years of expertise and a team of experienced consultants, we specialize in providing tailored advice to suit your unique immigration needs, making the process stress-free."
  },
  {
    title: "How long does the immigration process typically take?",
    des: "The processing time varies depending on the visa type and the country’s regulations. Our consultants will provide a detailed timeline after assessing your specific case."
  },
  {
    title: "Do you offer services for rejected visa applications?",
    des: "Yes, we provide assistance with reviewing and appealing rejected visa applications. Our team will analyze your case and offer guidance on the best path forward."
  }
];

// sampleData.js
export const packages = [
  {
    id: 2,
    name: "Sri Lanka Tour Package 3 Days",
    image: kandy,
    slug: "sri-lanka-tour-package-3-days",
    stars: 4,
    price: 570,
    days: 7,
    country: "Sri Lanka",
    itinerary: [
      {
        day: "Day 01 - Sigiriya & Dambulla",
        details: [
          "An essential destination of every Sri Lanka trips, the amazing ancient rock fortress of Sigiriya might strike one as a peculiar sight. Its round structure and its intricate ancient urban landscape surely astound the best of us! Declared as a world heritage by UNESCO, this massive column of rock once used to be the capital of an ancient Sri Lankan kingdom. As you step into Sigiriya rock, you are bound to be amazed by the infamous Sigiriya frescoes depicting the beautiful Lankan women of the fifth century. The Mirror Wall, providing an outlook of ancient poetry, gives you a glimpse into the lives of early visitors of the site. Moreover, you will be overwhelmed by the beauty of the Gardens of Sigiriya as you wonder about the intellect and ingenuity of the ancient minds at work. Topping the list of tourist destinations in our Sri Lanka tour packages, Sigiriya fortress is a captivating masterpiece of ancient urban landscape and architecture.",
          "Dambulla is an ancient city that offers many natural and spiritual wonders to be discovered. It is one of the most sought-after attractions in our Sri Lanka tour packages filled with dominance and epic grandeur. With its scenic spots such as the ironwood forest, the breathtaking rose quartz mountain, the world-famous Rangiri International Stadium, and the serene landscape of Na Uyana Aranya, the majestic city of Dambulla is sure to be one of your favorites in an adventurous Sri Lanka trip to explore and enjoy the magnificence of this ancient paradise. As you traverse this fascinating city, you are welcomed by the largest and well-preserved cave complex on the island, filled with rich and colorful paintings and sculptures depicting the bold history Lanka. Yes, you are absolutely right! This is your chance to grab the perfect adventurous and fun getaway on this beautiful tropical island."
        ],
        image: sigiriya,
        activities: [
          {
            title: "Activities",
            list_items: [
              "Private English speaking driver for the entire journey",
              "Arrive at Sri Lanka (Katunayake International Airport)",
              "Warm welcome from our Olanka representative and driver at the airport",
              "Proceed to the ancient city; Sigiriya",
              "Check in at the beautiful hotel and refresh",
              "Enter the famous Sigiriya Rock Fortress and Frescoes",
              "Enjoy a wonderful Sri Lankan traditional boat ride",
              "Experience how Sri Lankan ancestors travelled through a cart ride",
              "Experience Sri Lankan culture in a truly village experience",
              "Enjoy the best cuisines the island has to offer"
            ]
          }
        ],
        highlight: [
          {
            des: "Highlight",
            img: kandy
          }
        ]
      },
      {
        day: "Day 02 - Kandy",
        details: [
          "An essential destination of every Sri Lanka trips, the amazing ancient rock fortress of Sigiriya might strike one as a peculiar sight. Its round structure and its intricate ancient urban landscape surely astound the best of us! Declared as a world heritage by UNESCO, this massive column of rock once used to be the capital of an ancient Sri Lankan kingdom. As you step into Sigiriya rock, you are bound to be amazed by the infamous Sigiriya frescoes depicting the beautiful Lankan women of the fifth century. The Mirror Wall, providing an outlook of ancient poetry, gives you a glimpse into the lives of early visitors of the site. Moreover, you will be overwhelmed by the beauty of the Gardens of Sigiriya as you wonder about the intellect and ingenuity of the ancient minds at work. Topping the list of tourist destinations in our Sri Lanka tour packages, Sigiriya fortress is a captivating masterpiece of ancient urban landscape and architecture.",
          "Dambulla is an ancient city that offers many natural and spiritual wonders to be discovered. It is one of the most sought-after attractions in our Sri Lanka tour packages filled with dominance and epic grandeur. With its scenic spots such as the ironwood forest, the breathtaking rose quartz mountain, the world-famous Rangiri International Stadium, and the serene landscape of Na Uyana Aranya, the majestic city of Dambulla is sure to be one of your favorites in an adventurous Sri Lanka trip to explore and enjoy the magnificence of this ancient paradise. As you traverse this fascinating city, you are welcomed by the largest and well-preserved cave complex on the island, filled with rich and colorful paintings and sculptures depicting the bold history Lanka. Yes, you are absolutely right! This is your chance to grab the perfect adventurous and fun getaway on this beautiful tropical island."
        ],
        image: kandydes,
        activities: [
          {
            title: "Activities Day 01",
            list_items: [
              "Private English speaking driver for the entire journey",
              "Arrive at Sri Lanka (Katunayake International Airport)",
              "Warm welcome from our Olanka representative and driver at the airport",
              "Proceed to the ancient city; Sigiriya",
              "Check in at the beautiful hotel and refresh",
              "Enter the famous Sigiriya Rock Fortress and Frescoes",
              "Enjoy a wonderful Sri Lankan traditional boat ride",
              "Experience how Sri Lankan ancestors travelled through a cart ride",
              "Experience Sri Lankan culture in a truly village experience",
              "Enjoy the best cuisines the island has to offer"
            ]
          }
        ],
        highlight: [
          {
            des: "Highlight",
            img: kandy
          }
        ]
      }
    ],
    inclusion: {
      included: [
        "Airport pick up and drop off",
        "Accommodation on bed & breakfast basis on mention hotels below",
        "Private English speaking driver for the entire journey"
      ],
      excluded: [
        "Air-tickets are not included in this package",
        "Camera and video permits are excluded",
        "Guide/Driver tips are not included"
      ],
      booking_information:
        "Once booking details are submitted by you, we will go ahead with the booking process. At this stage, we require a 20% payment from you. A booking confirmation will reach you after 48 hours of making the payment. A balance of 80% of the payment is required, 30 days prior to the tour start date. Then you may go ahead with applying for Visa.",
      cancellation_policy:
        "All travel offers listed on our website are discounted. As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion. Thus, no refund for Cancellations made with less than 30 days from the start of a tour and for No-show."
    },
    summary: {
      description: `
        This 3-day tour package will cover the sacred city of Kandy and
        the bustling city of Colombo. With numerous historical
        influences and cultural significance, Kandy’s focal point is the
        Temple of Tooth, ‘Dalada Maligawa’ that preserves the tooth
        relic of Lord Buddha.
      `,
      activities: [
        "Visit the Pinnawala Elephant Orphanage",
        "Enjoy a Kandy City Tour"
      ],
      locations: ["Kandy", "Colombo"]
    }
  }

  // Add more tour packages here
];
