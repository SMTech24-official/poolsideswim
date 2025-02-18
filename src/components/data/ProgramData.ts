import bronzeCrossImage from "../../assets/program/bronze-cross.png";
import bronzeMedallionImage from "../../assets/program/bronze-medallion.png";
import bronzeStarImage from "../../assets/program/bronze-star.png";

export const programData = [
  {
    id: "1",
    title: "Bronze Cross",
    price: "560",
    description:
      "Bronze Cross begins the transition from lifesaving to lifeguarding and prepares candidates for responsibilities as assistant lifeguards. Candidates strengthen and expand their lifesaving skills and begin applying the principles and techniques of surveillance in aquatic facilities. Bronze Cross emphasizes the importance of teamwork and communication in preventing and responding to aquatic emergencies. Bronze Cross is a prerequisite for advanced training in the Society’s National Lifeguard and leadership certification programs.",
    prerequisite:
      "Bronze Medallion and Lifesaving Society Emergency or Standard First Aid certifications (need not be current) or EFA or SFA from one of these approved agencies. (18 months to 3 years)",
    duration: "90 min",
    schedule: "Monday - Friday",
    images: {
      url: bronzeCrossImage,
      altText: "Bronze Cross",
    },
  },
  {
    id: "2",
    title: "Bronze Medallion",
    price: "560",
    description:
      "Bronze Medallion challenges the candidate both mentally and physically. Judgment, knowledge, skill, and fitness – the four components of water rescue – form the basis of Bronze Medallion training. Candidates develop the assessment and problem-solving skills needed to make good decisions in, on, and around the water. Bronze Medallion is a prerequisite for advanced training in Bronze Cross.",
    prerequisite:
      "Minimum 13 years of age or Bronze Star certification (need not be current).",
    duration: "90 min",
    schedule: "Monday - Friday",
    images: {
      url: bronzeMedallionImage,
      altText: "Bronze Cross",
    },
  },
  {
    id: "3",
    title: "Bronze Star",
    price: "250",
    description:
      "Bronze Star develops swimming proficiency, lifesaving skill and personal fitness. Candidates refine their stroke mechanics, acquire self-rescue skills, and apply fitness principles in training workouts. Bronze Star is excellent preparation for success in Bronze Medallion and provides a fun introduction to lifesaving sport.",
    prerequisite: "None (Swim Patrol experience recommended.)",
    duration: "30 min",
    schedule: "Monday - Friday",
    images: {
      url: bronzeStarImage,
      altText: "Bronze Cross",
    },
  },
];
