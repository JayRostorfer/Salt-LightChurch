import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const ministries = [
  {
    slug: "kids",
    title: "Blast Kids",
    subtitle: "Safe, Fun & Growing in Faith",
    shortDescription:
      "A joyful environment where children learn about God through fun activities and biblical teaching.",

    description:
      "Blast Kids is a vibrant ministry dedicated to helping children grow spiritually in a safe, joyful, and engaging environment. Through worship, games, bible lessons, and group activities, children develop their faith while building friendships.",

    heroImage: "/images/ministries/kids.jpg",

    experiences: [
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }, 
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }
], 
    gallery: [
      "/images/rocksalt1.jpg",
      "/images/rocksalt2.jpg",
      "/images/rocksalt3.jpg",
    ],
  },

  {
    slug: "young-adults",
    title: "Young Adults",
    subtitle: "Faith, Community & Purpose",

    shortDescription:
      "Helping young adults grow spiritually, build friendships, and discover purpose.",

    description:
      "Young Adults is a community designed for students and young professionals who want to grow deeper in their relationship with God while building authentic relationships.",

    heroImage: "/images/ministries/youth.jpg",

      experiences: [
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }, 
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }
], 

    gallery: [
      "/images/belight1.jpg",
      "/images/belight2.jpg",
      "/images/belight3.jpg",
    ],
  },

  {
    slug: "aroma-women",
    title: "Aroma Women",
    subtitle: "Women Growing Together in Christ",

    shortDescription:
      "Encouraging women through faith, fellowship, and spiritual growth.",

    description:
      "Aroma Women is a welcoming ministry where women connect, grow spiritually, and encourage one another through fellowship, worship, and community activities.",

    heroImage: "/images/ministries/women.jpg",

      experiences: [
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }, 
  { label: "Prayer", icon: VolunteerActivismIcon },
  { label: "Unity", icon: GroupsIcon },
  { label: "Fellowship", icon: FavoriteIcon }
], 
    gallery: [
      "/images/aroma1.jpg",
      "/images/aroma2.jpg",
    ],
  },
]

export default ministries
