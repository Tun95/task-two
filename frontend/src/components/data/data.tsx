interface Option {
  value: string;
  label: string;
}

export const opportunity: Option[] = [
  {
    value: "1745",
    label: "Applied",
  },
  {
    value: "1745",
    label: "Opportunity Browsing",
  },
  {
    value: "453",
    label: "Shortlisted",
  },
  {
    value: "123",
    label: "Technical Interview",
  },
  {
    value: "25",
    label: "Video Interview I",
  },
  {
    value: "25",
    label: "Video Interview II",
  },
  {
    value: "25",
    label: "Video Interview III",
  },
  {
    value: "25",
    label: "Offer",
  },
  {
    value: "25",
    label: "Withdrawn",
  },
];

interface CandidateData {
  firstName: string;
  lastName: string;
  location: string;
  school: string;
  experience: string;
  hashtags: string[];
  tags: string[];
  qualified: boolean;
  disqualified: boolean;
  opportunity: Option[]; // Use 'opportunity' instead of 'opportunity'
}

const data: CandidateData[] = [
  {
    firstName: "Tunji",
    lastName: "Akande",
    location: "Boston, USA",
    school: "Bachelor - MIT (2023 - 2023)",
    hashtags: ["#top_candidate", "#top_candidate", "#me"],
    experience: "junior",
    tags: ["New York"],
    qualified: true,
    disqualified: false,
    opportunity: opportunity, // Use the 'opportunity' array here
  },
  {
    firstName: "John",
    lastName: "Doe",
    location: "Boston, USA",
    school: "Associate - MIT (2023 - 2023)",
    hashtags: ["#top_candidate"],
    experience: "intermediate",
    tags: ["New York"],
    qualified: false,
    disqualified: true,
    opportunity: opportunity, // Use the 'opportunity' array here
  },
  {
    firstName: "Ola",
    lastName: "Josh",
    location: "Boston, USA",
    school: "Associate - MIT (2023 - 2023)",
    hashtags: ["#top_candidate", "#top"],
    experience: "senior",
    tags: ["New York"],
    qualified: false,
    disqualified: false,
    opportunity: opportunity, // Use the 'opportunity' array here
  },
  {
    firstName: "John",
    lastName: "Doe",
    location: "Boston, USA",
    school: "Bachelor - MIT (2023 - 2023)",
    hashtags: ["#top_candidate"],
    experience: "junior",
    tags: ["New York"],
    qualified: true,
    disqualified: false,
    opportunity: opportunity, // Use the 'opportunity' array here
  },
  {
    firstName: "John",
    lastName: "Bolaji",
    location: "Boston, USA",
    school: "Bachelor - MIT (2023 - 2023)",
    hashtags: ["#top_candidate"],
    experience: "junior",
    tags: ["New York"],
    qualified: true,
    disqualified: false,
    opportunity: opportunity, // Use the 'opportunity' array here
  },
];

export default data;
